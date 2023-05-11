const formatter = new Intl.DateTimeFormat(
  'en-GB',
  { year: 'numeric', month: 'numeric', day: 'numeric' }
);

/**
 * getToday
 *
 * @export
 * @param {string} [delimiter='']
 * @return {string}
 */
export function getToday(delimiter = '') {
  const [ day, month, year ] = formatter.format(new Date()).split('/');
  return [ year.slice(-2), month, day ].join(delimiter);
}

/**
 * getNowDate
 *
 * @export
 * @param {string} delimiter
 * @return {*}
 */
export function getNowDate(delimiter: string) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const now = new Date().toLocaleString('en-GB', options);
  const re = /(\d{2})\/(\d{2})\/(\d{4})/g;
  return now.replace(re, (all, d, m, y) => {
    const year = delimiter ? y : y.substr(2, 2);
    return delimiter ? `${year}-${m}-${d}` : `${year}${m}${d}`;
  });
}

/**
 * isWeekDay
 *
 * @export
 * @param {string} date
 * @return {boolean}
 */
export function isAWeekDay(date: string) {
  const d = `20${date.substr(0, 2)}-${date.substr(2, 2)}-${date.substr(4, 2)}`;
  const n = new Date(d).getDay();
  return [ 1, 2, 3, 4, 5 ].includes(n);
}

/**
 * formatData
 *
 * @export
 * @param {string} str
 * @return {string}
 */
export function formatDate(str: string) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
  return new Date(str).toLocaleString('en-GB', options);
}

/**
 * stripDate
 *
 * @export
 * @param {string} date
 * @return {string}
 */
export function stripDate(date: string) {
  const [ year, month, day ] = date.split('-');
  return `${year.substr(2, 2)}${month}${day}`;
}
