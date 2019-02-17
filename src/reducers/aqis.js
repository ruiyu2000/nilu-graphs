// @flow

const initialState = {
  items: [],
  selectedId: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'AQIS_SET':
      return { ...state, items: action.payload.items };
    default:
      return state;
  }
}
