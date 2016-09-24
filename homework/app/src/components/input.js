import React, { Component, PropTypes } from 'react';

class Input extends Component {
  render() {
    console.log('RENDER!');
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          value={this.props.value}
          onChange={(event) => this.props.onChange(event.target.value)} />
      </div>
    )
  }
}

export default Input;
