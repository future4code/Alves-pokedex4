
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../Pages/home/Home'

import {Pokedex} from '../Pages/Pokedex'
import Detalhes from '../Pages/Detalhes'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/details" element={<Detalhes />} />
            </Routes>
        </BrowserRouter>
    )
}