import React, { useContext } from 'react'
import { cartContext } from "../../Context/cartContext";

function CartWidget(props) {
  const myContext = useContext(cartContext);
  return (
    
    <div>
        <img src={props.imgurl} alt="carrito" height={props.height} />
        <span>
          {myContext.itemsInCart()}
        </span>
    </div>
  )
}

export default CartWidget