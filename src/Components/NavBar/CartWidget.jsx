import React from 'react'

function CartWidget(props) {
  return (
    <div>
        <img src={props.imgurl} alt="carrito" height={props.height} />
    </div>
  )
}

export default CartWidget