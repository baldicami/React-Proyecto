import ItemListContainer from "./Components/Items/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />          
        </Routes>
      
      </BrowserRouter >
    </div>
  );
}

export default App;
