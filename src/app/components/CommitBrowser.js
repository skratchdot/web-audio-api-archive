import {
  ImageNavigateBefore, ImageNavigateNext,
  NavigationFirstPage, NavigationLastPage
} from 'material-ui/svg-icons';
import React, { Component } from 'react';
import { Box } from 'react-layout-components';
import CommitSlider from '~/src/app/components/CommitSlider';
import RaisedButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { selectedIndexSelector } from '~/src/app/selectors/index';
import { setSelectedCommit } from '~/src/app/actions/selectedCommit';

class CommitBrowser extends Component {
  selectIndex(value) {
    const { dispatch, commits } = this.props;
    const commit = commits.get(value);
    dispatch(setSelectedCommit(commit));
  }
  render() {
    const { commits, selectedIndex } = this.props;
    const buttonStyle = { width: '100%' };
    const count = commits.count();
    const min = 0;
    const max = Math.max(min, count - 1);
    const prev = Math.max(min, selectedIndex - 1);
    const next = Math.min(max, selectedIndex + 1);
    const isFirst = selectedIndex === min;
    const isLast = selectedIndex === max;
    return (
      <div>
        <strong>
          Commit Browser
          &nbsp;
          <small>
            (viewing #{selectedIndex + 1} of {count})
          </small>
        </strong>
        <CommitSlider />
        <Box justifyContent="space-between">
          <RaisedButton label="Oldest" labelPosition="after" primary={true}
            disabled={isFirst}
            onTouchTap={this.selectIndex.bind(this, min)}
            icon={<NavigationFirstPage />} style={buttonStyle} />
          <RaisedButton label="Previous" labelPosition="after" primary={true}
            disabled={isFirst}
            onTouchTap={this.selectIndex.bind(this, prev)}
            icon={<ImageNavigateBefore />} style={buttonStyle} />
          <RaisedButton label="Next" labelPosition="before" primary={true}
            disabled={isLast}
            onTouchTap={this.selectIndex.bind(this, next)}
            icon={<ImageNavigateNext />} style={buttonStyle} />
          <RaisedButton label="Newest" labelPosition="before" primary={true}
            disabled={isLast}
            onTouchTap={this.selectIndex.bind(this, max)}
            icon={<NavigationLastPage />} style={buttonStyle} />
        </Box>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    commits: state.commits,
    selectedIndex: selectedIndexSelector(state)
  };
})(CommitBrowser);
