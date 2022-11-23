import { useState } from "react";

import palavras from "./palavras";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";

function App() {
   const [disabledBtn, setDisabledBtn] = useState(true);
   const [hangmanImage, setHangmanImage] = useState('forca0.png');
   const [randomWord, setRandomWord] = useState([]);
   const [numErrors, setNumErrors] = useState(0);

   const startGame = () => {
      setDisabledBtn(false); // Enable buttons
      setHangmanImage('forca0.png'); // Initial hangman image
      setNumErrors(0);

      // random word
      let randomPosition = Math.floor(Math.random() * (palavras.length + 1)); // random position
      setRandomWord(palavras[randomPosition].split(""));
   }

   return (
      <>
         <Jogo hangmanImage={hangmanImage} startGame={startGame} randomWord={randomWord}/>
         <Letras disabledBtn={disabledBtn} />
         <Chute disabledBtn={disabledBtn} />
      </>
   );
}

export default App;
