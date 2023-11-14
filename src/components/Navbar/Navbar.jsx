import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="{classes.rojo}">Ecommerce</h1>
      <section>
        <button>Celulares</button>
        <button>Tablets</button>
        <button>Notebooks</button>
      </section>
    </nav>
  );
};

export default Navbar;
