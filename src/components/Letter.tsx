interface props {
  letter: String;
}

function Letter(props: props) {
  return <span>{props.letter}</span>;
}

export default Letter;
