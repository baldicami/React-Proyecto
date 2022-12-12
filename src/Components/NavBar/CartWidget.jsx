import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from "../../Context/cartContext";

function CartWidget(props) {
  const myContext = useContext(cartContext);
  return (
    
    <div>
      <Link to="/cart"> 
        <img src={props.imgurl} alt="carrito" height={props.height} />
        <span> {myContext.itemsInCart()}</span>
      </Link>
    </div>
  )
}

export default CartWidget