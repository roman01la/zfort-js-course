class App extends Component {
  render() {

    const title = 'React';
    const heading = <h1>{title}</h1>; // React.createElement('h1', null, title)
    const items = [ 'Item #4', 'Item #5', 'Item #6' ];

    return (
      <div>

        {/* Comments in JSX */}

        {heading}

        <h2>Hello, world!</h2>

        <div />

        <ul>
          {[
            <li key={1}>Item #1</li>,
            <li key={2}>Item #2</li>,
            <li key={3}>Item #3</li>
          ]}
        </ul>

        <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>

      </div>
    )
  }
}
