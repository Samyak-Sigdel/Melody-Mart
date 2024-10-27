import React, { createContext, useState } from 'react';
import { all_product } from '../Assets/all_product';

export const Shopcontext = createContext(null);

const ShopcontextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    // Function to remove an item from the cart
    const removeFromCart = (id) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };
            if (updatedItems[id] > 1) {
                updatedItems[id] -= 1;
            } else {
                delete updatedItems[id];
            }
            return updatedItems;
        });
    };

    // Function to get total cart amount
    const getTotalCartAmount = () => {
        return all_product.reduce((total, item) => {
            const quantity = cartItems[item.id] || 0;
            return total + item.new_price * quantity;
        }, 0);
    };

    const contextValue = {
        all_product,
        cartItems,
        removeFromCart,
        getTotalCartAmount,
    };

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default ShopcontextProvider;
