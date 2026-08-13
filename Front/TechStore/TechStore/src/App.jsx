import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/Header";
import Home from "./paginas/Home";
import Carrinho from "./paginas/Carrinho";

function App() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/carrinho" element={<Carrinho />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;