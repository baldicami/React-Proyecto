import ItemListContainer from "./Components/Items/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a la tienda!" />    
    </>
  );
}

export default App;
