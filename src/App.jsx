// @flow

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import { store } from './reducers';
import { appMounted } from './actions/app';
import AppBar from './views/AppBar';

export default class App extends PureComponent<{}> {
  componentDidMount() {
    store.dispatch(appMounted());
  }

  render() {
    return (
      <Provider store={store}>
        <AppBar />
      </Provider>
    );
  }
}
