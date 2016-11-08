import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import time from './reducers/time.js';

import Home from './components/Home.jsx';
import Hello from './containers/Hello.jsx';
import Routing from './components/Routing.jsx';
import Linked from './components/Linked.jsx';
import Params from './components/Params.jsx';

const store = createStore(time);
const Main = () => (
  (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Home} >
          <Route path="/hello" component={Hello} />
          <Route path="/routing" component={Routing} />
          <Route path="/linked" component={Linked} />
          <Route path="/params/:name/:nickName" component={Params} />
        </Route>
      </Router>
    </Provider>
  )
);

render(<Main />, document.getElementById('app'));

