import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Nav from './Nav';
import CollectionsSwitch from './CollectionsSwitch';
import { themeApp } from '../stylesUtils/styleConstants';

const App = () => (
  <ThemeProvider theme={themeApp}>
    <Router>
      <Fragment>
        <Nav />
        <Route component={CollectionsSwitch} />
      </Fragment>
    </Router>
  </ThemeProvider>
);

export default App;
