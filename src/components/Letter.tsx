import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { WordsContext } from "../contexts/WordsContext";
import styles from "../styles/Letter.module.css";

interface props {
  letter: String;
  position: {
    letter: number;
    word: number;
  };
}

function Letter(props: props) {
  const [activeClass, setActiveClass] = useState(styles.letterUnreached);
  const [isActive, setIsActive] = useState(false);

  const { currentPosition, wasLastMistake } = useContext(WordsContext);

  const [isFirstRender, setIsFirstRender] = useState(true);

  // //side effect to changing currentPosition
  // useLayoutEffect(() => {
  //   if (
  //     currentPosition.word === props.position.word &&
  //     currentPosition.letter === props.position.letter
  //   ) {
  //     setActiveClass(styles.letterCurrent);
  //   } else if (
  //     currentPosition.word > props.position.word ||
  //     (currentPosition.word === props.position.word &&
  //       currentPosition.letter > props.position.letter)
  //   ) {
  //     setActiveClass(styles.letterReached);
  //   } else {
  //     setActiveClass(styles.letterUnreached);
  //   }
  // }, [currentPosition, props.position]); //only added props.position to remove warning

  useLayoutEffect(() => {
    if (
      !isActive &&
      currentPosition.word === props.position.word &&
      currentPosition.letter === props.position.letter
    ) {
      setIsActive(true);
    } else if (isActive) {
      setIsActive(false);
    }
  }, [currentPosition]);

  useLayoutEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    // console.log(`1: ${isActive}`);
    if (isActive) {
      setActiveClass(styles.letterCurrent);
    } else {
      if (wasLastMistake) {
        setActiveClass(styles.letterMisspelled);
      } else {
        setActiveClass(styles.letterReached);
      }
    }
  }, [isActive]);

  return (
    <span className={activeClass}>{props.letter}</span>
    // <>
    //   {props.isCurrent ? (
    //     <span className={styles.letterCurrent}>{props.letter}</span>
    //   ) : (
    //     <span className={styles.letterUnreached}>{props.letter}</span>
    //   )}
    // </>
  );
}

export default Letter;
