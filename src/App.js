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
   const [wordColor, setWordColor] = useState('#000000');
   const [guessWord, setGuessWord] = useState('');

   // Start new game
   const startGame = () => {
      setDisabledBtn(false); // Enable buttons
      setHangmanImage('forca0.png'); // Initial hangman image
      setclickedLetters([]);
      setWordColor('#000000');
      setNumErrors(0);

      // random word
      let randomPosition = Math.floor(Math.random() * (palavras.length + 1)); // random position
      setRandomWord(palavras[randomPosition].split(""));
   }

   // When the user clicks on a letter
   const gameMove = (clickedLetter) => {
      setclickedLetters(clickedLetters => [...clickedLetters, clickedLetter]);

      // if the letter does not exist in the word
      if (!randomWord.includes(clickedLetter)) {
         let aux = numErrors + 1;
         setNumErrors(aux);
         setHangmanImage(`forca${aux}.png`)

         // User Lose
         if (aux === 6) {
            setclickedLetters([...randomWord]);
            setDisabledBtn(true);
            setWordColor('#FF0000');
         }
      }
      // User Win
      else if (checkWord([...clickedLetters, clickedLetter]) === true) { //word filled completely
         setDisabledBtn(true);
         setWordColor('#00FF00');
      }
   }

   // Checks if the word has been filled in completely
   const checkWord = (clkLetters) => {
      console.log("aqui ", clkLetters);
      for (let i = 0; i < randomWord.length; i++) {
         if (!clkLetters.includes(randomWord[i])) {
            return false; // unfilled word
         }
      }
      return true;
   }

   // Guess a value
   const guessValue = () => {
      if (guessWord !== '') {
         let str = randomWord.join('');
         let str2 = guessWord.toLowerCase();

         setclickedLetters([...randomWord]);
         setDisabledBtn(true);

         if (str === str2) { // User Win
            setWordColor('#00FF00');
         } else {
            setWordColor('#FF0000'); // User Lose
            setHangmanImage('forca6.png');
         }
      }
   }

   return (
      <>
         <Jogo
            hangmanImage={hangmanImage}
            clickedLetters={clickedLetters}
            startGame={startGame}
            randomWord={randomWord}
            wordColor={wordColor}
         />
         <Letras
            disabledBtn={disabledBtn}
            clickedLetters={clickedLetters}
            gameMove={gameMove} />
         <Chute
            disabledBtn={disabledBtn}
            guessWord={guessWord}
            setGuessWord={setGuessWord}
            guessValue={guessValue}
         />
      </>
   );
}

export default App;
