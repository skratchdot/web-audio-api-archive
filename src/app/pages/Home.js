import { Box, VBox } from 'react-layout-components';
import React, { Component } from 'react';
import CommitBrowser from '~/src/app/components/CommitBrowser';
import CommitList from '~/src/app/components/CommitList';
import CommitPanel from '~/src/app/components/CommitPanel';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <Box fit>
        <VBox fit>
          <Paper style={{ margin: 40, padding: 40 }}>
            <CommitBrowser />
          </Paper>
          <Paper style={{ margin: 40, padding: 40 }}>
            <CommitPanel />
          </Paper>
        </VBox>
        <VBox fit>
          <Paper style={{ margin: 40, padding: 40 }}>
            <CommitList />
          </Paper>
        </VBox>
      </Box>
    );
  }
}

export default connect()(Home);
