import About from '../pages/About';
import App from '../containers/App';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import React from 'react';
import { Route } from 'react-router';
const packageInfo = require('../../../package.json');

const routes = (
  <Route component={App}>
    <Route path={`/${packageInfo.name}`} component={Home} />
    <Route path={`/${packageInfo.name}/home`} component={Home} />
    <Route path={`/${packageInfo.name}/about`} component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
