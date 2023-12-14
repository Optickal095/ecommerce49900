import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer welcome={"Listado de Productos"} />}
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer
                welcome={"Productos filtrados por categoría"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
