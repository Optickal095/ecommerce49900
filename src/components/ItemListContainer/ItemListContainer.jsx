import { useState, useEffect } from "react";
// import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, QuerySnapshot } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ welcome }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    // const asyncFunction = categoryId ? getProductsByCategory : getProducts;
    // asyncFunction(categoryId).then((response) => {
    //   setProducts(response);
    //   setLoading(false);
    // });

    setLoading(true);

    const collectionRef = collection(db, "products");

    getDocs(collectionRef)
      .then((querySnapshot) => {
        console.log(querySnapshot);

        const productsAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });

        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h3>Cargando...</h3>;
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
