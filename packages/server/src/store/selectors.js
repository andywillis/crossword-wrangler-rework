import store from './index';

// eslint-disable-next-line no-unused-vars
const { dispatch, getState } = store;

export function getConfig() {
  return getState().config;
}

export function getCrosswordData(date, type) {
  return getState().crosswordData[date][type].data;
}
