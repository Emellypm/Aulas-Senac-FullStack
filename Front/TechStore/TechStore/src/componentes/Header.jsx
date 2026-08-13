import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">

            {/* LOGO */}
            <Link to="/" className="logo">
                <span className="logo-symbol">◉</span>
                <span className="logo-tech">TECH</span>
                <span className="logo-store">STORE</span>
            </Link>

            {/* MENU */}
            <nav className="nav">

                <Link to="/" className="nav-link">
                    Início
                </Link>

                <Link to="/produtos" className="nav-link">
                    Produtos
                </Link>

                <Link to="/produtos" className="nav-link">
                    Categorias
                </Link>

                <Link to="/contato" className="nav-link">
                    Contato
                </Link>

            </nav>

            {/* AÇÕES */}
            <div className="header-actions">

                <button className="icon-button">
                    🔍
                </button>

                <button className="icon-button">
                    ♡
                </button>

                <Link to="/carrinho" className="cart-button">
                    🛒 Carrinho
                    <span>0</span>
                </Link>

            </div>

        </header>
    );
}

export default Header;