import reducer from './reducer';

const initialState = {
  config: {
    years: [ 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023 ]
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
