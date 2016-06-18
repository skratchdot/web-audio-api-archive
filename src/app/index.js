import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from './store/configureStore';
import { render } from 'react-dom';
import routes from './routes';
import { setSelectedCommit } from './actions/selectedCommit';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const { commits } = store.getState();
store.dispatch(setSelectedCommit(commits.last()));

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);