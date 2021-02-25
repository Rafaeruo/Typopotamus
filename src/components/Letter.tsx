import { useEffect } from "react";

interface props {
  letter: String;
  isActive: boolean;
}

function Letter(props: props) {
  useEffect(() => {});

  return (
    <>
      {props.isActive ? (
        <span style={{ textDecoration: "underline" }}>{props.letter}</span>
      ) : (
        <span>{props.letter}</span>
      )}
    </>
  );
  // return <span style={{ color: "inherit" }}>{props.letter}</span>;
}

export default Letter;
