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

    function itemsInCart(){
        let total = 0
        cart.forEach( (itemInCart) => (total = total + itemInCart.count));
        return total;
    }
    

    function priceInCart(){
        let totalPrice = 0
        cart.forEach( (itemInCart) => (totalPrice = totalPrice + (itemInCart.price*itemInCart.count)));
        return totalPrice
    }
    function clearCart(){
        setCart([])
    }
    function removeItem(itemId){
        setCart(cart.filter(product => product.id !== itemId))
    }
    const value = {
        addToCart,
        itemsInCart,
        cart,
        priceInCart,
        clearCart,
        removeItem,
        
    }
    
    return(
        <cartContext.Provider value = {value}>
            {props.children}
        </cartContext.Provider>
    )
}
