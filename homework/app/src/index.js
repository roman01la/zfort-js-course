import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Input from './components/input';

class App extends Component {
  static defaultProps = {
    title: 'Default'
  }
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  constructor() {
    super();

    this.state = {
      message: '',
      isValid: false,
      value: 0
    }

    this._handleChange = this._handleChange.bind(this);
  }
  _handleChange(value) {
    this.setState({
      message: value,
      isValid: value.length > 3
    })
  }
  render() {

    const { message } = this.state;
    const { title } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <p>{`Message: ${message}`}</p>
        <button onClick={() => this.setState({ value: this.state.value + 1})}>
          {`Increment ${this.state.value}`}
        </button>
        <Input
          type='password'
          label='Your message:'
          value={message}
          onChange={this._handleChange} />
      </div>
    )
  }
}

const renderRoot = (title) => render(<App title={title} />, document.getElementById('app'));

renderRoot('Hello!');
