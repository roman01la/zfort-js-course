import { PropTypes } from 'react';

class App extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
