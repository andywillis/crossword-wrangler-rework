import createThrottle from 'async-throttle';
import { createRequire } from 'module';
import { parseString } from 'xml2js';
import { promisify } from 'util';

const require = createRequire(import.meta.url);

const throttle = createThrottle(10);
const xmlParseString = promisify(parseString);

require('colors');
require('draftlog').into(console);

export function padNumber(n) {
  const s = n.toString();
  return s.length === 1 ? `0${s}` : s;
}

export function getWeekDayCalendar(year) {

  const arr = [];

  for (let m = 1; m <= 12; m++) {

    // JS is messy - to get the number of days in a month
    // use the actual month number (starting from index 1)
    const date = new Date(year, m, 0);

    const daysInMonth = date.getDate();

    for (let d = 1; d <= daysInMonth; d++) {

      // ...but to get the day of the week
      // you need to use a zero-index month!
      const date = new Date(year, m - 1, d);

      const dayNumber = date.getDay();

      if (dayNumber > 0 && dayNumber < 6) {
        // console.log(`${year.toString().slice(2)}${padNumber(m)}${padNumber(d)}`);
        arr.push(`${year.toString().slice(2)}${padNumber(m)}${padNumber(d)}`);
      }

    }

  }

  return arr;

}

function getClues(obj) {
  const { title, clue: cluesArr } = obj;
  const label = title[0].b[0];
  const clues = cluesArr.map((o) => {
    const { _: clue, $: meta } = o;
    return { clue, meta };
  });
  return { label, clues };
}

function restructureData(data) {
  try {

    const { crossword } = data['crossword-compiler']['rectangular-puzzle'][0];
    const { grid, word, clues: cluesArr } = crossword[0];
    const { $: { width, height }, cell } = grid[0];

    const squares = cell.map(o => o.$);
    const words = word.map(o => o.$);

    const clues = {};
    const clueSet1 = getClues(cluesArr[0]);
    const clueSet2 = getClues(cluesArr[1]);
    clues[clueSet1.label.toLowerCase()] = clueSet1.clues;
    clues[clueSet2.label.toLowerCase()] = clueSet2.clues;

    return { width, height, squares, words, clues };

  } catch (err) {
    return null;
  }
}

async function processXML(endpoint, status) {
  status(`Processing: ${endpoint}`.blue);
  try {
    const res = await fetch(endpoint);
    const xml = await res.text();
    return restructureData(await xmlParseString(xml));
  } catch (err) {
    console.log(err);
  }
}

export async function getUriData(uri, years) {

  const data = years.map(async year => {

    const datesPerYear = getWeekDayCalendar(year);

    const promises = datesPerYear.map(date => throttle(async () => {

      const status = console.draft();

      return {
        date,
        easy: {
          uri: `${uri}easy_${date}.xml`,
          data: await processXML(`${uri}easy_${date}.xml`, status)
        },
        quick: {
          uri: `${uri}quic_${date}.xml`,
          data: await processXML(`${uri}quic_${date}.xml`, status)
        }
      };

    }));

    return {
      year,
      data: await Promise.all(promises)
    };

  });

  return Promise.all(data);

}
