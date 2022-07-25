import styled from "styled-components"

export const CardStyle = styled.section`
  width: 370px;
  height: 210px;
  left: 0px;
  top: 0px;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 350px;
  }
`;

export const Left = styled.section`
  position: relative;

`;

export const Right = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Number = styled.p`
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

export const Name = styled.h1`
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

export const Details = styled.p`
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

export const Type = styled.div`
  display: flex;
  position: absolute;
  bottom: 90px;
  left: 23px;
  gap: 7px;
`;

export const TypeInside = styled.div`
  display: flex;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 8px;
  gap: 17px;
`;

export const TypeName = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #fff;
`;

export const Excluir = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  border: none;
  border-radius: 8px;
  background-color: #FF6262;
  width: 100px;
  height: 38px;
  position: absolute;
  bottom: 13px;
  right: 18px;
  z-index: 10;
  cursor: pointer;
`;
export const Duelo = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  border: none;
  border-radius: 8px;
  background-color: #d81b1b;
  width: 100px;
  height: 38px;
  position: absolute;
  bottom: 13px;
  right: 140px;
  z-index: 10;
  cursor: pointer;
`;

export const Back = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const Pokemon = styled.img`
  width: 193px;
  position: absolute;
  right: 3px;
  bottom: 73px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){}
  width: 165px;
`;