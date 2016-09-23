class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <div>

        <h1>{this.state.text}</h1>

        <Input
          label='Input field'
          value={this.state.text}
          onChange={(text) => this.setState({ text })} />

      </div>
    )
  }
}

class Input extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          value={this.props.value}
          onChange={(event) => this.props.onChange(event.target.value)} />
      </div>
    )
  }
}
