// @flow

import { fetchStations } from './stations';
import { fetchAreas } from './areas';
import { fetchAQIs } from './aqis';
import { fetchComponents } from './components';

export const appMounted = () => async dispatch => {
  dispatch(fetchStations());
  dispatch(fetchAreas());
  dispatch(fetchAQIs());
  dispatch(fetchComponents());
};
