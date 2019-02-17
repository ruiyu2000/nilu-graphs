// @flow

import axios from 'axios';
import moment from 'moment';

export const setObservations = observations => ({
  type: 'OBSERVATIONS_SET',
  payload: { observations }
});

const dateFormat = 'YYYY-MM-DD';

export const getObservation = () => async (dispatch, getState) => {
  const { selectedId: selectedStation } = getState().stations;
  const { selectedId: selectedComponent } = getState().components;
  const fromTime = moment()
    .subtract(1, 'month')
    .format(dateFormat);
  const toTime = moment().format(dateFormat);
  try {
    let query = `/obs/historical/${fromTime}/${toTime}/${selectedStation}`;
    if (selectedComponent) query += `?components=${selectedComponent}`;
    const result = await axios.get(query);
    dispatch(setObservations(result.data));
  } catch (error) {
    console.error(error);
  }
};
