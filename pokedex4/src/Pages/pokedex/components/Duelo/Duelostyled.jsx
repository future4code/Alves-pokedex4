import styled from "styled-components"

export const Tela = styled.section`
width: 100%;
height: 100%;
position: absolute;
background-color: #00000082;
top: 0;
`
export const Card = styled.section`
height: 600px;
width: 600px;
display: grid;
grid-template-columns: 1fr 1fr;
border-radius: 12px;
position: absolute;
background-color: #fff;
top: calc(50vh - 111px);
left: calc(50% - 225.5px);
justify-content: center;
z-index: 999999;
`
export const FrontPokemon=styled.img`
    width: 100px;
`
export const NomePokemonDuelo = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  `

