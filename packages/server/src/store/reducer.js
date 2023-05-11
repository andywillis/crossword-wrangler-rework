export default function reducer(state, action) {

  const { type, payload } = action;

  switch (type) {

    case 'loadData': {
      return {
        ...state,
        crosswordData: payload
      };
    }

    default: return state;

  }

}
