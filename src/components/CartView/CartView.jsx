import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartView.css";

const CartView = () => {
  const { cart, total, removeItem } = useCart();

  return (
    <div className="cart-view">
      <h1>CARRITO</h1>
      {cart.length === 0 ? (
        <h3>El carrito está vacío.</h3>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((prod) => (
              <div key={prod.id} className="cart-item">
                <img src={prod.img} alt={prod.name} className="product-image" />
                <div className="product-details">
                  <h2>{prod.name}</h2>
                  <p>Cantidad: {prod.quantity}</p>
                  <p>Precio unidad: ${prod.price}</p>
                  <p>Subtotal: ${prod.quantity * prod.price}</p>
                  <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
          <h1>Total de la compra: ${total}</h1>
          <Link to="/checkout">Checkout</Link>
        </>
      )}
    </div>
  );
};

export default CartView;
