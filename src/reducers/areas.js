// @flow

import type { Area } from '../types';
import type { Action } from '../actions/areas';

type State = {
  +items: Array<Area>,
  +selectedId: ?string
};

const initialState: State = {
  items: [],
  selectedId: null
};

export default function(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'AREAS_SET':
      return { ...state, items: action.payload.items };
    case 'AREA_SELECT':
      return { ...state, selectedId: action.payload.selectedId };
    default:
      return state;
  }
}
