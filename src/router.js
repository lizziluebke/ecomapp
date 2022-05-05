import React from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';

//import Nav from './nav';
import Admin from './admin';
import Main from './main';
import Profile from './profile';

function Router() {
  
  return (
    <HashRouter>
      <Routes>
      <Route>
        <Route exact path='/' component={Main} />
        <Route path='/admin' component={Admin} />
        <Route path='/profile' component={Profile} />
        <Route component={Main} />
      </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router; 