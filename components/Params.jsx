import React from 'react';

const Params = props => (
  (
    <div>
      <p>Your name is {props.params.name}</p>
      <p>Your nick name is {props.params.nickName}</p>
    </div>
  )
);

Params.propTypes = {
  params: React.PropTypes.shape({
    name: React.PropTypes.string,
    nickName: React.PropTypes.string
  })
};

export default Params;

