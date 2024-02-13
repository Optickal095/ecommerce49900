import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./Checkout.css";
import { db } from "../../services/firebase/firebaseConfig";
import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { useNotification } from "../../notification/NotificationService";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cart, total, clearCart } = useCart();

  const { showNotification } = useNotification();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createOrder();
  };

  const createOrder = async () => {
    try {
      setLoading(true);
      const objOrder = {
        buyer: {
          name: userData.name,
          phone: userData.phone,
          email: userData.email,
        },
        items: cart,
        total,
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsCollection = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const { docs } = await getDocs(productsCollection);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const ordersCollection = collection(db, "orders");

        const { id } = await addDoc(ordersCollection, objOrder);

        clearCart();
        setOrderId(id);
      } else {
        showNotification(
          "error",
          "Hay productos que no tienen stock disponible"
        );
      }
    } catch (error) {
      showNotification(
        "error",
        "Hubo un error generando la orden: " + error.message
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se esta generando su orden...</h1>;
  }

  if (orderId) {
    return (
      <div>
        <h1>Orden generada</h1>
        <p>El id de su orden es: {orderId}</p>
        <p>Nombre: {userData.name}</p>
        <p>Teléfono: {userData.phone}</p>
        <p>Correo electrónico: {userData.email}</p>
      </div>
    );
  }

  return (
    <>
      <h1>Checkout</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Correo electrónico:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Generar orden</button>
        </form>

        <div>
          <h2>Productos en el carrito:</h2>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - Cantidad: {product.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Checkout;
