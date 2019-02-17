// @flow

const initialState = {
  items: [],
  selectedId: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'AREAS_SET':
      return { ...state, items: action.payload.items };
    case 'AREA_SELECT':
      return { ...state, selectedId: action.payload.selectedId };
    default:
      return state;
  }
}
