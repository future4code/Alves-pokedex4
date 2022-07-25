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
import { Card } from "./CardDetalhes/CardDetalhe"


// estilização:
const Pai = styled.div`
    position: relative;
`
const Img = styled.img`
    position: absolute;
    width: 1230px;
    height: 625px;
    left: 65px;
    top: 50px;
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
    position: relative;
    display: flex;
    margin-top: 155px;
`
const Card1 = styled.div`
    position: absolute;
    width: 1230px;
    height: 625px;
    left: 65px;
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
    top: 25px;
`
const Fundo = styled.img`
    height: 571px;
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
export default function Detalhes() {

    const navigate = useNavigate()
    const params = useParams()

    const [pokemon, setPokemon] = useState(" ")

    const getPokemon = (() => {
        axios.get(`https://pokeapi.co/api/v2/${params.pokemon.id}/`
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

        <Pai>
            <Card/>
            <Header>

                <u onClick={() => goToHome(navigate,"/")}>Todos os pokémons</u>
                <img src={logopoke}></img>
                <button>Remover Da Pokédex</button>

            </Header>

            <h1>Detalhes</h1>
            
            <Main>

                <Img src={retanguloverde}/>
                <PokeBola src={pokebola}/>

                <Card1>


                    <PokebolaPequena src={pokebola}/>

                    <Poke src={pokebola}/>


                    <Quadrado>
                        <img src={bulbadefrente}/>
                    </Quadrado>
            
                    <Quadrado2>
                        <img src={bulbadecostas}/>
                    </Quadrado2>

                    <BaseStates>
                        <Fundo src={retangulomaisgrosso}/>
                        <BaseStats src={statusbulba}/>
                    </BaseStates>

                    <Moves>
                        <img src={retangulomaisfino}/>
                    </Moves>

                    
                </Card1>

            </Main>
        </Pai>
    )
}