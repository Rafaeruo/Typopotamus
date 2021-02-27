import Letter from "./Letter";

interface props {
  word: String;
  currentLetter: number | null;
}

function Word(props: props) {
  return (
    <span>
      {props.word.split("").map((letter, index) => {
        return (
          <Letter
            key={index}
            letter={letter}
            isCurrent={props.currentLetter === index ? true : false}
          />
        );
      })}
    </span>
  );
}

export default Word;
