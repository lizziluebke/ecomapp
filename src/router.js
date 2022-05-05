import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Nav } from './nav';
import  Admin  from './admin';
import { Main } from './main';
import { Profile } from './profile';

export const Router = () => {
  return (
    <HashRouter>
      <Nav  />
      <Routes>
        <Route exact path='/' component={Main} />
        <Route path='/admin' component={Admin} />
        <Route path='/profile' component={Profile} />
        <Route component={Main} />
      </Routes>
    </HashRouter>
  );
};