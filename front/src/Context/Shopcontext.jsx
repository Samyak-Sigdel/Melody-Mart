import React, { createContext, useEffect, useState } from 'react';

export const Shopcontext = createContext(null);

const ShopcontextProvider = (props) => {
    const [all_product, setAll_product] = useState([]); // List of all products
    const [cartItems, setCartItems] = useState({}); // Items in the cart

    // Fetch product and cart data
    useEffect(() => {
        // Fetch all products
        fetch('http://localhost:4000/api/admin/allproduct')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched products:', data);
                setAll_product(Array.isArray(data) ? data : data.products || []);
            })
            .catch((err) => {
                console.error('Error fetching products:', err);
                setAll_product([]); // Fallback to empty array on error
            });

        // Fetch user cart if token is available
        if (localStorage.getItem('token')) {
            fetch('http://localhost:4000/api/cart/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: '',
            })
                .then((response) => response.json())
                .then((data) => setCartItems(data))
                .catch((err) => console.error('Error fetching cart:', err));
        }
    }, []);

    // Add an item to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
        if (localStorage.getItem('token')) {
            fetch('http://localhost:4000/api/cart/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log('Added to cart:', data))
                .catch((err) => console.error('Error adding to cart:', err));
        }
    };

    // Remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0), // Prevent negative values
        }));
        if (localStorage.getItem('token')) {
            fetch('http://localhost:4000/api/cart/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log('Removed from cart:', data))
                .catch((err) => console.error('Error removing from cart:', err));
        }
    };

    // Calculate the total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_product.find(
                    (product) => product.id === Number(item)
                );
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    // Calculate the total cart item count
    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            totalItems += cartItems[item] || 0;
        }
        return totalItems;
    };

    // Context values
    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default ShopcontextProvider;
