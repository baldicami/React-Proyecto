import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <Link to="/"> 
            <h2>Plantitas</h2>
        </Link>
        <ul>
            <li> 
                <Link to="/category/Interior">Interior</Link>
            </li>
            <li>
                <Link to="/category/Exterior">Exterior</Link>
            </li>
            <li>
                <Link to="/">Todas</Link>
            </li>
            <li>
                <CartWidget imgurl="https://www.pngitem.com/pimgs/m/340-3406807_icono-carrito-de-supermercado-png-transparent-png.png" height="20px"/>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar