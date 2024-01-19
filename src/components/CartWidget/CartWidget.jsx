import styles from "./CartWidget.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className={styles.cartLink}>
      <div className={styles.cartIcon}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="item-count">{totalQuantity}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
