import React from 'react'
import { useState, useEffect } from 'react'
import { getSingleItem } from '../../Services/MockService'
import { useParams } from "react-router-dom"

import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const paramId = useParams().id

  async function getItemAsync() {
    let response = await getSingleItem(paramId);
    setProduct(response);
  }

  useEffect(() => {
      getItemAsync()
    }, 
    [] );

  return (
    <div className='detailContainer'>
      <ItemDetail 
      product={product}
      imgurl={product.img} 
      title={product.title}
      price={product.price}
      description={product.description}
      />
    </div>
  )
}

export default ItemDetailContainer;