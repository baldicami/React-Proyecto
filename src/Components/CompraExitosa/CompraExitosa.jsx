import React from 'react'
import { useParams } from 'react-router-dom'

function CompraExitosa() {
    const idOrder = useParams().idOrder

  return (
    <div>
        <h1>¡Gracias por tu compra!</h1>
        <h2>Tu nº de pedido es: <strong> {idOrder}</strong></h2>
    </div>
  )
}

export default CompraExitosa