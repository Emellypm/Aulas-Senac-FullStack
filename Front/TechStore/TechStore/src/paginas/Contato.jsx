import "./Contato.css";

function Contato() {
    return (
        <section className="contato">

            <h2>📩 Entre em contato</h2>

            <p>
                Tem dúvidas sobre produtos ou pedidos?
                Nossa equipe está pronta para ajudar!
            </p>

            <form className="form-contato">

                <input 
                    type="text"
                    placeholder="Seu nome"
                />

                <input 
                    type="email"
                    placeholder="Seu email"
                />

                <textarea
                    placeholder="Digite sua mensagem"
                ></textarea>

                <button type="submit">
                    Enviar mensagem
                </button>

            </form>

        </section>
    );
}

export default Contato;