import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" />
      </Provider>
    );
  }
}

export default App;
