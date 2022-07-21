// import { Router } from "./Routes/Router";
import Detalhes from "./Pages/Detalhes";
import styled from "styled-components";

const Div = styled.div`
  background-color: grey;
  width: 1340px;
  height: 750px;
  margin: 0px;
  

`

export default function App() {
  return (
    <Div>
      {/* <Router /> */}
      <Detalhes/>
    </Div>
  );
}
