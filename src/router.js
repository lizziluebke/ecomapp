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
        <Route exact path='/' element={<Main/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route component={Main} />
      </Routes>
    </HashRouter>
  );
};