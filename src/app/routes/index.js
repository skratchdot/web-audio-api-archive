import {
  ActionHome, ActionInfo, ImageRemoveRedEye
} from 'material-ui/svg-icons';
import About from '~/src/app/pages/About';
import App from '~/src/app/containers/App';
import Home from '~/src/app/pages/Home';
import Immutable from 'immutable';
import NotFound from '~/src/app/pages/NotFound';
import RawgitIcon from '~/src/app/components/icons/RawgitIcon';
import React from 'react';
import { Route } from 'react-router';
import View from '~/src/app/pages/View';
import ViewRawgithub from '~/src/app/pages/ViewRawgithub';
import ViewWayback from '~/src/app/pages/ViewWayback';
import WaybackIcon from '~/src/app/components/icons/WaybackIcon';
import packageInfo from '~/package.json';

const icons = {
  home: <ActionHome />,
  about: <ActionInfo />,
  view: <ImageRemoveRedEye />,
  rawgit: <RawgitIcon />,
  wayback: <WaybackIcon />
};
let routes = Immutable.fromJS([
  {
    key: 'home',
    path: `/${packageInfo.name}`,
    component: Home,
    title: 'Homepage'
  },
  {
    key: 'about',
    path: `/${packageInfo.name}/about`,
    component: About,
    title: 'About'
  },
  {
    key: 'view',
    path: `/${packageInfo.name}/view`,
    component: View,
    title: 'View: Snapshot'
  },
  {
    key: 'rawgit',
    path: `/${packageInfo.name}/view/rawgit`,
    component: ViewRawgithub,
    title: 'View: Rawgit.com'
  },
  {
    key: 'wayback',
    path: `/${packageInfo.name}/view/wayback`,
    component: ViewWayback,
    title: 'View: Wayback Machine'
  },
  {
    key: 'notfound',
    path: '*',
    component: NotFound,
    title: '404 - Not Found'
  }
]);
routes = routes.map((route) => {
  const key = route.get('key');
  return route.set('icon', icons[key]);
});

export function getRouteList() {
  return routes.toList();
}

export function getRoutes() {
  return (
    <Route component={App}>
      {routes.map((route) => <Route
        path={route.get('path')}
        component={route.get('component')}
      />)}
    </Route>
  );
}

export default getRoutes();
