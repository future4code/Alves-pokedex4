import React, { useEffect, useState } from "react";
import styled from "styled-components";
import opa from './img/image.svg'
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL"
import { Card } from "./Card";
import {irParaPokedex} from "../../Routes/Coordinator"
import {  useNavigate } from "react-router-dom";

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

const Button = styled.button`
    padding: 4px 10px;
    width: 287px;
    height: 74px;   
    background: #33A4F5;
    border-radius: 8px;
    border: none;
    position: absolute;
    right: 0px;
    margin-right: 41px;
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

export function Home() {
    const [pokemonList, setPokemonList] = useState([])
    const navegate = useNavigate()

    useEffect(() => {
        for (let i = 1; i < 10; i++) {
            axios.get(
                BASE_URL + "/pokemon/" + i
            ).then((res) => setPokemonList(pokemonList => [...pokemonList, res.data])).catch((err) => console.log(err))
        }
    }, [])

    const pokeList = pokemonList?.map((pokemon) => <Card key={pokemon.name} pokemon={pokemon} />)

    return (
        <Screen>
            <Header>
                <Img src={opa} alt="" />
                <Button onClick={()=>irParaPokedex(navegate)}>Pokédex</Button>
            </Header>
            <Body>
                <Title>Todos Pokémons</Title>
                <Main>
                    {pokeList}
                </Main>
            </Body>
        </Screen>
    )
}