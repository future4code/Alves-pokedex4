import styled from "styled-components"
import fire from './img/Fire.svg'
import back from './img/back.svg'
import {irParaDetalhes} from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom";

const CardStyle = styled.section`
    width: 440px;
    height: 210px;
    left: 0px;
    top: 0px;

    background: #EAAB7D;
    border-radius: 12px;

    display: grid;
    grid-template-columns: 50% 50%;
`;

const Left = styled.section`
  position: relative;
`;

const Right = styled.section`
  position: relative;
`;

const Number = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;

  position: absolute;
  left: 23px;
  top: 25px;
`;

const Name = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #fff;
    position: absolute;
    bottom: 131px;
    left: 23px;
`;

const Details = styled.p`
  position: absolute;
  left: 23px;
  bottom: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-decoration-line: underline;
  color: #FFFFFF;
  cursor: pointer;
`;

const Type = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 8px;
  gap: 17px;
  height: 31px;
  background : #F44900;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  position: absolute;
  bottom: 90px;
  left: 23px;
`;

const TypeName = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #fff;
`;

const Capturar = styled.button`
  font-family: 'Poppins';
  /* font-style: normal; */
  font-weight: 400;
  font-size: 16px;
  /* line-height: 24px; */
  color: #0F0F0F;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  width: 146px;
  height: 38px;
  position: absolute;
  bottom: 13px;
  right: 22px;
`;

const Back = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Pokemon = styled.img`
  width: 193px;
  position: absolute;
  right: 3px;
  bottom: 73px;
`;



export function Card(props) {
  const navegate = useNavigate()
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const types = props.pokemon.types?.map((type)=> <TypeName> {capitalizeFirstLetter(type.type.name)} </TypeName>)

  console.log(props.pokemon.types.length)

  return (
    <CardStyle>
      <Left>
        <Number>#{props.pokemon.id}</Number>
        <Name>{capitalizeFirstLetter(props.pokemon.name)}</Name>
        <Details onClick={()=>irParaDetalhes(navegate)}>Detalhes</Details>
        <Type>
          <img src={fire} alt="" />
          {types}
        </Type>
      </Left>
      <Right>
        <Capturar>Capturar</Capturar>
        <Back src={back} alt="" />
        <Pokemon src={props.pokemon.sprites.other["official-artwork"].front_default} />
      </Right>
    </CardStyle>
  )
}
