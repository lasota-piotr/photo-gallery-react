import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Collections from './Collections';
import Home from './Home';
import NotFound from './NotFound';
import Collection from './Collection';
import Photo from './Photo';

const AppRouter = () => (
  <Router>
    <div className="o-container">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/collections" component={Collections} />
        <Route exact path="/collections/:id/:name" component={Collection} />
        <Route exact path="/photos/:id" component={Photo} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
