import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <nav>
            <div className="nav-container">
                <div className="DS-logo">
                    <img src="./src/assets/logo.png" alt="logo" />
                    <div className="Drip">
                        <h1>DripStore</h1>
                    </div>
                </div>

                <div className="nav-search">
                    <input type="text" placeholder="Pesquisar produto..." />
                    <img src="./src/assets/Search.png" alt="search" className="search-icon" />
                </div>

                <div className="nav-actions">
                    <Link to="/cadastro" className="cadastre-se">Cadastre-se</Link>
                    <button className="btn-entrar">Entrar</button>
                    <img src="./src/assets/carrinho.png" alt="carrinho" className="cart-icon" />
                </div>
            </div>
            <ul>
                <li>
                    <Link to="/" className="active">Home</Link>
                    <Link to="/Produtos" className="active">Produtos</Link>
                    <Link to="/Categorias" className="active">Categorias</Link>
                    <Link to="/MeusPedidos" className="active">Meus Pedidos</Link>
                </li>
            </ul>
        </nav>
    )
}