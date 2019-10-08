import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import AppstoreService from './services/appstore-service';
import { AppstoreServiceProvider } from './components/appstore-service-context';


import store from './store';

const appstoreService = new AppstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <AppstoreServiceProvider value={appstoreService}>
        <Router>
          <App />
        </Router>
      </AppstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);