import React from 'react';

class Button extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.changeTime(new Date().toString());
  }

  render() {
    return <button onClick={this.handleClick}>abc</button>;
  }
}

export default Button;

