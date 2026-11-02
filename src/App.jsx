import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ItemListContainer greeting="Bienvenidos a ME - DECO&AROMAS" />
    </main>
  );
}

export default App;
