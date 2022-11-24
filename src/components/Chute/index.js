import { Container, Title, Input, Button, Row } from "./style"

export default function ({disabledBtn, guessWord, setGuessWord, guessValue}) {
   return (
      <Container>
         <Row>
            <Title>Já sei a palavra! </Title>
            <Input data-test="guess-input" value={guessWord} onChange={(e) => setGuessWord(e.target.value)} disabled={disabledBtn}/>
            <Button data-test="guess-button" onClick={() => guessValue()} className={disabledBtn ? 'disabledButton': 'enabledButton'} disabled={disabledBtn}>Chutar</Button>
         </Row>
      </Container>
   )
}