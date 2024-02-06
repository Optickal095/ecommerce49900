import { useState, useEffect } from "react";
// import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useNotification } from "../../notification/NotificationService";
import { getDoc, doc, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  const { showNotification } = useNotification();

  useEffect(() => {
    // getProductById(productId)
    //   .then((response) => {
    //     setProduct(response);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching product:", error);
    //     showNotification("Error al cargar el producto", "error");
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    setLoading(true);

    const documentRef = doc(db, "products", productId);

    getDoc(documentRef)
      .then((QueryDocumentSnapshot) => {
        const fields = QueryDocumentSnapshot.data();
        const productAdapted = { id: QueryDocumentSnapshot.id, ...fields };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId, showNotification]);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <h1>Detalle del producto</h1>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailContainer;
