import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ welcome }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;
    asyncFunction(categoryId).then((response) => {
      setProducts(response);
    });
  }, [categoryId]);

  return (
    <div>
      <h1>{welcome}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
