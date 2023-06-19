import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <h1>CINEMATICA ZONE</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/productos">Listas de Peliculas</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>  
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
