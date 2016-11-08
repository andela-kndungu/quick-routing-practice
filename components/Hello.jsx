import React from 'react';
import Button from '../containers/Button.jsx';

const Hello = (props) => {
  return <div><Button /><h1>{props.time}</h1></div>;
};

Hello.propTypes = {
  time: React.PropTypes.string
};

export default Hello;

