import React from 'react'
import Item from './Item'

function ItemList({products}) {
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

export default ItemList