import { useState } from "react";
import styles from "../styles/TypeArea.module.css";
import Word from "./Word";
import randomWords from "random-words";

function TypeArea() {
  const [words, setWords] = useState(generateWords);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [mistakeCount, setMistakeCount] = useState(0);

  return (
    <div className={styles.typeAreaContainer}>
      <div
        className={styles.typeAreaWordContainer}
        onClick={() => {
          setWords(generateWords);
        }}
      >
        {words.map((word) => {
          return (
            <>
              <Word word={word} />
              <span>&nbsp;</span>
            </>
          );
        })}
      </div>
    </div>
  );

  function generateWords() {
    return randomWords(100) as String[];
  }
}

export default TypeArea;
