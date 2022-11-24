import { Container, HangmanImage, StartButton, Row, Column, Underline } from "./style"

export default function ({hangmanImage, startGame, randomWord, clickedLetters, wordColor}) {
   return (
      <Container>
         <Row>
            <HangmanImage data-test="game-image" src={`./assets/images/${hangmanImage}`}></HangmanImage>
            <Column>
               <StartButton data-test="choose-word" onClick={startGame}>Escolher Palavra</StartButton>

               <Underline data-test="word" data-answer={randomWord.join("")} wordColor={wordColor}>
                  {randomWord.map((letter) => clickedLetters.includes(letter) ? letter : "_ ")}
               </Underline>
               
            </Column>
         </Row>
      </Container>
   )
}