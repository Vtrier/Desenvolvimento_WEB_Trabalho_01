import { Link, useLocation } from 'react-router-dom';
import './mainNav.css';

export default function Nav() {
    const location = useLocation();

    return (
        <nav className="main-nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Início</Link>
            <Link to="/listar" className={location.pathname === '/listar' ? 'active' : ''}>Listagem</Link>
            <Link to="/listar_id">Listar por ID</Link>
            <Link to="/cadastrar" className={location.pathname === '/cadastrar' ? 'active' : ''}>Novo Livro</Link>
        </nav>
    );
}