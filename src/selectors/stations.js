// @flow

import { createSelector } from 'reselect';

import { getSelectedId as getSelectedAreaId } from './areas';

const getStations = state => state.stations.items;

export const getStationsFilteredOnArea = createSelector(
  [getStations, getSelectedAreaId],
  (stations, selectedAreaId) =>
    stations.filter(station => station.area === selectedAreaId)
);
