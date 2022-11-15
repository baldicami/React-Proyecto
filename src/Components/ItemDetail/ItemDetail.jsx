import React from 'react'
import Button from '../Button/Button'
import "./ItemDetail.css"

function ItemDetail(props) {
  return (
    <div className='card'>
        <img className="card-img" src={props.imgurl} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.price}</p>
        <h4>{props.description} </h4>
        <Button>Agregar al carrito</Button>
    </div>

  )
}

export default ItemDetail