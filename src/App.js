import ItemListContainer from "./Components/Items/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import CartView from "./Components/CartView/CartView";
import CompraExitosa from "./Components/CompraExitosa/CompraExitosa";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartContextProvider } from "./Context/cartContext";

function App() {
  return (
    <div className="body">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/detail/:id" element=  {<ItemDetailContainer/>} />
            <Route path="/category/:idCategory" element=  {<ItemListContainer/>} />     
            <Route path="/cart" element={<CartView/>} /> 

            <Route path="/CompraExitosa/:idOrder" element={<CompraExitosa/>}/>
            
          </Routes>  
        </BrowserRouter >
      </CartContextProvider>
    </div>
  );
}

export default App;
