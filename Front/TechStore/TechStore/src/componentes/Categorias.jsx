import { Link } from "react-router-dom";
import "./Categorias.css";

function Categorias() {
    const categorias = [
        {
            icone: "💻",
            nome: "Notebooks",
            descricao: "Potência para trabalhar e jogar"
        },
        {
            icone: "⌨️",
            nome: "Teclados",
            descricao: "Precisão para seu setup"
        },
        {
            icone: "🖱️",
            nome: "Mouses",
            descricao: "Controle e desempenho"
        },
        {
            icone: "🎧",
            nome: "Headsets",
            descricao: "Som para uma experiência imersiva"
        },
        {
            icone: "🖥️",
            nome: "Monitores",
            descricao: "Mais espaço para suas ideias"
        }
    ];

    return (
        <section className="categorias">

            <div className="categorias-header">

                <div>
                    <span className="categorias-tag">
                        CATEGORIAS
                    </span>

                    <h2>
                        Encontre o que
                        <span> procura.</span>
                    </h2>
                </div>

                <Link
                    to="/produtos"
                    className="categorias-link"
                >
                    Ver todos →
                </Link>

            </div>


            <div className="categorias-grid">

                {categorias.map((categoria) => (

                    <Link
                        to="/produtos"
                        className="categoria-card"
                        key={categoria.nome}
                    >

                        <div className="categoria-icone">
                            {categoria.icone}
                        </div>

                        <div className="categoria-info">

                            <h3>
                                {categoria.nome}
                            </h3>

                            <p>
                                {categoria.descricao}
                            </p>

                        </div>

                        <span className="categoria-arrow">
                            →
                        </span>

                    </Link>

                ))}

            </div>

        </section>
    );
}

export default Categorias;