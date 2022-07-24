import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logopoke from "../imagens/logopoke.png";
import retanguloverde from "../imagens/retanguloverde.png";
import pokebola from "../imagens/pokebola.png";
import bulbadefrente from "../imagens/bulbadefrente.png";
import bulbadecostas from "../imagens/bulbadecostas.png";

// estilização:
const Img = styled.img`
    position: absolute;
    width: 1230px;
    height: 500px;
    left: 65px;
    top: 200px;
`
const Header = styled.header`
    background-color: white;
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
img {
    position: absolute;
    width: 307px;
    height: 100px;
    left: 566px;
    top: 15px;
}
`
const Main = styled.main`
    border: solid black 2px;
`
const Card1 = styled.div`
    border: solid black 1px;
    max-width: 25%;
`
const PokeBola = styled.img`
    width: 665.31px;
    height: 665.31px;

`
const Quadrado = styled.div`
    align-items: center;

`
const Quadrado2 = styled.div`
    align-items: center;
`
export default function Detalhes() {

    const [pokemon, setPokemon] = useState(" ")

    const getPokemon = (() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/ditto'
        ).then((response) => {
            setPokemon(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log(err.data)
        })
    })

    useEffect(() => {
        getPokemon()
    }, [])

    

    return(

        <div>

            <Header>

                <h4>Todos os pokémons</h4>
                <img src={logopoke}></img>
                <button>Remover Da Pokédex</button>

            </Header>

            <h1>Detalhes</h1>

            <Main>
                <Img src={retanguloverde}/>
                <PokeBola src={pokebola}/>

                <Card1>
                    <Quadrado>
                        <img src={bulbadefrente}/>
                    </Quadrado>
            
                    <Quadrado2>
                        <img src={bulbadecostas}/>
                    </Quadrado2>
                </Card1>

            </Main>
        </div>
    )
}