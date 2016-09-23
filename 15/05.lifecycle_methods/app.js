class App extends Component {
    componentWillMount() {
      console.log('I\'m going into DOM');
    }
    componentDidMount() {
      console.log('I\'m in DOM');
    }
    componentWillUnmount() {
      console.log('I\'m going out of DOM');
    }
    componentWillReceiveProps(nextProps) {
      console.log('I\'m going to receive props', nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I re-render?');
      return true;
    }
    componentWillUpdate(nextProps, nextState) {
      console.log('I\'m going to re-render');
    }
    componentDidUpdate(prevProps, prevState) {
      console.log('I\'ve just re-rendered');
    }
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
        </div>
      );
    }
}
