import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './routes/Home';

const Routes = () => (
  <Router>
    <div>
      <Route component={ Home } exact path='/' />
    </div>
  </Router>
);

export default Routes;
