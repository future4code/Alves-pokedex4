import React from "react";
import logopoke from "../imagens/logopoke.png";
import retanguloverde from "../imagens/retanguloverde.png";

export function Detalhes() {



    return(
        <div>

            <header>

                <h4>Todos os pokémons</h4>
                <img src={logopoke}></img>
                <button>Remover Da Pokédex</button>

            </header>

            <h1>Detalhes</h1>
            <img src={retanguloverde}></img>

        </div>
    )
}