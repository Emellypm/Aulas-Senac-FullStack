import "./Hero.css"

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
                <img
                    src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=900"
                    alt="Setup Gamer"
                />

            </div>
        </section>
    )
}

export default Hero