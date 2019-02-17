// @flow

import axios from 'axios';

import type { ReturnType, Station } from '../types';

const STATIONS_SET: 'STATIONS_SET' = 'STATIONS_SET';
export const setStations = (items: Array<Station>) => ({
  type: STATIONS_SET,
  payload: { items }
});
export type SetStationsAction = ReturnType<typeof setStations>;

const STATION_SELECT: 'STATION_SELECT' = 'STATION_SELECT';
export const selectStation = (selectedId: string) => ({
  type: STATION_SELECT,
  payload: { selectedId }
});
export type SelectStationAction = ReturnType<typeof selectStation>;

export type Action = SetStationsAction | SelectStationAction;

export const fetchStations = () => async dispatch => {
  try {
    const result = await axios.get('/lookup/stations');
    if (result && result.data) {
      dispatch(setStations(result.data));
    }
  } catch (error) {
    console.error(error);
  }
};
