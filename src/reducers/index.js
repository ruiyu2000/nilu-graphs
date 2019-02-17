// @flow

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import aqis from './aqis';
import areas from './areas';
import components from './components';
import stations from './stations';

const rootReducer = combineReducers({
  aqis,
  areas,
  components,
  stations
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);
