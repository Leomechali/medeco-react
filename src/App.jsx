import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {


  return (
    <main>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a mi e-commerce" />
    </main>
  )
}

export default App
