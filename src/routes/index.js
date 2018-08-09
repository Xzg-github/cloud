import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import Home from './Home/Home';
import ProductEPLD from './ProductEPLD/ProductEPLD';
import ProductWMS from './ProductWMS/ProductWMS';
import Case from './Case/Case';
import Contact from './Contact/Contact';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/product/epld' component={ProductEPLD} />
    <Route path='/product/wms' component={ProductWMS} />
    <Route path='/case(:to)' component={Case} />
    <Route path='/contact' component={Contact} />
    <Redirect from='*' to='/' />
  </Router>
);

export default routes;
