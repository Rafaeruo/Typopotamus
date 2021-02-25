import React, { useEffect, useRef } from "react";
import styles from "../styles/TypeArea.module.css";
import Word from "./Word";

import { useContext } from "react";
import { WordsContext } from "../contexts/WordsContext";

function TypeArea() {
  const { words, currentPosition, setCurrentPosition } = useContext(
    WordsContext
  );

  const wordsElements = words.map((word, index) => {
    return <Word key={index} word={word} />;
  });

  //handle keyboard input when word container is focuesed
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === words[currentPosition.word][currentPosition.letter]) {
      console.log(e.key);
      if (currentPosition.letter === words[currentPosition.word].length - 1) {
        setCurrentPosition({ letter: 0, word: currentPosition.word + 1 });
      } else {
        setCurrentPosition({
          ...currentPosition,
          letter: currentPosition.letter + 1,
        });
      }
    }
  }

  //automotically focus word container to get keyboard input without clicking on it
  const typeAreaWordContainer = useRef(null);
  useEffect(() => {
    //just used as any to supress warning
    (typeAreaWordContainer as any).current.focus();
  }, [typeAreaWordContainer]);

  return (
    <div className={styles.typeAreaContainer}>
      <div
        className={styles.typeAreaWordContainer}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        ref={typeAreaWordContainer}
      >
        {wordsElements}
      </div>
    </div>
  );
}

export default TypeArea;
