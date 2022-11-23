import { Container, HangmanImage, StartButton, Row, Column, Underline } from "./style"

export default function ({hangmanImage, startGame, randomWord, clickedLetters}) {
   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

   return (
      <Container>
         <Row>
            <HangmanImage src={`./assets/images/${hangmanImage}`}></HangmanImage>
            <Column>
               <StartButton onClick={startGame}>Escolher Palavra</StartButton>

               <Underline>
                  {randomWord.map((letter, indice) => clickedLetters.includes(letter) ? letter : "_ ")}
               </Underline>
               
            </Column>
         </Row>
      </Container>
   )
}