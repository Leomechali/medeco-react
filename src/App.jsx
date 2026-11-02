import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <main>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a ME - DECO&AROMAS" />
    </main>
  );
}

export default App;
