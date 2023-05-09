import fs from 'fs/promises';
import createThrottle from 'async-throttle';
import { createRequire } from 'module';
import { parseString } from 'xml2js';
import { promisify } from 'util';

import rootname from '../../rootname';
import { getWeekDayCalendar } from './calendar';

const require = createRequire(import.meta.url);

const throttle = createThrottle(10);
const xmlParseString = promisify(parseString);

require('colors');
require('draftlog').into(console);

/**
 * getClues
 *
 * @export
 * @param {object} obj
 * @return {object}
 */
export function getClues(obj) {
  const { title, clue: cluesArr } = obj;
  const label = title[0].b[0];
  const clues = cluesArr.map((o) => {
    const { _: clue, $: meta } = o;
    return { clue, meta };
  });
  return { label, clues };
}

/**
 * restructureData
 *
 * @export
 * @param {object} data
 * @return {object}
 */
export function restructureData(data) {
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

/**
 * fetchAndProcessXML
 *
 * @param {string} endpoint
 * @param {function} status
 * @return {object}
 */
async function fetchAndProcessXML(endpoint, status) {
  status(`Processing: ${endpoint}`.blue);
  try {
    const res = await fetch(endpoint);
    const xml = await res.text();
    return restructureData(await xmlParseString(xml));
  } catch (err) {
    console.log(err);
  }
}

/**
 * bundleUriData
 *
 * @export
 * @param {string} uri
 * @param {array} years
 * @return {array}
 */
export async function bundleUriData(uri, years) {

  const data = years.map(async year => {

    const datesPerYear = getWeekDayCalendar(year);

    const promises = datesPerYear.map(date => throttle(async () => {

      const status = console.draft();

      return {
        date,
        easy: {
          uri: `${uri}easy_${date}.xml`,
          data: await fetchAndProcessXML(`${uri}easy_${date}.xml`, status)
        },
        quick: {
          uri: `${uri}quic_${date}.xml`,
          data: await fetchAndProcessXML(`${uri}quic_${date}.xml`, status)
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

/**
 * downloadUriData
 *
 * @export
 * @param {string} uri
 * @param {array} years
 */
export async function downloadUriData(uri, years) {

  try {
    await fs.stat(`${rootname}/data/archive`);
  } catch (err) {
    await fs.mkdir(`${rootname}/data/archive`);
  }

  years.forEach(year => {

    const datesPerYear = getWeekDayCalendar(year);

    datesPerYear.forEach(date => throttle(async () => {

      const status = console.draft();

      const easy = await fetchAndProcessXML(`${uri}easy_${date}.xml`, status);
      fs.writeFile(`${rootname}/data/archive/easy_${date}.json`, JSON.stringify(easy), 'utf8');

      const quick = await fetchAndProcessXML(`${uri}quic_${date}.xml`, status);
      fs.writeFile(`${rootname}/data/archive/quic_${date}.json`, JSON.stringify(quick), 'utf8');

      status(`XML for ${date} downloaded`.green);

    }));

  });

}
