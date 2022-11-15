import React from 'react'
import Button from '../Button/Button';
import "./Item.css"
import {Link} from "react-router-dom"

function Item(props) {
  const urlDetail = `/detail/${props.id}`
  return (
    
    <div className='card-column'>
        <div className='card'>
            <img className="card-img" src={props.imgurl} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <Link to={urlDetail}>
              <Button>Ver más</Button>
            </Link>
        </div>
    </div>
  )
}

export default Item;