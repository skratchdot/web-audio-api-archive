import { Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedIndexSelector } from '../selectors/index';
import { setSelectedCommit } from '../actions/selectedCommit';

class CommitRange extends Component {
  render() {
    const { dispatch, commits, selectedIndex } = this.props;
    return (
      <Row>
        <Col md={12}>
          <input
            type="range"
            min="0"
            max={commits.count() - 1}
            step="1"
            value={selectedIndex}
            style={{ width: '100%' }}
            onInput={(e) => {
              const index = parseInt(e.target.value, 10);
              const commit = commits.get(index);
              dispatch(setSelectedCommit(commit));
            }}
          />
        </Col>
      </Row>
    );
  }
}

export default connect((state) => {
  return {
    commits: state.commits,
    selectedIndex: selectedIndexSelector(state)
  };
})(CommitRange);
