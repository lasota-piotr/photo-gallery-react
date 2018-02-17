import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import CollectionsSwitch from './CollectionsSwitch';
import { themeApp } from '../stylesUtils/styleConstants';

const App = () => (
  <ThemeProvider theme={themeApp}>
    <Router>
      <Fragment>
        <Header />
        <Route component={CollectionsSwitch} />
      </Fragment>
    </Router>
  </ThemeProvider>
);

export default App;
