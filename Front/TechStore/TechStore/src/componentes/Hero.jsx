import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <div className="hero-badge">
                    ⚡ OFERTAS ESPECIAIS
                </div>

                <h1>
                    Monte seu setup.
                    <br />
                    <span>Do seu jeito.</span>
                </h1>

                <p>
                    Tecnologia, desempenho e estilo para transformar
                    sua experiência. Encontre os produtos ideais
                    para o seu setup.
                </p>

                <div className="hero-buttons">

                    <Link
                        to="/produtos"
                        className="hero-primary"
                    >
                        Explorar produtos →
                    </Link>

                    <Link
                        to="/produtos"
                        className="hero-secondary"
                    >
                        Ver ofertas
                    </Link>

                </div>

                <div className="hero-stats">

                    <div>
                        <strong>+100</strong>
                        <span>Produtos</span>
                    </div>

                    <div>
                        <strong>+50</strong>
                        <span>Clientes</span>
                    </div>

                    <div>
                        <strong>24h</strong>
                        <span>Suporte</span>
                    </div>

                </div>

            </div>


            <div className="hero-product">

                <div className="product-glow"></div>

                <span className="product-label">
                    PRODUTO EM DESTAQUE
                </span>

                <div className="product-image">
                    💻
                </div>

                <div className="product-info">

                    <span>TECHSTORE</span>

                    <h2>
                        Performance
                        <br />
                        sem limites.
                    </h2>

                    <p>
                        Equipamentos escolhidos
                        para quem busca mais.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Hero;