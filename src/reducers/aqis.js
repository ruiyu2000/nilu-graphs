// @flow

import type { AQI } from '../types';
import type { Action } from '../actions/aqis';

type State = {
  +items: Array<AQI>,
  +selectedId: ?number
};

const initialState: State = {
  items: [],
  selectedId: null
};

export default function(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'AQIS_SET':
      return { ...state, items: action.payload.items };
    default:
      return state;
  }
}
