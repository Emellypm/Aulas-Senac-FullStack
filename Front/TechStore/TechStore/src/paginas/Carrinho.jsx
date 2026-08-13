import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    obterCarrinho,
    alterarQuantidade,
    removerDoCarrinho
} from "../services/carrinho";

import "./Carrinho.css";

function Carrinho() {

    const [produtos, setProdutos] = useState([]);

    function carregarCarrinho() {
        setProdutos(obterCarrinho());
    }

    useEffect(() => {
        carregarCarrinho();
    }, []);

    function aumentar(id, quantidade) {
        alterarQuantidade(id, quantidade + 1);
        carregarCarrinho();
    }

    function diminuir(id, quantidade) {
        alterarQuantidade(id, quantidade - 1);
        carregarCarrinho();
    }

    function remover(id) {
        removerDoCarrinho(id);
        carregarCarrinho();
    }

    const total = produtos.reduce(
        (soma, produto) =>
            soma + Number(produto.preco) * produto.quantidade,
        0
    );

    const quantidadeProdutos = produtos.reduce(
        (soma, produto) =>
            soma + produto.quantidade,
        0
    );

    return (
        <main className="carrinho">

            <div className="carrinho-header">

                <div>
                    <span>CARRINHO</span>

                    <h1>
                        Seus produtos
                    </h1>

                    <p>
                        {quantidadeProdutos} produto(s) no carrinho
                    </p>
                </div>

                <Link
                    to="/produtos"
                    className="continuar-comprando"
                >
                    ← Continuar comprando
                </Link>

            </div>


            {produtos.length === 0 ? (

                <section className="carrinho-vazio">

                    <div className="carrinho-vazio-icon">
                        🛒
                    </div>

                    <h2>
                        Seu carrinho está vazio
                    </h2>

                    <p>
                        Ainda não há produtos no seu carrinho.
                    </p>

                    <Link
                        to="/produtos"
                        className="ir-produtos"
                    >
                        Explorar produtos
                    </Link>

                </section>

            ) : (

                <div className="carrinho-conteudo">

                    <section className="lista-carrinho">

                        {produtos.map((produto) => (

                            <article
                                className="item-carrinho"
                                key={produto.id}
                            >

                                <div className="item-imagem">

                                    {produto.imagem ? (
                                        <img
                                            src={`/imagens/${produto.imagem}`}
                                            alt={produto.nome}
                                        />
                                    ) : (
                                        "🖥️"
                                    )}

                                </div>


                                <div className="item-info">

                                    <small>
                                        TECHSTORE
                                    </small>

                                    <h2>
                                        {produto.nome}
                                    </h2>

                                    <strong>
                                        R$ {Number(produto.preco)
                                            .toFixed(2)
                                            .replace(".", ",")}
                                    </strong>

                                </div>


                                <div className="quantidade">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            diminuir(
                                                produto.id,
                                                produto.quantidade
                                            )
                                        }
                                    >
                                        −
                                    </button>

                                    <span>
                                        {produto.quantidade}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            aumentar(
                                                produto.id,
                                                produto.quantidade
                                            )
                                        }
                                    >
                                        +
                                    </button>

                                </div>


                                <strong className="subtotal">
                                    R$ {(
                                        Number(produto.preco) *
                                        produto.quantidade
                                    )
                                        .toFixed(2)
                                        .replace(".", ",")}
                                </strong>


                                <button
                                    className="remover"
                                    type="button"
                                    onClick={() =>
                                        remover(produto.id)
                                    }
                                >
                                    ×
                                </button>

                            </article>

                        ))}

                    </section>


                    <aside className="resumo">

                        <h2>
                            Resumo do pedido
                        </h2>

                        <div className="linha">

                            <span>
                                Produtos
                            </span>

                            <strong>
                                {quantidadeProdutos}
                            </strong>

                        </div>

                        <div className="linha">

                            <span>
                                Subtotal
                            </span>

                            <strong>
                                R$ {total
                                    .toFixed(2)
                                    .replace(".", ",")}
                            </strong>

                        </div>

                        <div className="linha">

                            <span>
                                Entrega
                            </span>

                            <strong>
                                Grátis
                            </strong>

                        </div>

                        <div className="linha total">

                            <span>
                                Total
                            </span>

                            <strong>
                                R$ {total
                                    .toFixed(2)
                                    .replace(".", ",")}
                            </strong>

                        </div>

                        <Link
                            to="/cadastro"
                            className="finalizar"
                        >
                            Finalizar compra
                        </Link>

                    </aside>

                </div>

            )}

        </main>
    );
}

export default Carrinho;