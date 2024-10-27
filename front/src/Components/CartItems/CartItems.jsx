import React, { useContext } from 'react'
import './Pricing.css'
import { Shopcontext } from '../../Context/Shopcontext';
import remove_icon from '../../Assets/cross.png'


 const CartItems = () => {

    const{getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(Shopcontext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
     
        <hr />

        {all_product.map((i)=>{
            if(cartItems[i.id]>0)
            {
                return <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={i.image} alt="" className='carticon-product-icon' />
                                <p>{i.name}</p>
                                <p>${i.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[i.id]}</button>
                                <p>${i.new_price*cartItems[i.id]}</p>
                                <img  className='cartitems-remove-icon'src={remove_icon} onClick={()=>{removeFromCart(i.id)}} alt="" />
                            </div>
                            <hr />
                        </div>  
            }
            return null;
            
        })}

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h3>Cart totals </h3>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>₹{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>₹{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECK OUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code ,Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promocode' />
                    <button>Sumbit</button>
                    
                </div>
            </div>

        </div>
        </div>
  )
};


export default CartItems;