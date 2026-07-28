import "./Hero.css"
import Carrossel from "./Carrossel"

function Hero() {
    return (
        <section className="hero">

            <div className="hero-text">
                <span className="hero-badge">
                    ✦ BEM-VINDO À TECHSTORE
                </span>

                <h1>Tecnologia que <br />
                    <span>acompanha você.</span></h1>
                <p>Os melhores produtos de informática com qualidade,
                    desempenho e preço justo.</p>
                <div className="hero-buttons">
                    <button className="btn-primary">
                        Explorar Produtos
                    </button>
                    <button className="btn-secundary">
                        Ver Promoções
                    </button>
                </div>
            </div>

            <div className="hero-image">
                <Carrossel />

            </div>

        </section>
    )
}

export default Hero