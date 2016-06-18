import About from '~/src/app/pages/About';
import App from '~/src/app/containers/App';
import Home from '~/src/app/pages/Home';
import NotFound from '~/src/app/pages/NotFound';
import React from 'react';
import { Route } from 'react-router';
import packageInfo from '~/package.json';

const routes = (
  <Route component={App}>
    <Route path={`/${packageInfo.name}`} component={Home} />
    <Route path={`/${packageInfo.name}/home`} component={Home} />
    <Route path={`/${packageInfo.name}/about`} component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
