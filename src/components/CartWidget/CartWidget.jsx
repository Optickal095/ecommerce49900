import styles from "./CartWidget.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  const itemCount = 3;

  return (
    <div className={styles.cartIcon}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
