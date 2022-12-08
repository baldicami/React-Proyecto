import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider(props){
    const [cart, setCart] = useState([]);

    function addToCart(product, count){
        let newCart = [...cart];
        product.count = count;
        newCart.push(product);

        setCart(newCart)
    }

    function itemsInCart() {
        let total = 0
        cart.forEach( (itemInCart) => (total = total + itemInCart.count));
        return total;
    }

    const value = {
        addToCart,
        itemsInCart,
        cart
    }
    
    return(
        <cartContext.Provider value = {value}>
            {props.children}
        </cartContext.Provider>
    )
}
