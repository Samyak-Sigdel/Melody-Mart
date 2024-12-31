import React, { useContext } from 'react';
import './Pricing.css';
import { Shopcontext } from '../../Context/Shopcontext';
import remove_icon from '../../Assets/cross.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(Shopcontext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product &&
        all_product.map((product) => {
          const price = parseFloat(product.new_price) || 0; // Ensure price is a valid number
          const quantity = cartItems[product._id] || 0; // Ensure quantity is valid

          if (quantity > 0) {
            return (
              <div key={product._id}>
                <div className="cartitems-format cartitems-format-main">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="carticon-product-icon"
                  />
                  <p>{product.name}</p>
                  <p>₹{price.toFixed(2)}</p>
                  <button className="cartitems-quantity">
                    {quantity}
                  </button>
                  <p>₹{(price * quantity).toFixed(2)}</p>
                  <img
                    className="cartitems-remove-icon"
                    src={remove_icon}
                    alt="Remove"
                    onClick={() => removeFromCart(product._id)}
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h3>Cart Totals</h3>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()?.toFixed(2) || 0}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()?.toFixed(2) || 0}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECK OUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
