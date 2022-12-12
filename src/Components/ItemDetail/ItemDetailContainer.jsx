import React from 'react'
import { useState, useEffect } from 'react'
import { getSingleItem } from '../../Services/Firestore'
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail';
import Loader from '../Loaders/Loader';

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoeading] = useState(true)
  const paramId = useParams().id

  async function getItemAsync() {
    getSingleItem(paramId).then( 
      response => {
        setProduct(response)
        setIsLoeading(false)
      }
    )
  }

  useEffect(() => {
      getItemAsync()
    }, 
    [] );
  
  if(isLoading){
    return( <Loader/>)
  }  

  return (
    <div className='detailContainer'>
      <ItemDetail 
      product={product}
      imgurl={product.img} 
      title={product.title}
      price={product.price}
      description={product.description}
      stock={product.stock}
      />
    </div>
  )
}

export default ItemDetailContainer;