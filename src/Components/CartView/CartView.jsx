import React, {useContext} from 'react'
import { cartContext } from '../../Context/cartContext'
import { createOrder } from '../../Services/Firestore'
import { useNavigate } from 'react-router-dom'

import Button from '../Button/Button'
import  "../CartView/CartView.css"
import CartForm from './CartForm'



function CartView() {
    const { cart, clearCart, removeItem, priceInCart } = useContext(cartContext)
    let navigate = useNavigate()
    
    
    async function handleCheckOut(e, data){
        const order = {
            buyer : data,
            items : cart,
            total : priceInCart(),
            date : new Date(),
        }
        console.log(order)
        const orderId = await createOrder(order)
        navigate(`/CompraExitosa/${orderId}`)
    }
    if( cart.length === 0) return <div className='emptyCart'><h2> Carrito vacío</h2></div>
    return (
        <div className='cart-container'>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio p/ unidad</th>
                    <th>Cantidad</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody >
                {cart.map( (item) => (
                <tr key={item.id}> 
                    <td><h3> {item.title} </h3></td>
                    <td><h3> ${item.price} </h3></td>
                    <td><h4> {item.count} </h4></td>
                    <td><Button onClick={()=> removeItem(item.id)}  color="red">X</Button></td>
                </tr>              
                ))}
                <tr>
                    <td>PRECIO TOTAL :</td>
                    <td>${priceInCart()}</td>
                </tr>  
            </tbody>
        </table>
        <Button onClick={clearCart}>Vaciar carrito</Button>
        <CartForm onSubmit={handleCheckOut}/>
        
    </div>
    )
}

export default CartView