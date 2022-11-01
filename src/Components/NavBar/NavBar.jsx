import React from 'react'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <nav>
        <h2>
            Mi tienda
        </h2>
        <ul>
            <li>
                <a href=""> Mangas</a>
            </li>
            <li>
                <a href="">Manhwas</a>
            </li>
            <li>
                <a href="">Manhuas</a>
            </li>
            <li>
                <CartWidget imgurl="https://www.pngitem.com/pimgs/m/340-3406807_icono-carrito-de-supermercado-png-transparent-png.png" height="20px"/>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar