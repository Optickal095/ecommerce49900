import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.containerHeader}>
      <header>
        <div className="logo">
          <h1>
            <a href="/">Puzzles</a>
          </h1>
        </div>
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/category/puzzle3d">PUZZLES 3D</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/category/madera">PUZZLES DE MADERA</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/category/rubick">RUBICK</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/category/accesorios">ACCESORIOS</Link>
                </a>
              </li>
              <CartWidget />
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
