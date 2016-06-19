import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import marked from 'marked';
import readmeContents from '~/README.md';
const readmeHtml = marked(readmeContents);

class About extends Component {
  render() {
    return (
      <div style={{ padding: 40 }}>
        <Paper style={{ padding: 40 }}>
          <div dangerouslySetInnerHTML={{ __html: readmeHtml }}>
          </div>
        </Paper>
      </div>
    );
  }
}

export default connect()(About);
