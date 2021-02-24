import Letter from "./Letter";

interface props {
  word: String;
}

function Word(props: props) {
  return (
    <span>
      {props.word.split("").map((letter, index) => {
        return <Letter key={index} letter={letter} />;
      })}
    </span>
  );
}

export default Word;
