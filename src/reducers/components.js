// @flow

import type { AComponent } from '../types';
import type { Action } from '../actions/components';

type State = {
  +items: Array<AComponent>,
  +selectedId: ?string
};

const initialState: State = {
  items: [],
  selectedId: null
};

export default function(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'COMPONENTS_SET':
      return { ...state, items: action.payload.items };
    case 'COMPONENT_SELECT':
      return { ...state, selectedId: action.payload.selectedId };
    default:
      return state;
  }
}
