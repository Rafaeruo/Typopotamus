import { createContext, ReactNode, useState } from "react";
import randomWords from "random-words";

interface contextData {
  words: String[];
  generateAndSetWords: () => void;
  currentPosition: {
    letter: number;
    word: number;
  };
}

interface props {
  children: ReactNode;
}

export const WordsContext = createContext({} as contextData);

export function WordsContextProvider(props: props) {
  const [words, setWords]: [String[], (words: String[]) => void] = useState(
    randomWords(100) as String[]
  );
  const [mistakeCount, setMistakeCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [currentPosition, setCurrentPosition] = useState({
    word: 0,
    letter: 0,
  });

  function generateAndSetWords() {
    const w = randomWords(100) as String[];
    setWords(w);
  }

  return (
    <WordsContext.Provider
      value={{ words, generateAndSetWords, currentPosition }}
    >
      {props.children}
    </WordsContext.Provider>
  );
}
