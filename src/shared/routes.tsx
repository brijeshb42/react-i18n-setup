import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Test from './test';
import NotFound from './notfound';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={Test} />
      <Route component={NotFound} />
    </Switch>
  );
}
