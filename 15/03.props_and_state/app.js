class App extends Component {
  static defaultProps = {
    title: 'default title'
  }
  constructor() {
    super();

    this.state = {
      message: 'Hello, world!'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}

render(<App title='React' />, document.getElementById('app'));
