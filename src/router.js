import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Nav from './nav';
import Admin from './admin';
import Main from './main';
import Profile from './profile';

export default function Router() {
  
  return (
    <HashRouter>
      <Nav current={current} />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/admin' component={Admin} />
        <Route path='/profile' component={Profile} />
        <Route component={Main} />
      </Switch>
    </HashRouter>
  );
};