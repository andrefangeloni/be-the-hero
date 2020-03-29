import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
