import styles from "./CartWidget.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <div className={styles.cartIcon}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

export default CartWidget;
