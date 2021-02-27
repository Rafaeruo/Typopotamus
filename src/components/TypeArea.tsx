import React, { useEffect, useRef } from "react";
import styles from "../styles/TypeArea.module.css";
import Word from "./Word";

import { useContext } from "react";
import { WordsContext } from "../contexts/WordsContext";

function TypeArea() {
  const {
    words,
    currentPosition,
    setCurrentPosition,
    setWasLastMistake,
  } = useContext(WordsContext);

  const wordsElements = words.map((word, index) => {
    return <Word key={index} word={word} position={index} />;
  });

  //handle keyboard input when word container is focuesed
  function handleKeyDown(e: React.KeyboardEvent) {
    const isLastLetter =
      currentPosition.letter === words[currentPosition.word].length - 1
        ? true
        : false;
    const isFirstLetter = currentPosition.letter === 0 ? true : false;

    if (e.key !== "Backspace") {
      //if not backspace
      //check wether input is correct
      if (e.key === words[currentPosition.word][currentPosition.letter]) {
        setWasLastMistake(false);
      } else {
        setWasLastMistake(true);
      }
      //move caret forward
      if (isLastLetter) {
        if (currentPosition.word !== words.length - 1) {
          setCurrentPosition({
            word: currentPosition.word + 1,
            letter: 0,
          });
        }
      } else {
        setCurrentPosition({
          ...currentPosition,
          letter: currentPosition.letter + 1,
        });
      }
    } else {
      //if backspace
      //move caret back
      if (isFirstLetter) {
        if (currentPosition.word !== 0) {
          setCurrentPosition({
            word: currentPosition.word - 1,
            letter: words[currentPosition.word - 1].length - 1,
          });
        }
      } else {
        setCurrentPosition({
          ...currentPosition,
          letter: currentPosition.letter - 1,
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
