import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProductsById("2").then((response) => {
      setProduct(response);
    });
  });
  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
