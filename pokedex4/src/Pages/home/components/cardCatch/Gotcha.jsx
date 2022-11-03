import styled from "styled-components"

const Card = styled.section`
    height: 222px;
    width: 451px;
    border-radius: 12px;
    position: relative;
    background-color: #fff;
    position: fixed;
    top: calc(50vh - 111px);
    left: calc(50% - 225.5px);
    display: flex;
    justify-content: center;
    z-index: 100;
`;

const Title = styled.h1`
    position: absolute;
    top: 61px;
    height: 72px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #000000;
`;

const Description = styled.p`
    position: absolute;
    height: 24px;
    top: 133px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    color: #000000;
`;

export function Gotcha() {
  return (
    <Card>
        <Title>{"Gotcha!"}</Title>
        <Description>{"O Pokémon foi adicionado a sua Pokédex"}</Description>
    </Card>
  )
}
