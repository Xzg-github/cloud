import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import Home from './Home/Home';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Redirect from='*' to='/' />
  </Router>
);

export default routes;
