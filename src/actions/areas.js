// @flow

import axios from 'axios';

import type { ReturnType, Area } from '../types';

const AREAS_SET: 'AREAS_SET' = 'AREAS_SET';
export const setAreas = (items: Array<Area>) => ({
  type: AREAS_SET,
  payload: { items }
});
export type SetAreasAction = ReturnType<typeof setAreas>;

const AREA_SELECT: 'AREA_SELECT' = 'AREA_SELECT';
export const selectArea = (selectedId: string) => ({
  type: AREA_SELECT,
  payload: { selectedId }
});
export type SelectAreaAction = ReturnType<typeof selectArea>;

export type Action = SetAreasAction | SelectAreaAction;

export const fetchAreas = () => async dispatch => {
  try {
    const result = await axios.get('/lookup/areas');
    if (result && result.data) {
      dispatch(setAreas(result.data));
    }
  } catch (error) {
    console.error(error);
  }
};
