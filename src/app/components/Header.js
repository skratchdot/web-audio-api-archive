import {
  ActionBugReport, ActionHome, ActionInfo, ImageRemoveRedEye, NavigationMoreVert
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
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import RawgitIcon from '~/src/app/components/icons/RawgitIcon';
import WaybackIcon from '~/src/app/components/icons/WaybackIcon';
import { connect } from 'react-redux';
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
    const { dispatch, commits, name, selectedIndex, timeHuman } = this.props;
    const goto = (path) => {
      return () => dispatch(push(`/${packageInfo.name}${path}`));
    };
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
              <MenuItem primaryText="Homepage"
                leftIcon={<ActionHome />}
                onTouchTap={goto('/')} />
              <MenuItem primaryText="About"
                leftIcon={<ActionInfo />}
                onTouchTap={goto('/about')} />
              <MenuItem primaryText="View: Snapshot"
                leftIcon={<ImageRemoveRedEye />}
                onTouchTap={goto('/view')} />
              <MenuItem primaryText="View: Rawgit.com"
                leftIcon={<RawgitIcon />}
                onTouchTap={goto('/view/rawgit')} />
              <MenuItem primaryText="View: Wayback Machine"
                leftIcon={<WaybackIcon />}
                onTouchTap={goto('/view/wayback')} />
              <Divider />
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
    commits: state.commits,
    selectedCommit: state.selectedCommmit,
    name: selectedName(state),
    selectedIndex: selectedIndexSelector(state),
    timeHuman: selectedTimeHuman(state)
  };
})(Header);
