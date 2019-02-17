// @flow

const initialState = {
  items: [],
  selectedId: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'STATIONS_SET':
      return { ...state, items: action.payload.items };
    case 'STATION_SELECT':
      return { ...state, selectedId: action.payload.selectedId };
    default:
      return state;
  }
}
