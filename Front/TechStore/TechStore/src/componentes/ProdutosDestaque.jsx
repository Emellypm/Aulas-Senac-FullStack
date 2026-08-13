import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "./ProdutosDestaque.css";
import { adicionarAoCarrinho } from "../services/carrinho";

function ProdutosDestaque() {

    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {

        async function carregarProdutos() {

            try {

                const resposta = await api.get("/produtos");

                setProdutos(resposta.data.slice(0, 4));

            } catch (erro) {

                console.error(
                    "Erro ao carregar produtos:",
                    erro
                );

            } finally {

                setCarregando(false);

            }
        }

        carregarProdutos();

    }, []);

    if (carregando) {
        return (
            <section className="produtos-destaque">
                <p className="mensagem-produtos">
                    Carregando produtos...
                </p>
            </section>
        );
    }

    return (
        <section className="produtos-destaque">

            <div className="produtos-header">

                <div>

                    <span className="produtos-tag">
                        SELEÇÃO TECHSTORE
                    </span>

                    <h2>
                        Produtos em
                        <span> destaque.</span>
                    </h2>

                    <p>
                        Os produtos mais procurados para melhorar
                        seu setup.
                    </p>

                </div>

                <Link
                    to="/produtos"
                    className="produtos-link"
                >
                    Ver todos →
                </Link>

            </div>


            {produtos.length === 0 ? (

                <p className="mensagem-produtos">
                    Nenhum produto disponível.
                </p>

            ) : (

                <div className="produtos-grid">

                    {produtos.map((produto) => (

                        <article
                            className="produto-card"
                            key={produto.id}
                        >

                            <div className="produto-imagem">

                                <span className="produto-badge">
                                    DESTAQUE
                                </span>

                                <button
                                    className="favorito"
                                    type="button"
                                >
                                    ♡
                                </button>

                                {produto.imagem ? (

                                    <img
                                        src={`/imagens/${produto.imagem}`}
                                        alt={produto.nome}
                                    />

                                ) : (

                                    <span className="produto-sem-imagem">
                                        🖥️
                                    </span>

                                )}

                            </div>


                            <div className="produto-info">

                                <span className="produto-categoria">
                                    TECHSTORE
                                </span>

                                <h3>
                                    {produto.nome}
                                </h3>

                                <div className="produto-bottom">

                                    <strong>
                                        R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
                                    </strong>

                                    <button
                                        className="comprar"
                                        type="button"
                                        onClick={() => adicionarAoCarrinho(produto)}
                                    >
                                        +
                                    </button>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            )}

        </section>
    );
}

export default ProdutosDestaque;