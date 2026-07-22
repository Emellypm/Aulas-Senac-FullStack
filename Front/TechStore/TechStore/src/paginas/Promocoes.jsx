import "./Promocoes.css";

function Promocoes() {
    return (
        <section className="promocoes">

            <h2>🔥 Ofertas da TechStore</h2>

            <p>
                Aproveite descontos especiais em produtos selecionados!
            </p>

            <div className="ofertas">

                <div className="oferta-card">
                    <h3>Mouse Gamer</h3>
                    <p className="antigo">R$ 129,90</p>
                    <p className="novo">R$ 89,90</p>
                    <button>Comprar</button>
                </div>


                <div className="oferta-card">
                    <h3>Headset Gamer</h3>
                    <p className="antigo">R$ 299,90</p>
                    <p className="novo">R$ 249,90</p>
                    <button>Comprar</button>
                </div>


                <div className="oferta-card">
                    <h3>Teclado RGB</h3>
                    <p className="antigo">R$ 249,90</p>
                    <p className="novo">R$ 199,90</p>
                    <button>Comprar</button>
                </div>

            </div>

        </section>
    );
}

export default Promocoes;