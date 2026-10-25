import './App.css'
import Navbar from './components/Navbar/Navbar'
import Contador from './components/Contador/Contador'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {


  return (
    <main>
      <Navbar />
      <Contador />
      <ItemListContainer greeting="Bienvenidos a mi e-commerce" />
    </main>
  )
}

export default App
