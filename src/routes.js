import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './routes/Home';
import VideoDetails from './routes/VideoDetails';

const Routes = () => (
  <Router>
    <div>
      <Route component={ Home } exact path='/' />
      <Route component={ VideoDetails } path='/:id' />
    </div>
  </Router>
);

export default Routes;
