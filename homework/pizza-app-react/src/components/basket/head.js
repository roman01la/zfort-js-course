import React, { Component } from 'react';

class Head extends Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((title) => <td key={title}>{title}</td>)}
        </tr>
      </thead>
    )
  }
}

export default Head;
