import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

import Home from "./paginas/Home";
import Produtos from "./paginas/Produtos";
import Promocoes from "./paginas/Promocoes";
import Contato from "./paginas/Contato";


function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/produtos" element={<Produtos />} />

        <Route path="/promocoes" element={<Promocoes />} />

        <Route path="/contato" element={<Contato />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;