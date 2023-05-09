import createThrottle from 'async-throttle';
import { createRequire } from 'module';
import { parseString } from 'xml2js';
import { promisify } from 'util';

import restructureData from './crossword';
import { getWeekDayCalendar } from './calendar';

const require = createRequire(import.meta.url);

const throttle = createThrottle(10);
const xmlParseString = promisify(parseString);

require('colors');
require('draftlog').into(console);

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
 * getUriData
 *
 * @export
 * @param {string} uri
 * @param {array} years
 * @return {array}
 */
export default async function getUriData(uri, years) {

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
