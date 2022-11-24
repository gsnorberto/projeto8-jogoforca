import { Container, Title, Input, Button, Row } from "./style"

export default function ({disabledBtn, guessWord, setGuessWord, guessValue}) {
   return (
      <Container>
         <Row>
            <Title>Já sei a palavra! </Title>
            <Input value={guessWord} onChange={(e) => setGuessWord(e.target.value)} disabled={disabledBtn}/>
            <Button onClick={() => guessValue()} className={disabledBtn ? 'disabledButton': 'enabledButton'} disabled={disabledBtn}>Chutar</Button>
         </Row>
      </Container>
   )
}