import React, { Component } from 'react';
import { red500, red700 } from 'material-ui/styles/colors';
import DevTools from '~/src/app/containers/DevTools';
import Footer from '~/src/app/components/Footer';
import Header from '~/src/app/components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { VBox } from 'react-layout-components';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { setHeight } from '~/src/app/helpers/index';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
    primary2Color: red700,
    pickerHeaderColor: red500
  },
  appBar: {
    height: 50
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <VBox fit>
          <VBox flexGrow={0} style={setHeight(50)}>
            <Header />
          </VBox>
          <VBox fit flexGrow={1} style={{
            width: '100%',
            height: '100%',
            overflow: 'auto'
          }}>
            {this.props.children}
          </VBox>
          <VBox flexGrow={0} style={setHeight(30)}>
            <Footer />
          </VBox>
          <DevTools />
        </VBox>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);
