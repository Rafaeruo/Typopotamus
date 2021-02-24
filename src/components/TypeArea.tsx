import { useState } from "react";
import styles from "../styles/TypeArea.module.css";

const randomWords = require("random-words");

function TypeArea() {
  const [words, setWords] = useState(generateWords);

  return (
    <div className={styles.typeAreaContainer}>
      <div className={styles.typeAreaWordContainer}>
        <span>{words.join(" ").split("")}</span>
      </div>
    </div>
  );

  function generateWords(): String[] {
    return randomWords(100);
  }
}

export default TypeArea;
