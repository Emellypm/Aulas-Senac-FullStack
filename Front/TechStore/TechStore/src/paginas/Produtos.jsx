import ProdutoCard from "../componentes/ProdutoCard";

import teclado from "../assets/imagens/teclado.jpg";
import mouse from "../assets/imagens/mouse.jpg";
import headset from "../assets/imagens/headset.jpg";

import "./Produtos.css";


function Produtos() {
    return (
        <section className="produtos">

            <h2>Nossos Produtos</h2>

            <div className="lista-produtos">

                <ProdutoCard
                    imagem={teclado}
                    nome="Teclado Gamer RGB"
                    preco="R$ 199,90"
                />

                <ProdutoCard
                    imagem={mouse}
                    nome="Mouse Gamer"
                    preco="R$ 89,90"
                />

                <ProdutoCard
                    imagem={headset}
                    nome="Headset Gamer"
                    preco="R$ 249,90"
                />

            </div>

        </section>
    )
}

export default Produtos;