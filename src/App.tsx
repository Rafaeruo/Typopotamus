import "./styles/global.css";
import Header from "./components/Header";
import TypeArea from "./components/TypeArea";
import Footer from "./components/Footer";
import Actions from "./components/Actions";

import { WordsContextProvider } from "./contexts/WordsContext";

function App() {
  return (
    <>
      <Header />
      <WordsContextProvider>
        <TypeArea />
        <Actions />
      </WordsContextProvider>
      <Footer />
    </>
  );
}

export default App;
