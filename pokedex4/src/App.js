// import { Router } from "./Routes/Router";
import Detalhes from "./Pages/Detalhes";
import { Router } from "./Routes/Router";
import styled from "styled-components";
import { Router } from "react-router-dom";
import { Home } from "./Pages/home/Home"
import { RouterPage } from "./Routes/Router";

const Div = styled.div`
  background-color: grey;
  width: 1340px;
  height: 750px;
  margin: 0px;
  

`

export default function App() {
  return (
    <Div>
      <RouterPage/>
    </Div>

  );
}
