import React, { Component } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import packageInfo from '~/package.json';
import { selectedHash } from '~/src/app/selectors/index';

const githubCommitUrl = 'https://github.com/WebAudio/web-audio-api/commit/';

class UnviewableCommit extends Component {
  render() {
    const { hash } = this.props;
    return (
      <div style={{ padding: 40 }}>
        <Paper style={{ padding: 40 }}>
          <h1 className="title">Cannot preview this commit</h1>
          <p>
            The selected commit isn&#39;t viewable in the chosen archive format.
            You can either select a different commit, or view more info
            at Github.
          </p>
          <p>
            <Link to={`/${packageInfo.name}`}>
              <RaisedButton label="Homepage" primary={true} />
            </Link>
            &nbsp;
            <Link to={`/${githubCommitUrl}${hash}`}>
              <RaisedButton label="Github Commit Info" primary={true} />
            </Link>
          </p>
        </Paper>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    hash: selectedHash(state)
  };
})(UnviewableCommit);
