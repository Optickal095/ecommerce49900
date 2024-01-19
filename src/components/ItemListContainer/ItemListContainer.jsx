import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ welcome }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;
    asyncFunction(categoryId).then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (products.length === 0) {
    return <p>No existen productos</p>;
  }

  return (
    <div onClick={() => console.log("container")}>
      <h1>{welcome}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
