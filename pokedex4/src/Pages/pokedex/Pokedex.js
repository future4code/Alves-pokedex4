import React, { useEffect, useState } from "react";
import styled from "styled-components";
import opa from './img/image.svg'
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL"
import { Card } from "./Card";
import {irParaHome} from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom";



const Screen = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color:#5E5E5E;
    display: flex;
    flex-wrap: wrap;
`;

const Header = styled.section`
    width: 100%;
    height: 160px;
    background-color: #fff;
    display: flex;
    align-items: center;
`;

const Img = styled.img`
margin: 0 auto;
`;

const Voltar = styled.div`
position: absolute;
width: 210px;
height: 36px;
left: 100px;
top: 62px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-decoration-line: underline;
color: #1A1A1A;
cursor: pointer;
`;

const Body = styled.section`
    padding: 60px 40px;
    display: flex;
    flex-wrap: wrap;
`;

const Main = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 53px 20px;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    font-family: 'Poppins';
    font-style: normal;
    color: #fff;
    width: 100%;
    margin-bottom: 55px;
`;

export function Pokedex() {
    const [pokeDex, setPokeDex] = useState([])
    const [pokemonList, setPokemonList] = useState([])
    const navegate = useNavigate()

    useEffect(() => {
            axios.get(
                BASE_URL + "/pokemon/1"
            ).then((res) =>{
                 setPokeDex(pokeDex => [...pokeDex, res.data])
                 console.log(res.data)
                }).catch((err) => {
                    console.log(err)}
                    )
        }, [])

    const pokeList = pokeDex?.map((pokemon) => <Card key={pokemon.name} pokemon={pokemon} />)

    return (
        <Screen>
            <Header>
                <Voltar onClick={()=>irParaHome(navegate)}>Todos Pokémons</Voltar>
                <Img src={opa} alt="" />
            </Header>
            <Body>
                <Title>Meus Pokémons</Title>
                <Main>
                    {pokeList}
                </Main>
            </Body>
        </Screen>
    )
}
