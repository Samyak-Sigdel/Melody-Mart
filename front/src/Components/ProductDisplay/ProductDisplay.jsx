import React, { useState } from 'react';
import './ProductDisplay.css'

const ProductDisplay = ({ product }) => {
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [selectedOption, setSelectedOption] = useState(""); // Tracks selected pricing option
  
  // Calculate total price based on selected option and quantity
  const getPrice = () => {
    if (selectedOption === "weekly") return product.weekly * quantity;
    if (selectedOption === "halfMonth") return product.half_month * quantity;
    if (selectedOption === "monthly") return product.monthly * quantity;
    return 0;
  };

  // Handle changes in the dropdown
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Handle changes in quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>




      {/* Quantity Selector */}
      <div className="quantity-selector">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      {/* Option Dropdown */}
      <select value={selectedOption} onChange={handleOptionChange} className="option-dropdown">
        <option value="" disabled>Choose an option</option>
        <option value="weekly">Weekly - ₹{product.weekly}</option>
        <option value="halfMonth">Half Month - ₹{product.half_month}</option>
        <option value="monthly">Monthly - ₹{product.monthly}</option>
      </select>

      <div className="price">
      {/* Display total price */}
      <p>Total Price: ₹{getPrice()}</p>
      </div>
      {/* Add to Cart Button */}
      <button className="add-to-cart" disabled={!selectedOption}>Add to Cart</button>
    </div>
  );
};

export default ProductDisplay;
