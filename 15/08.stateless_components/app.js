const Input = (props) => {
  return <input value={props.value} onChange={props.onChange} />;
}

const Button = (props) => {
  return <button type={props.type} onClick={props.onClick}>{props.label}</button>;
}
