import { Container, Title, Input, Button, Row } from "./style"

export default function ({disabledBtn}) {
   return (
      <Container>
         <Row>
            <Title>Já sei a palavra! </Title>
            <Input disabled={disabledBtn}/>
            <Button className={disabledBtn ? 'disabledButton': 'enabledButton'} disabled={disabledBtn}>Chutar</Button>
         </Row>
      </Container>
   )
}