import store from './index';

// eslint-disable-next-line no-unused-vars
const { dispatch, getState } = store;

// eslint-disable-next-line import/prefer-default-export
export function getConfig() {
  return getState().config;
}
