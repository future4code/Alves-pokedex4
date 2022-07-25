import styled from "styled-components";

export const Screen = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color:#5E5E5E;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        height: 100%;
    }
`;

export const Header = styled.section`
    width: 100%;
    height: 160px;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        display:flex;
        flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
    display:flex ;
    justify-content: space-around;
    }
`;

export const Img = styled.img`
margin: 0 auto ;
@media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 200px;
}
@media screen and (min-device-width : 481px) and (max-device-width : 800px){
    margin: 0;
    }
`;

export const AllPokemons = styled.div`

width: 210px;
height: 36px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-decoration-line: underline;
color: #1A1A1A;
cursor: pointer;
margin-left: 10px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-weight: 600;
font-size: 20px;
line-height: 20px;
}

`;

export const Body = styled.section`
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 0 0 10px;
`;

export const Main = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 53px 14px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        grid-template-columns: 1fr;
}
@media screen and (min-device-width : 481px) and (max-device-width : 800px){
    grid-template-columns: 1fr ;}
`;

export const Title = styled.h1`
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    font-family: 'Poppins';
    font-style: normal;
    color: #fff;
    width: 100%;
    margin-bottom: 55px;
`;


