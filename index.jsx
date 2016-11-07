import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Home from './components/Home.jsx';
import Hello from './components/Hello.jsx';
import Routing from './components/Routing.jsx';
import Linked from './components/Linked.jsx';
import Params from './components/Params.jsx';

const Main = () => (
  (
    <Router history={hashHistory}>
      <Route path="/" component={Home} >
        <Route path="/hello" component={Hello} />
        <Route path="/routing" component={Routing} />
        <Route path="/linked" component={Linked} />
        <Route path="/params/:name/:nickName" component={Params} />
      </Route>
    </Router>
  )
);

render(<Main />, document.getElementById('app'));

