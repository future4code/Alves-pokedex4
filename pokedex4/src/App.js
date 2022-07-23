import styled from "styled-components";
import { RouterComponet } from "./Routes/Router";

const Div = styled.div`
  background-color: grey;
  width: 1349px;
  height: 850px;
  margin: 0px;
  

`

export default function App() {
  return (
    <Div>
      <RouterComponet/>
    </Div>

  );
}
