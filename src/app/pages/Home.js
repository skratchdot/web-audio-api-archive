import React, { Component } from 'react';
import CommitRange from '~/src/app/components/CommitRange';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { commits, selectedCommit } = this.props;
    return (
      <div>
        <div>
          count: {commits.count()}
          / hash: {selectedCommit.get('hash')}
          / time: {selectedCommit.get('time')}
          / index: {commits.indexOf(selectedCommit)}
        </div>
        <CommitRange />
        <Jumbotron className="text-center">
          <h1 className="title">
            web-audio-api-archive
            <br />
            <small>An archive of the Web Audio API Spec</small>
          </h1>
          <p>
            This is an example home page
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    commits: state.commits,
    selectedCommit: state.selectedCommit
  };
})(Home);
