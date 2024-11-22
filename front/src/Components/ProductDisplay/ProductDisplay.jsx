import React, { useState } from 'react';
import './ProductDisplay.css';
import { useNavigate } from 'react-router-dom';

const ProductDisplay = ({ product }) => {
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [selectedOption, setSelectedOption] = useState(""); // Tracks selected pricing option
  const navigate = useNavigate();

  // Calculate total price based on selected option and quantity
  const getPrice = () => {
    if (!product) return 0; // Fallback in case product is undefined
    if (selectedOption === "weekly") return product.weekly * quantity;
    if (selectedOption === "halfMonth") return product.half_month * quantity;
    if (selectedOption === "monthly") return product.monthly * quantity;
    return 0;
  };

  const handleAddToCart = () => {
    if (product && selectedOption) {
      // Simulate adding to cart logic
      console.log("Added to cart:", {
        productId: product.id,
        quantity,
        selectedOption,
      });
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

  if (!product) {
    return <p>Product details are unavailable. Please try again later.</p>;
  }

  return (
    <div className="product-container">
      {/* Product Image */}
      <div className="section-one">
        <img
          src={product.image || 'default-placeholder.png'}
          alt={product.name || 'Product'}
          className="product-image"
        />
      </div>

      {/* Product Details */}
      <h1>{product.name || 'Unnamed Product'}</h1>
      <p>Category: {product.category || 'General'}</p>

      {/* Quantity and Pricing Options */}
      <div className="section-two">
        {/* Quantity Selector */}
        <div className="quantity-selector">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>

        {/* Pricing Options Dropdown */}
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="option-dropdown"
        >
          <option value="" disabled>
            Choose an option
          </option>
          <option value="weekly">Weekly - ₹{product.weekly || 'N/A'}</option>
          <option value="halfMonth">Half Month - ₹{product.half_month || 'N/A'}</option>
          <option value="monthly">Monthly - ₹{product.monthly || 'N/A'}</option>
        </select>

        {/* Add to Cart Button */}
        <button
          className="add-to-cart"
          disabled={!selectedOption}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>

      {/* Total Price */}
      <div className="price">
        <p>Total Price: ₹{getPrice()}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
