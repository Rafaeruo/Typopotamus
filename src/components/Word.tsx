import Letter from "./Letter";

interface props {
  word: String;
  activeLetter: number | null;
}

function Word(props: props) {
  return (
    <span>
      {props.word.split("").map((letter, index) => {
        return (
          <Letter
            key={index}
            letter={letter}
            isActive={props.activeLetter === index ? true : false}
          />
        );
      })}
    </span>
  );
}

export default Word;
