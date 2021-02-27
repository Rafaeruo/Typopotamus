import { useContext, useEffect, useState } from "react";
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

  const { currentPosition } = useContext(WordsContext);

  //side effect to changing currentPosition
  useEffect(() => {
    if (
      currentPosition.word === props.position.word &&
      currentPosition.letter === props.position.letter
    ) {
      setActiveClass(styles.letterCurrent);
    } else if (
      currentPosition.word > props.position.word ||
      (currentPosition.word === props.position.word &&
        currentPosition.letter > props.position.letter)
    ) {
      setActiveClass(styles.letterReached);
    } else {
      setActiveClass(styles.letterUnreached);
    }
  }, [currentPosition, props.position]); //only added props.position to remove warning

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
