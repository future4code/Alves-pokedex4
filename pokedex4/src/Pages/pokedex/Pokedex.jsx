import React, { useEffect, useState } from "react";
import opa from './img/image.svg'
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL"
import { Card } from "./components/cardPokedex/CardPokedex"
import { Screen, Header, Img, Body, Title, Main, AllPokemons } from './StylePokedex'
import { goToHome } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Cardcatch } from "./components/cardCatchPokedex/cardCatch";
import { CardDuelo } from "./components/Duelo/Duelo";


export function Pokedex() {
    const [pokemonList, setPokemonList] = useState([])
    const [excluir, setExcluir] = useState(false)
    const [loading,setloading]=useState(false)
    const [pokemonsEscolhidos,setPokemonsEscolhidos]=useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setloading(true)
        JSON.parse(localStorage.getItem("catchedPokemons")).map((item) =>
                axios.get(
                    BASE_URL + "/pokemon/" + item.id
                ).then((res) => {
                    setPokemonList(pokemonList => [...pokemonList, res.data])
                    setloading(false)
                }).catch((err) =>{
                    alert(err.response.data)
                    setloading(false)
                    })
            )
    }, [])

    
    const removePokemon = (id) => {
        setExcluir(!excluir)
        let getLocal = JSON.parse(localStorage.getItem("catchedPokemons"))
        let newLits= getLocal.filter((item)=>{
            return item.id!==id
        })
        localStorage.setItem("catchedPokemons", JSON.stringify(newLits))
    }

    const dueloPokemon=(id)=>{
        let getLocalDuelo = JSON.parse(localStorage.getItem("catchedPokemons"))
        let pokemonSelecionado= getLocalDuelo.filter((item)=> item.id===id)
        setPokemonsEscolhidos([...pokemonsEscolhidos,pokemonSelecionado])
        if(pokemonsEscolhidos.length==0){return alert("Selecione mais um pokemon para o duelo!")}
        
    }
    
    
    const pokeList = pokemonList?.sort((a, b) => a.id - b.id).map((pokemon) => <Card key={pokemon.name} pokemon={pokemon} removePokemon={removePokemon} dueloPokemon={dueloPokemon} />)

    return <Screen>
            <Header>
                <AllPokemons onClick={() => goToHome(navigate)}>Todos Pokémons</AllPokemons>
                <Img src={opa} alt="" />
            </Header>
            {loading ? "...Loading" :<Body >
                <Title>Meus Pokémons</Title>
                <Main>
                    {pokeList}
                    {excluir && <Cardcatch setExcluir={setExcluir} />}
                    {pokemonsEscolhidos.length>=2? <CardDuelo pokemonsEscolhidos={pokemonsEscolhidos}/>:false}
                    
                </Main>
            </Body>}
        </Screen>
    
}

