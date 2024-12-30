import React, { useState, useContext } from 'react';
import './ProductDisplay.css';
import { Shopcontext } from '../../Context/Shopcontext';


const ProductDisplay = ({ product }) => {  // Changed from (props) to ({ product })
  const { addToCart } = useContext(Shopcontext);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");

  
  if (!product) {
    return <p>Product details are unavailable. Please try again later.</p>;
  }

  const getPrice = () => {
    if (selectedOption === "Weekly") return product.weekly * quantity;
    if (selectedOption === "HalfMonthly") return product.half_month * quantity;
    if (selectedOption === "Monthly") return product.monthly * quantity;
    return 0;
  };

  const handleOptionChange = (e) => setSelectedOption(e.target.value);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="product-container">
      <div className="section-one">
        <img
          src={product.image || 'default-placeholder.png'}
          alt={product.name || 'Product'}
          className="product-image"
        />
      </div>
      <h1>{product.name || 'Unnamed Product'}</h1>
      <p>Category: {product.category || 'General'}</p>
      <div className="section-two">
        <div className="quantity-selector">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="option-dropdown"
        >
          <option value="" disabled>Choose an option</option>
          <option value="Weekly">Weekly - ₹{product.weekly || 'N/A'}</option>
          <option value="HalfMonthly">Half Month - ₹{product.half_month || 'N/A'}</option>
          <option value="Monthly">Monthly - ₹{product.monthly || 'N/A'}</option>
        </select>
        <button
          className="add-to-cart"
          disabled={!selectedOption}
          onClick={() => addToCart(product.id)}
        >
          Add to Cart
        </button>
      </div>
      <div className="price">
        <p>Total Price: ₹{getPrice()}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;