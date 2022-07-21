import styled from "styled-components";

export const Screen = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color:#5E5E5E;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

export const Header = styled.section`
    width: 100%;
    height: 160px;
    background-color: #fff;
    display: flex;
    align-items: center;
`;

export const Img = styled.img`
margin: 0 auto;
`;

export const Button = styled.button`
    padding: 4px 10px;
    width: 287px;
    height: 74px;   
    background: #33A4F5;
    border-radius: 8px;
    border: none;
    position: absolute;
    right: 0px;
    margin-right: 41px;

    font-family: "Poppins";
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #fff;

    cursor: pointer;
`;

export const Body = styled.section`
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
    width: 1360px;
    margin: 0 auto;
`;

export const Main = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 53px 20px;
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