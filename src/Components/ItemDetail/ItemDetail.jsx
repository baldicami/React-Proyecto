import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../Items/ItemCount'
import {useContext} from "react";
import { cartContext} from "../../Context/cartContext";

function ItemDetail({product}) {
  const { addToCart } = useContext(cartContext)

  function onAddToCart(count){
  alert(`Agregaste ${count} productos al carrito.`)
  
  addToCart(product, count)
  }

  return (
    <div className='detailCard'>
        <img  src={product.img} alt={product.title} className="card-img-detail"/>
      <div className='description-detail'>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <h4>{product.description} </h4>
        <div>
        <ItemCount onAddToCart={onAddToCart} stock={product.stock}/>
        </div>
      </div>
    </div>

  )
}

export default ItemDetail;