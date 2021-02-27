import { createContext, ReactNode, useState } from "react";
import randomWords from "random-words";

interface props {
  children: ReactNode;
}

export const WordsContext = createContext({} as contextData);

interface contextData {
  words: String[];
  generateAndSetWords: () => void;
  currentPosition: {
    letter: number;
    word: number;
  };
  setCurrentPosition: (currP: contextData["currentPosition"]) => void;
  wasLastMistake: boolean;
  setWasLastMistake: (wasLastMistake: contextData["wasLastMistake"]) => void;
}

export function WordsContextProvider(props: props) {
  //initialize states
  const [words, setWords]: [String[], (words: String[]) => void] = useState(
    addSpacesToWordArray(randomWords(100) as String[])
  );
  // const [mistakeCount, setMistakeCount] = useState(0);
  // const [correctCount, setCorrectCount] = useState(0);
  const [currentPosition, setCurrentPosition] = useState({
    word: 0,
    letter: 0,
  });
  const [wasLastMistake, setWasLastMistake] = useState(false);

  //create the random word array with the randomWords function
  function generateAndSetWords() {
    const w = addSpacesToWordArray(randomWords(100) as String[]);
    setWords(w);
  }

  //add space words to word array
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
        wasLastMistake,
        setWasLastMistake,
      }}
    >
      {props.children}
    </WordsContext.Provider>
  );
}
