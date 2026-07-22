import {Link} from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <header className="header">

            <h1>🖥️ TechStore</h1>

            <nav>
                <ul className="menu">

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/produtos">Produtos</Link>
                    </li>

                    <li>
                        <Link to="/promocoes">Promoções</Link>
                    </li>

                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>

                </ul>
            </nav>

        </header>
    )
}

export default Header;