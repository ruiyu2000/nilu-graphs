// @flow

import axios from 'axios';

import type { ReturnType, AComponent } from '../types';

const COMPONENTS_SET: 'COMPONENTS_SET' = 'COMPONENTS_SET';
export const setComponents = (items: Array<AComponent>) => ({
  type: COMPONENTS_SET,
  payload: { items }
});
export type SetComponentsAction = ReturnType<typeof setComponents>;

const COMPONENT_SELECT: 'COMPONENT_SELECT' = 'COMPONENT_SELECT';
export const selectComponent = (selectedId: string) => ({
  type: COMPONENT_SELECT,
  payload: { selectedId }
});
export type SelectComponentAction = ReturnType<typeof selectComponent>;

export type Action = SetComponentsAction | SelectComponentAction;

export const fetchComponents = () => async dispatch => {
  try {
    const result = await axios.get('/lookup/components');
    if (result && result.data) {
      dispatch(setComponents(result.data));
    }
  } catch (error) {
    console.error(error);
  }
};
