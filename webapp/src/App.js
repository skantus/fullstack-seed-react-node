import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavigator from 'components/AppNavigator';
import { configureStore } from './store/store';

import GlobalStyle from './global-styles';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <AppNavigator />
    </Router>
    <GlobalStyle />
  </Provider>
);

export default App;
