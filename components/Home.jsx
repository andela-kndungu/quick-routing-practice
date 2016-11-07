import React from 'react';
import { Link } from 'react-router';

const Home = props => (
  (
    <div>
      <div style={{ height: '40px', background: 'red', textAlign: 'center' }}>
        <Link to="/hello">Hello</Link>
        <Link to="/linked">Linked</Link>
        <h1 style={{ color: 'aquamarine', display: 'inline' }}>
          I'll be loaded on every page
        </h1>
        <Link to="/routing">Routing</Link>
        <Link to="/params/place/holder">Params</Link>
      </div>
      { props.children }
    </div>
  )
);

Home.propTypes = {
  children: React.PropTypes.node
};

export default Home;

