import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useNotification } from "../../notification/NotificationService";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId).then((response) => {
      setProduct(response);
    });
  }, [productId]);

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
