import {
  ActionBugReport, NavigationMoreVert
} from 'material-ui/svg-icons';
import React, { Component } from 'react';
import {
  selectedName, selectedTimeHuman
} from '~/src/app/selectors/index';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import GithubIcon from '~/src/app/components/icons/GithubIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Immutable from 'immutable';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import { connect } from 'react-redux';
import { getRouteList } from '~/src/app/routes';
import packageInfo from '~/package.json';
import { push } from 'react-router-redux';
import { selectedIndexSelector } from '~/src/app/selectors/index';

const githubUrl = 'https://github.com/skratchdot/web-audio-api-archive/';
const issuesUrl = 'https://github.com/skratchdot/web-audio-api-archive/issues';
const leave = (url) => {
  return () => document.location.href = url;
};

class Header extends Component {
  render() {
    const {
      dispatch, commits, name, selectedIndex, timeHuman
    } = this.props;
    const { router } = this.context;
    const { isActive } = router;
    const routes = getRouteList();
    const activeRoute = routes.find((r) => isActive(r.get('path') || '', true));
    let icon;
    let title;
    if (activeRoute) {
      title = activeRoute.get('title');
      icon = React.cloneElement(activeRoute.get('icon'), {
        color: 'white',
        style: {
          height: 50
        }
      });
    }
    const linkStyle = {
      textDecoration: 'none',
      color: 'white'
    };
    return (
      <header>
        <AppBar
          titleStyle={{ lineHeight: null, fontSize: null }}
          title={
            <div>
              <div style={{ float: 'left' }}>
                <Link to={`/${packageInfo.name}`} style={linkStyle}>
                  <div style={{
                    fontSize: 15, lineHeight: '15px', marginTop: 6
                  }}>
                    Web Audio API
                  </div>
                  <div style={{ fontSize: 24, lineHeight: '25px' }}>
                    <strong>ARCHIVE</strong>
                  </div>
                </Link>
              </div>
              <div style={{ float: 'left', margin: '0px 15px' }}>
                {icon}
              </div>
              <div style={{ float: 'left' }}>
                <h1 style={{
                  lineHeight: '50px',
                  fontSize: '15px',
                  margin: 0
                }}>
                  {title}
                </h1>
              </div>
              <div style={{ float: 'right' }}>
                <Link to={`/${packageInfo.name}`} style={{
                  fontSize: 12,
                  textAlign: 'right',
                  ...linkStyle
                }}>
                  <div style={{ textDecoration: 'underline' }}>
                    commit #{selectedIndex + 1} of {commits.count()}
                  </div>
                  <div>by {name}</div>
                  <div>{timeHuman}</div>
                </Link>
              </div>
            </div>
          }
          showMenuIconButton={false}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <NavigationMoreVert />
                </IconButton>
              }
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <Subheader>Navigation</Subheader>
              {routes.filter((route) => route.get('key') !== 'notfound')
                .map((route) => <MenuItem
                  primaryText={route.get('title')}
                  leftIcon={route.get('icon')}
                  onTouchTap={() => dispatch(push(route.get('path')))}
              />)}
              <Divider />
              <Subheader>External Links</Subheader>
              <MenuItem primaryText="Source Code"
                leftIcon={<GithubIcon />}
                onTouchTap={leave(githubUrl)} />
              <MenuItem primaryText="Report Bug"
                leftIcon={<ActionBugReport />}
                onTouchTap={leave(issuesUrl)} />
            </IconMenu>
          }
        />
      </header>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
};

export default connect((state) => {
  return {
    routing: state.routing,
    commits: state.commits,
    selectedCommit: state.selectedCommmit,
    name: selectedName(state),
    selectedIndex: selectedIndexSelector(state),
    timeHuman: selectedTimeHuman(state)
  };
})(Header);
