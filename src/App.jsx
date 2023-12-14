import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer welcome={"Listado de Productos"} />
      <ItemDetailContainer />
    </>
  );
}

export default App;
