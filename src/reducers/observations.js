// @flow

type State = {};

const initialState: State = {};

export default function(state: State = initialState, action) {
  switch (action.type) {
    case 'OBSERVATIONS_SET':
      return action.payload.observations;
    default:
      return state;
  }
}
