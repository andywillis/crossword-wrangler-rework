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
        console.log(`${year.toString().slice(2)}${padNumber(m)}${padNumber(d)}`)
        arr.push(`${year.toString().slice(2)}${padNumber(m)}${padNumber(d)}`);
      }

    }

  }

  return arr;

}

export function getUriData(uri, years) {
  return years.map(year => {
    const datesPerYear = getWeekDayCalendar(year);
    return {
      year,
      data: datesPerYear.map(date => {
        return {
          date,
          easy: `${uri}easy_${date}.xml`,
          quick: `${uri}quic_${date}.xml`
        };
      })
    };
  });
}
