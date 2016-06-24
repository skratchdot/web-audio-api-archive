import React, { Component } from 'react';
import UnviewableCommit from '~/src/app/components/UnviewableCommit';
import { connect } from 'react-redux';
import moment from 'moment';

class ViewWayback extends Component {
  render() {
    const { selectedCommit } = this.props;
    const index = selectedCommit.get('index');
    if (!index) {
      return (
        <UnviewableCommit />
      );
    }
    const time = selectedCommit.get('time');
    const ms = time * 1000;
    const base = 'http://web.archive.org/web';
    const timeFormat = moment(ms).format('YYYYMMDDHHmmss');
    let website = 'http://webaudio.github.io/web-audio-api';
    if (index !== 'index.html') {
      website = 'https://www.w3.org/TR/webaudio';
    }
    const url = `${base}/${timeFormat}/${website}/`;
    return (
      <iframe
        src={url}
        style={{
          width: '100%',
          height: '100%',
          border: 0,
          margin: 0,
          padding: 0
        }}
      />
    );
  }
}

export default connect((state) => {
  return {
    selectedCommit: state.selectedCommit
  };
})(ViewWayback);
