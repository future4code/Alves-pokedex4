import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodosOsPokemons } from '../Components/TodosOsPokemons'
import {MeusPokemons} from '../Components/MeusPokemons'
import { Detalhes } from '../Components/Detalhes'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={TodosOsPokemons} />
                <Route path="/myPokemons" element={MeusPokemons} />
                <Route path="/details" element={Detalhes} />
            </Routes>
        </BrowserRouter>
    )
}