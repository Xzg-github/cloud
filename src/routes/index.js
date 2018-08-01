import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import Home from './Home/Home';
import ProductEPLD from './ProductEPLD/ProductEPLD';
import ProductWMS from './ProductWMS/ProductWMS';
import Case from './Case/Case';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/product/epld' component={ProductEPLD} />
    <Route path='/product/wms' component={ProductWMS} />
    <Route path='/case(:to)' component={Case} />
    <Redirect from='*' to='/' />
  </Router>
);

export default routes;
