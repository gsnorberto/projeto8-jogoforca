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
   const [clickedLetters, setclickedLetters] = useState([]); // EX: ['a', 'g', 'q']

   // Start new game
   const startGame = () => {
      setDisabledBtn(false); // Enable buttons
      setHangmanImage('forca0.png'); // Initial hangman image
      setNumErrors(0);
      setclickedLetters([]);

      // random word
      let randomPosition = Math.floor(Math.random() * (palavras.length + 1)); // random position
      setRandomWord(palavras[randomPosition].split(""));
   }

   // When the user clicks on a letter
   const gameMove = (clickedLetter) => {
      setclickedLetters(clickedLetters => [...clickedLetters, clickedLetter]);

      // if the letter does not exist in the word
      if(!randomWord.includes(clickedLetter)){
         console.log("teste");
         setNumErrors(numErrors + 1);
         setHangmanImage(`forca${numErrors+1}.png`)
      }
   }

   return (
      <>
         <Jogo hangmanImage={hangmanImage} clickedLetters={clickedLetters} startGame={startGame} randomWord={randomWord}/>
         <Letras disabledBtn={disabledBtn} clickedLetters={clickedLetters} gameMove={gameMove}/>
         <Chute disabledBtn={disabledBtn} />
      </>
   );
}

export default App;
