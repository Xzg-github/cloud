import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import Home from './Home/Home';
import ProductionEPLD from './ProductionEPLD/ProductionEPLD';
import Case from './Case/Case';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/production/epld' component={ProductionEPLD} />
    <Route path='/case' component={Case} />
    <Redirect from='*' to='/' />
  </Router>
);

export default routes;
