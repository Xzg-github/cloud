import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import Home from './Home/Home';
import ProductionEPLD from './ProductionEPLD/ProductionEPLD';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/production/epld' component={ProductionEPLD} />
    <Redirect from='*' to='/' />
  </Router>
);

export default routes;
