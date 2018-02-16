import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import CollectionsSwitch from './CollectionsSwitch';

const AppRouter = () => (
  <Router>
    <Fragment>
      <Nav />
      <Route component={CollectionsSwitch} />
    </Fragment>
  </Router>
);

export default AppRouter;
