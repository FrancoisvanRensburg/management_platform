import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './Redux/store';

// Import Routes
import Routes from './App/Routes';

import './App.css';
import { WhippApp } from './Styles';
import BaseStyles from './App/BaseStyles';
import NormalizeStyles from './App/NormalizeStyles';
import './App/fontStyles.css';

import setAuthToken from './shared/utils/setAuthToken';
import { loadUser } from './Redux/actions/authActions';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <BaseStyles />
      <NormalizeStyles />
      <Router>
        <WhippApp>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </WhippApp>
      </Router>
    </Provider>
  );
};

export default App;
