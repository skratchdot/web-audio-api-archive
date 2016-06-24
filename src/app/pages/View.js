import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

class View extends Component {
  render() {
    return (
      <div style={{ padding: 40 }}>
        <Paper style={{ padding: 40 }}>
          <h1>Coming Soon</h1>
          <p>
            The goal of this page is to create a snapshot of the spec
            as it was on the commit date.
          </p>
          <p>
            There are a few issues with both Rawgit.com and the
            Wayback Machine.  This snapshot page will try to fix
            those issues
          </p>
          <section>
            <h2>Rawgit.com Issues</h2>
              <ul>
                <li>
                  External Links for script and style tags point to the
                  &nbsp;<strong>current</strong> version of the script/style,
                  not the version of the file that existed on the commit date.
                </li>
                <li>
                  The Spec date might use <code>new Date()</code> in javscript
                  rather than the date of the commit, so it shows up as "today".
                </li>
              </ul>
          </section>
          <section>
            <h2>Wayback Machine Issues</h2>
            <ul>
              <li>
                Not all commits are archived.
              </li>
              <li>
                The Spec date might use <code>new Date()</code> in javscript
                rather than the date of the commit, so it shows up as "today".
              </li>
            </ul>
          </section>
        </Paper>
      </div>
    );
  }
}

export default connect()(View);
