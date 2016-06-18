import React, { Component } from 'react';
import DevTools from '~/src/app/containers/DevTools';
import Footer from '~/src/app/components/Footer';
import GithubCorner from 'react-github-corner';
import { Grid } from 'react-bootstrap';
import Header from '~/src/app/components/Header';
import pathGet from 'object-path-get';
import stringToCssName from '~/src/app/helpers/stringToCssName';

class App extends Component {
  render() {
    const path = pathGet(this, 'this.children.props.route.path', '');
    const pageParams = pathGet(this, 'props.params', {});
    const githubUrl = 'https://github.com/skratchdot/web-audio-api-archive';
    return (
      <div className={`page-${stringToCssName(path)}`}>
        <Grid>
          <Header pageParams={pageParams} />
          {this.props.children}
          <Footer />
          <GithubCorner href={githubUrl} />
        </Grid>
        <DevTools />
      </div>
    );
  }
}

export default App;
