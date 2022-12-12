import React from 'react'
import { useState, useEffect } from 'react'

import "./ItemListContainer.css"
import getItems, {getItemByCategory} from '../../Services/Firestore'
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
import Loader from '../Loaders/Loader'

function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const {idCategory} = useParams()


  async function getItemsAsync(){
    if(!idCategory){
      let response = await getItems()
      setProducts(response)
    }
    else{
      let response = await getItemByCategory(idCategory)
      setProducts(response)
    }
    
    
  }
  useEffect(() => {
      getItemsAsync()
      }, [idCategory]);

  return (
    <div >
      { products ? <ItemList products={products}/> : <Loader/>}
      
    </div>
  )
}

export default ItemListContainer;