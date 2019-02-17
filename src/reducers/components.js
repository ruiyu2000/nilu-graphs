// @flow

const initialState = {
  items: [],
  selectedId: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'COMPONENTS_SET':
      return { ...state, items: action.payload.items };
    case 'COMPONENT_SELECT':
      return { ...state, selectedId: action.payload.selectedId };
    default:
      return state;
  }
}
