import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../Items/ItemCount'
import {useContext, useState} from "react";
import { cartContext} from "../../Context/cartContext";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function ItemDetail({product}) {
  const { addToCart } = useContext(cartContext)
  const [isInCart, setIsInCart] = useState(false)

  function onAddToCart(count){
    addToCart(product, count)
    setIsInCart(count)
  }

  return (
    <div className='detailCard'>
      <img  src={product.img} alt={product.title} className="card-img-detail"/>
      <div className='description-detail'>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <h4>{product.description} </h4>
        <div className='btn-cart'>
      { isInCart ? 
        ( <Link to="/cart"> <Button> Ir al carrito </Button> </Link> )
        : <ItemCount onAddToCart={onAddToCart} stock={product.stock}/>}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;