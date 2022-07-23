import styled from "styled-components";
import { RouterComponet } from "./Routes/Router";

const Div = styled.div`
  background-color: grey;
  width: 1340px;
  height: 750px;
  margin: 0px;
  

`

export default function App() {
  return (
    <Div>
      <RouterComponet/>
    </Div>

  );
}
