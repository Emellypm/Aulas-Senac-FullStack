import { Mail, Cpu, Globe } from "lucide-react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Marca */}
                <div className="footer-brand">

                    <div className="brand-title">
                        <Cpu size={24} />

                        <h2>TechStore</h2>
                    </div>

                    <p>
                        Tecnologia e inovação para quem gosta
                        de construir e explorar.
                    </p>

                </div>


                {/* Loja */}
                <div className="footer-section">

                    <h3>Loja</h3>

                    <a href="/produtos">Produtos</a>
                    <a href="/promocoes">Promoções</a>
                    <a href="#">Categorias</a>

                </div>


                {/* Suporte */}
                <div className="footer-section">

                    <h3>Suporte</h3>

                    <a href="/contato">Contato</a>
                    <a href="#">FAQ</a>
                    <a href="#">Ajuda</a>

                </div>


                {/* Redes */}
                <div className="footer-section">

                    <h3>Conecte-se</h3>

                    <div className="social-icons">

                        <Globe size={22} />
                        <Mail size={22} />
                        <Cpu size={22} />

                    </div>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © 2026 TechStore. Todos os direitos reservados.
                </p>

            </div>

        </footer>
    );
}

export default Footer;