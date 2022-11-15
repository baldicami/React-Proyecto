import React from 'react'
import Button from '../Button/Button'
import "./ItemDetail.css"

function ItemDetail(props) {
  return (
    <div className='detailCard'>
      <div className="card-img-detail">
        <img  src={props.imgurl} alt={props.title} />
      </div>
      <div className='description-detail'>
        <h3>{props.title}</h3>
        <p>{props.price}</p>
        <h4>{props.description} </h4>
        <Button>Agregar al carrito</Button>
      </div>
    </div>

  )
}

export default ItemDetail;