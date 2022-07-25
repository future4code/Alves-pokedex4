import styled from "styled-components";
import { RouterComponet } from "./Routes/Router";

const Div = styled.div`
  background-color: grey;
  width: 1349px;
  height: 1100px;
  min-width: 100%;
  margin: 0px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    max-width: 480px;
    min-width: 320px;
    height: 100%;
    width: 100%;
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    max-width:800px;
    min-width: 481px;
    height: 100%;
    width:100%
  }
`

export default function App() {
  return (<Div>
      <RouterComponet/>
      </Div>
  );
}
