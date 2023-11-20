import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div className={styles.containerHeader}>
      <header>
        <div className="logo">
          <h1>
            <a href="#">Puzzles</a>
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
                <a className="nav-link" href="./pages/about.html">
                  PUZZLES 3D
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/contact.html">
                  PUZZLES DE MADERA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/skills.html">
                  RUBICK
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/projects.html">
                  ACCESORIOS
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
