import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logopoke from "../imagens/logopoke.png";
import retanguloverde from "../imagens/retanguloverde.png";

const Img = styled.img`
    position: absolute;
    width: 1389.14px;
    height: 663px;
    left: 0px;
    top: 0px;
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

            <header>

                <h4>Todos os pokémons</h4>
                <img src={logopoke}></img>
                <button>Remover Da Pokédex</button>

            </header>

            <h1>Detalhes</h1>
            <Img src={retanguloverde}/>

    

        </div>
    )
}