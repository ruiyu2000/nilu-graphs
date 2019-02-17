// @flow

import type { Station } from '../types';
import type { Action } from '../actions/stations';

type State = {
  +items: Array<Station>,
  +selectedId: ?number
};

const initialState: State = {
  items: [],
  selectedId: null
};

export default function(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'STATIONS_SET':
      return { ...state, items: action.payload.items };
    case 'STATION_SELECT':
      return { ...state, selectedId: action.payload.selectedId };
    default:
      return state;
  }
}
