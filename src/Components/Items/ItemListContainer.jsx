import React from 'react'
import { useState, useEffect } from 'react'
import Item from './Item'
import "./ItemListContainer.css"
import getItems from '../../Services/MockService'
import { useParams } from "react-router-dom"

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams()

  async function getItemsAsync(){
    let response = await getItems(idCategory)
    setProducts(response)
  }
  useEffect(() => {
      getItemsAsync()
      }, [idCategory]);

  return (
    <div className='listContainer'>
      {products.map((product) => {
        return(
          <Item
            key={product.id}
            id={product.id}
            imgurl={product.img}
            title={product.title}
            price={product.price}
            category={product.category}
            stock={product.stock}
          /> 
        )
      })
      }
    </div>
  )
}

export default ItemListContainer;