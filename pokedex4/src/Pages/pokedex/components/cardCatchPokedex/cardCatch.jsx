import { Tela, Title, Card, Description } from "./cardCatchStyled"


export function Cardcatch(props) {
  function mensagem() {
    window.location.reload()
    props.setExcluir(false)
  }

  return (
    <Tela onClick={mensagem}>
      <Card >
        <Title>{"Oh, no!"}</Title>
        <Description>{"O Pokémon foi removido da sua Pokedéx"}</Description>
      </Card>
    </Tela>
  )
}
