import React, { useState } from 'react';
import './ProductDisplay.css'
import { useNavigate } from 'react-router-dom';

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


  const navigate = useNavigate();

  const handleAddToCart = () => {
      if (selectedOption) {
          navigate('/cart');
      }
  };


  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

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

      <div className="sectionone">
      <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>


    <div className="sectiontwo">


      <div className="quantity-selector">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
  
      <select value={selectedOption} onChange={handleOptionChange} className="option-dropdown">
        <option value="" disabled>Choose an option</option>
        <option value="weekly">Weekly - ₹{product.weekly}</option>
        <option value="halfMonth">Half Month - ₹{product.half_month}</option>
        <option value="monthly">Monthly - ₹{product.monthly}</option>
      </select>
    

      <button className="add-to-cart" disabled={!selectedOption}  onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <div className="price">
      <p>Total Price: ₹{getPrice()}</p>
      </div>

    </div>
  );
};

export default ProductDisplay;
