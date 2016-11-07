import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Hello from './components/Hello.jsx';
import Routing from './components/Routing.jsx';

const Main = () => (
  (
    <Router history={hashHistory}>
      <Route path="/" component={Hello} />
      <Route path="/routing" component={Routing} />
    </Router>
  )
);

render(<Main />, document.getElementById('app'));

