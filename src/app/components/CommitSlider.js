import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import { connect } from 'react-redux';
import { selectedIndexSelector } from '~/src/app/selectors/index';
import { setSelectedCommit } from '~/src/app/actions/selectedCommit';

class CommitSlider extends Component {
  render() {
    const { dispatch, commits, selectedIndex } = this.props;
    return (
      <Slider
        type="range"
        min={0}
        max={commits.count() - 1}
        step={1}
        value={selectedIndex}
        style={{ width: '100%' }}
        onChange={(e, value) => {
          const commit = commits.get(value);
          dispatch(setSelectedCommit(commit));
        }}
      />
    );
  }
}

export default connect((state) => {
  return {
    commits: state.commits,
    selectedIndex: selectedIndexSelector(state)
  };
})(CommitSlider);
