import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../notification/NotificationService";
import "./ItemDetails.css";

const InputCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const handleChange = (e) => {
    if (e.target.value <= stock) {
      setCount(e.target.value);
    }
  };

  return (
    <div>
      <input type="number" onChange={handleChange} value={count} />
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
  const [inputType, setInputType] = useState("button");

  const { addItem, isInCart } = useCart();
  const { showNotification } = useNotification();

  const ItemCount = inputType === "input" ? InputCount : ButtonCount;

  const handleOnAdd = (quantity) => {
    const objProductToAdd = {
      id,
      name,
      price,
      quantity,
    };
    addItem(objProductToAdd);
    showNotification("success", `Se agregó correctamente ${quantity} ${name}`);
  };

  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} style={{ width: 100 }} />
      </picture>
      <section>
        <p>Categoría: {category}</p>
        <p>Descripción: {description}</p>
        <p>Precio: {price}</p>
        <p>Stock disponible: {stock}</p>
      </section>
      <footer>
        {!isInCart(id) ? (
          <ItemCount onAdd={handleOnAdd} stock={stock} />
        ) : (
          <Link to="/cart">Finalizar compra</Link>
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
