import { createCalendarBallObject } from '../lib/calendar';

import reducer from './reducer';

const year = [
  2016, 2017, 2018, 2019,
  2020, 2021, 2022, 2023
];

const month = [
  'JAN', 'FEB', 'MAR', 'APR',
  'MAY', 'JUN', 'JUL', 'AUG',
  'SEP', 'OCT', 'NOV', 'DEC'
];

const day = Array.from({ length: 31 }, (e, i) => i);

const initialState = {
  config: {
    year: year.map(el => createCalendarBallObject(el, 'year')),
    month: month.map(el => createCalendarBallObject(el, 'month')),
    day: day.map(el => createCalendarBallObject(el, 'day'))
  }
};

function createStore(reducer, initialState) {

  let state = { ...initialState };

  function dispatch(action) {
    state = reducer(state, action);
  }

  function getState() {
    return state;
  }

  return { dispatch, getState };

}

export default createStore(reducer, initialState);
