import { useEffect, useContext } from "react";
import { WordsContext } from "../contexts/WordsContext";

interface props {
  letter: String;
}

function Letter(props: props) {
  const { currentPosition } = useContext(WordsContext);
  useEffect(() => {});

  return <span style={{ color: "inherit" }}>{props.letter}</span>;
}

export default Letter;
