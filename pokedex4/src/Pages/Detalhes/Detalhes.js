import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logopoke from "../../imagens/logopoke.png"
import retanguloverde from "../../imagens/retanguloverde.png";
import pokebola from "../../imagens/pokebola.png";
import bulbadefrente from "../../imagens/bulbadefrente.png";
import bulbadecostas from "../../imagens/bulbadecostas.png";
import { useNavigate, useParams } from "react-router-dom";
import { goToHome } from "../../Routes/Coordinator";
import retangulomaisgrosso from "../../imagens/retangulomaisgrosso.png";
import retangulomaisfino from "../../imagens/retangulomaisfino.png";
import statusbulba from "../../imagens/statusbulba.png";
import { Card } from "./CardDetalhes/CardDetalhe";
import { Screen, Header, Body,Img, Title, Main, AllPokemons } from './StyleDetalhes'
import opa from './img/image.svg'
import { BASE_URL } from "../../constants/BASE_URL";



const Img1 = styled.img`
    position: absolute;
    width: 500px;
    height: 300px;
    left: 900px;
    top: -7px;
    z-index: 99;
`

const Main1 = styled.main`
    position: relative;
    display: flex;
    margin-top: 155px;
`
const Card1 = styled.div`
    position: absolute;
    width: 800px;
    height: 625px;
    left: 250px;
    top: 50px;

`
const PokeBola = styled.img`
    width: 665.31px;
    height: 665.31px;
    margin-left: 300px;

`
const PokebolaPequena = styled.img`
    position: absolute;
    width: 565px;
    height: 465px;
    left: 650px;
    top: 100px;


`
const Quadrado = styled.div`
    position: absolute;
    width: 282px;
    height: 282px;
    left: 44px;
    top: 25px;
img{
    width: 272px;
    height: 272px; 
}  

`
const Quadrado2 = styled.div`
    position: absolute;
    width: 282px;
    height: 282px;
    left: 44px;
    top: 325px;
img{
    width: 272px;
    height: 272px; 
}  
`
const BaseStates = styled.div`
    position: absolute;
    width: 343px;
    height: 613px;
    left: 340px;
    top: 200px;
`
const Fundo = styled.img`
    height: 400px;
    width: 330px;
`
const BaseStats = styled.img`
    position: absolute;
    left: 10px;
    top: 25px;
    width: 240;
    
`


const Moves = styled.div`
    position: absolute;
    width: 200px;
    height: 453px;
    left: 695px;
    top: 184px;
img{
    width: 230px;
}
`
const Poke = styled.img`
    position: absolute;
    width: 270px;
    height: 270px;
    left: 900px;
    bottom: 500px;
   
    
`
export function Detalhes() {

    const navigate = useNavigate()
    const params = useParams()

    const [pokemon, setPokemon] = useState()

    const getPokemon = (() => {
        axios.get(BASE_URL + "/pokemon/" + params.id)
        .then((response) => {
            setPokemon(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    })

    useEffect(() => {
        getPokemon()

    }, [])

    console.log(pokemon)

    return<Screen>
             <Header>
                <AllPokemons onClick={() => goToHome(navigate)}>Todos Pokémons</AllPokemons>
                <Img src={opa} alt="" />
            </Header>

            <h1>Detalhes</h1>
            
            {pokemon ? <Main>

                <Img1 src={pokemon.sprites.other["official-artwork"].front_default}/>
                <PokeBola src={pokebola}/>

                <Card1>


                    <PokebolaPequena src={pokebola}/>

                    <Poke src={pokebola}/>


                    <Quadrado>
                        <img src={pokemon.sprites.front_default}/>
                    </Quadrado>
            
                    <Quadrado2>
                        <img src={pokemon.sprites.back_default}/>
                    </Quadrado2>

                    <BaseStates>
                        <Fundo src={retangulomaisgrosso}/>
                        <BaseStats src={statusbulba}/>
                    </BaseStates>

                    <Moves>
                        <img src={retangulomaisfino}/>
                    </Moves>

                    
                </Card1>

            </Main>:"...loading"}
        </Screen>
    
}