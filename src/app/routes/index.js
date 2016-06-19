import About from '~/src/app/pages/About';
import App from '~/src/app/containers/App';
import Home from '~/src/app/pages/Home';
import NotFound from '~/src/app/pages/NotFound';
import React from 'react';
import { Route } from 'react-router';
import View from '~/src/app/pages/View';
import ViewRawgithub from '~/src/app/pages/ViewRawgithub';
import ViewWayback from '~/src/app/pages/ViewWayback';
import packageInfo from '~/package.json';

const routes = (
  <Route component={App}>
    <Route path={`/${packageInfo.name}`} component={Home} />
    <Route path={`/${packageInfo.name}/home`} component={Home} />
    <Route path={`/${packageInfo.name}/about`} component={About} />
    <Route path={`/${packageInfo.name}/view`} component={View} />
    <Route path={`/${packageInfo.name}/view/rawgit`}
      component={ViewRawgithub} />
    <Route path={`/${packageInfo.name}/view/wayback`}
      component={ViewWayback} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
