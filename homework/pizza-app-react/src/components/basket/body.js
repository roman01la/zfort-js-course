import React, { Component } from 'react';

class Body extends Component {
  render() {
    return (
      <tbody className='orders'>
        {this.props.rows.map(this.props.renderRow)}
      </tbody>
    )
  }
}

export default Body;
