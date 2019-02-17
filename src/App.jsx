// @flow

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import { store } from './reducers';
import { appMounted } from './actions/app';
import AppBar from './views/AppBar';
import Observation from './containers/Observation';

export default class App extends PureComponent<{}> {
  componentDidMount() {
    store.dispatch(appMounted());
  }

  render() {
    return (
      <Provider store={store}>
        <AppBar />
        <Content>
          <Observation />
        </Content>
      </Provider>
    );
  }
}

const Content = styled.div`
  margin: 20px;
`;
