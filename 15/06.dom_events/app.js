class App extends Component {
  constructor() {
    super();

    this.state = {
      valid: false
    }

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }
  _handleSubmit(event) {
    event.preventDefault();

    if (this.state.valid) {
      console.log('Submit!');
    } else {
      console.log('Invalid name!');
    }
  }
  _handleChange(event) {

    const value = event.target.value;

    this.setState({ valid: value.length > 2 });
  }
  render() {
    <form onSubmit={this._handleSubmit}>
      <input
        placeholder='your name'
        onChange={this._handleChange}
        style={{ background: this.state.valid ? 'white' : 'red' }} />

      <button>Submit</button>
    </form>
  }
}
