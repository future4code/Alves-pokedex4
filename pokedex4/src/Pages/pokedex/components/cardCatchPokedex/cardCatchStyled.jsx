import styled from "styled-components"

export const Tela = styled.section`
width: 100%;
height: 100%;
position: absolute;
background-color: #00000082;
top: 0;
`
export const Card = styled.section`
height: 222px;
width: 451px;
border-radius: 12px;
position: absolute;
background-color: #fff;
top: calc(50vh - 111px);
left: calc(50% - 225.5px);
display: flex;
justify-content: center;
`

export const Title = styled.h1`
position: absolute;
top: 61px;
height: 72px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #000000;
`

export const Description = styled.p`
position: absolute;
height: 24px;
top: 133px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #000000;
`