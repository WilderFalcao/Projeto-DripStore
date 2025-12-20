import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/LoginScreen">Home</Link>
                    <Link to="/LoginScreen">Produtos</Link>
                    <Link to="/LoginScreen">Categorias</Link>
                    <Link to="/LoginScreen">Meus Pedidos</Link>
                </li>
            </ul>
        </nav>
    )
}