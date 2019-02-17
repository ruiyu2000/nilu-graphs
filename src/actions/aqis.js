// @flow

import axios from 'axios';

import type { ReturnType, AQI } from '../types';

const AQIS_SET: 'AQIS_SET' = 'AQIS_SET';
export const setAQIs = (items: Array<AQI>) => ({
  type: AQIS_SET,
  payload: { items }
});
export type SetAQIsAction = ReturnType<typeof setAQIs>;

export type Action = SetAQIsAction;

export const fetchAQIs = () => async dispatch => {
  try {
    const result = await axios.get('/lookup/aqis');
    if (result && result.data) {
      dispatch(setAQIs(result.data));
    }
  } catch (error) {
    console.error(error);
  }
};
