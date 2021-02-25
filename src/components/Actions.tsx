import { useContext } from "react";
import { WordsContext } from "../contexts/WordsContext";
import styles from "../styles/Actions.module.css";

function Actions() {
  const { generateAndSetWords, setCurrentPosition } = useContext(WordsContext);

  return (
    <div className={styles.actionsContainer}>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              generateAndSetWords();
              setCurrentPosition({ word: 0, letter: 0 });
            }}
          >
            Restart
          </button>
        </li>
        <li>
          <button type="button">Something else</button>
        </li>
      </ul>
    </div>
  );
}

export default Actions;
