import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Box } from 'react-layout-components';
import GithubIcon from '~/src/app/components/icons/GithubIcon';
import { connect } from 'react-redux';

const githubUrl = 'https://github.com/skratchdot/web-audio-api-archive/';

class Footer extends Component {
  render() {
    return (
      <footer>
        <AppBar
          titleStyle={{ height: 30, lineHeight: '30px', fontSize: null }}
          title={
            <Box fit justifyContent="space-between">
              <Box>
                <span>&copy; Copyright 2016 &nbsp;</span>
                <a href="http://skratchdot.com/" style={{ color: 'white' }}>
                  skratchdot
                </a>
              </Box>
              <Box>
                <a href={githubUrl} style={{ color: 'white' }}>
                  View on Github
                </a>
                <a href={githubUrl}>
                  <GithubIcon color="white" style={{
                    marginTop: 3,
                    marginLeft: 10
                  }} />
                </a>
              </Box>
            </Box>
          }
          showMenuIconButton={false}
        />
      </footer>
    );
  }
}

export default connect()(Footer);
