export default function reducer(state, action) {

  const { type, payload } = action;

  switch (type) {

    case 'addData': {
      return {
        ...state,
        [payload.date]: {
          easy: payload.easy,
          quick: payload.quick
        }
      };
    }

    default: return state;

  }

}
