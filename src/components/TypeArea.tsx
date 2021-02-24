import React from "react";
import styles from "../styles/TypeArea.module.css";
import Word from "./Word";

import { useContext } from "react";
import { WordsContext } from "../contexts/WordsContext";

function TypeArea() {
  const { words } = useContext(WordsContext);

  const wordsElements = words.map((word, index) => {
    return (
      //React.fragment == <>: true
      <React.Fragment key={index}>
        <Word key={index} word={word} />
        <span>&nbsp;</span>
      </React.Fragment>
    );
  });

  return (
    <div className={styles.typeAreaContainer}>
      <div className={styles.typeAreaWordContainer}>{wordsElements}</div>
    </div>
  );
}

export default TypeArea;
