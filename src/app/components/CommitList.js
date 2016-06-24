import { AutoSizer, VirtualScroll } from 'react-virtualized';
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import { commitsReversedSelector } from '~/src/app/selectors';
import { connect } from 'react-redux';
import moment from 'moment';
import { setSelectedCommit } from '~/src/app/actions/selectedCommit';

class CommitList extends Component {
  render() {
    const { dispatch, commitsReversed, selectedCommit } = this.props;
    const count = commitsReversed.count();
    return (
      <AutoSizer>
        {({ height, width }) => (
          <VirtualScroll
            width={width}
            height={height}
            rowCount={count}
            rowHeight={72}
            rowRenderer={({ index }) => {
              const commit = commitsReversed.get(index);
              const listStyle = {};
              if (commit === selectedCommit) {
                listStyle.backgroundColor = 'rgba(0, 0, 0, 0.2)';
              }
              const md5 = commit.get('md5');
              const time = commit.get('time') || 0;
              const timeMs = time * 1000;
              const fromNow = moment(timeMs).fromNow();
              const gravatarUrl = `https://www.gravatar.com/avatar/${md5}`;
              if (!commit) {
                return null;
              }
              return (
                <ListItem
                  style={listStyle}
                  leftAvatar={<Avatar src={gravatarUrl} />}
                  primaryText={
                    <div className="truncate">
                      <strong>#{count - index}:</strong>
                      &nbsp;
                      {commit.get('subject')}
                    </div>
                  }
                  secondaryText={
                    <div className="truncate">
                      <strong>{commit.get('name')}</strong>
                      &nbsp;committed&nbsp;
                      <strong>{fromNow}</strong>
                    </div>
                  }
                  onTouchTap={() => {
                    dispatch(setSelectedCommit(commit));
                  }}
                />
              );
            }}
          />
        )}
      </AutoSizer>
    );
  }
}

export default connect((state) => {
  return {
    commitsReversed: commitsReversedSelector(state),
    selectedCommit: state.selectedCommit
  };
})(CommitList);
