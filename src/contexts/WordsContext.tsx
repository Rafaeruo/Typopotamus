import { createContext, ReactNode, useState } from "react";
import randomWords from "random-words";

interface contextData {
  words: String[];
  generateAndSetWords: () => void;
  currentPosition: {
    letter: number;
    word: number;
  };
  setCurrentPosition: (currP: contextData["currentPosition"]) => void;
}

interface props {
  children: ReactNode;
}

export const WordsContext = createContext({} as contextData);

export function WordsContextProvider(props: props) {
  const [words, setWords]: [String[], (words: String[]) => void] = useState(
    addSpacesToWordArray(randomWords(100) as String[])
  );
  const [mistakeCount, setMistakeCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [currentPosition, setCurrentPosition] = useState({
    word: 0,
    letter: 0,
  });

  function generateAndSetWords() {
    const w = addSpacesToWordArray(randomWords(100) as String[]);
    setWords(w);
  }

  function addSpacesToWordArray(a: String[]) {
    for (let i = 1; i < a.length; i += 2) {
      a.splice(i, 0, " ");
    }
    return a;
  }

  return (
    <WordsContext.Provider
      value={{
        words,
        generateAndSetWords,
        currentPosition,
        setCurrentPosition,
      }}
    >
      {props.children}
    </WordsContext.Provider>
  );
}
