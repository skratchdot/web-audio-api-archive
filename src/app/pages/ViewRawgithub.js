import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewRawgithub extends Component {
  render() {
    const { selectedCommit } = this.props;
    const hash = selectedCommit.get('hash');
    const url = `https://cdn.rawgit.com/WebAudio/web-audio-api/${hash}/index.html`;
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
})(ViewRawgithub);
