class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello, world!'
    }
  }
  render() {

    return (
      <div>
        <h1>{this.state.message}</h1>
        <ChildComponent
          label={this.props.label}
          onUpdate={(message) => this.setState({ message })} />
      </div>
    );
  }
}

class ChildComponent extends Component {
  render() {

    console.log('Render!');

    return <button onClick={this.props.onUpdate}>{this.props.label}</button>;
  }
}
