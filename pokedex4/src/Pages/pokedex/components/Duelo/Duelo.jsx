import { useEffect, useState } from "react"
import { Tela, Title, Card, FrontPokemon, NomePokemonDuelo } from "./Duelostyled"


export function CardDuelo(props) {
  const [somaPoder,setSomaPoder]=useState()

  useEffect(()=>{
    Resultado()

  },[])

  function mensagem() {
    window.location.reload()
    props.setExcluir(false)
  }

  function Resultado () {
  if(Comparapokemon1>Comparapokemon2){
    return <h2>O {props.pokemonsEscolhidos[0][0].name.toUpperCase()} é o vencedor !!</h2>
  }else if(Comparapokemon1<Comparapokemon2){
    return <h2>O {props.pokemonsEscolhidos[1][0].name.toUpperCase()} é o vencedor !!</h2>
  } else{
  <h2>Empate!!</h2>
}
  }

  const pokemonMap1=props.pokemonsEscolhidos[0].map((item)=>{
    const total=item.stats.map((item)=>item.base_stat).reduce((prev, curr) => prev + curr, 0);
      return( <div>
      <FrontPokemon src={item.sprites.front_default}/>
      <NomePokemonDuelo>{item.name.toUpperCase()}</NomePokemonDuelo>
      {item.stats.map((item)=>{
        return(<div>
        {item.stat.name} : {item.base_stat}
        </div>)
      })}
      <div>
      Total:{total}
      </div>
      </div>)
      })
      
 const Comparapokemon1=  props.pokemonsEscolhidos[0][0].stats[0].base_stat + props.pokemonsEscolhidos[0][0].stats[1].base_stat+ props.pokemonsEscolhidos[0][0].stats[2].base_stat+ props.pokemonsEscolhidos[0][0].stats[3].base_stat+ props.pokemonsEscolhidos[0][0].stats[4].base_stat+ props.pokemonsEscolhidos[0][0].stats[5].base_stat
 const Comparapokemon2=  props.pokemonsEscolhidos[1][0].stats[0].base_stat + props.pokemonsEscolhidos[1][0].stats[1].base_stat+ props.pokemonsEscolhidos[1][0].stats[2].base_stat+ props.pokemonsEscolhidos[1][0].stats[3].base_stat+ props.pokemonsEscolhidos[1][0].stats[4].base_stat+ props.pokemonsEscolhidos[1][0].stats[5].base_stat

        
  

    
    const pokemonMap2=props.pokemonsEscolhidos[1].map((item)=>{
      const total=item.stats.map((item)=>item.base_stat).reduce((prev, curr) => prev + curr, 0);
      return( <div>
      <FrontPokemon src={item.sprites.front_default}/>
      <NomePokemonDuelo>{item.name.toUpperCase()}</NomePokemonDuelo>
      {item.stats.map((item)=>{
        return(<div>
        {item.stat.name} : {item.base_stat}
        </div>)
      })}
       total:{total}
      </div>)
      }
      )

  return (
    <Tela onClick={mensagem}>
      <Card >
        <div>
        {pokemonMap1}
        </div>
        <div>
        {pokemonMap2}
        </div>
        {Resultado()}
        
      </Card>
    </Tela>
  )
}