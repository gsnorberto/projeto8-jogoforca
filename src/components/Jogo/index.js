import { Container, HangmanImage, StartButton, Row, Column, Underline } from "./style"

export default function () {
   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   let testWord = ['t', 'e', 's', 't', 'e'];

   return (
      <Container>
         <Row>
            <HangmanImage src="./assets/images/forca0.png"></HangmanImage>
            <Column>
               <StartButton>Escolher Palavra</StartButton>

               <Underline>
                  {testWord.map((e, ind) => "_ ")}
               </Underline>
               
            </Column>
         </Row>
      </Container>
   )
}