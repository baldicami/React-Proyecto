import {useState} from "react"
import "./ItemCount.css";
import Button from '../Button/Button';

function ItemCount(props) {
    const [count, setCount] = useState(1)
    
    function handleClickSuma() {
        if (count < props.stock){
            setCount(count+1)
        }
    
    }
    function handleClickResta() {
        if (count > 1){
            setCount(count-1)
        }
    }

  return (
    <div>
        <div className="count">
            <Button className="btCarrito" onClick={handleClickResta}>-</Button>
            <span> {count} </span>
            <Button className="btCarrito" onClick={handleClickSuma}>+</Button>
        </div>
        <div>
            <button onClick={() => props.onAddToCart(count)} className="btCarrito">Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount