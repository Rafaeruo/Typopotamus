import Letter from "./Letter";

interface props {
  word: String;
  position: number;
}

function Word(props: props) {
  return (
    <span>
      {props.word.split("").map((letter, index) => {
        return (
          <Letter
            key={index}
            letter={letter}
            position={{ word: props.position, letter: index }}
          />
        );
      })}
    </span>
  );
}

export default Word;
