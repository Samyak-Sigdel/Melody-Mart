import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ProductDisplay.css';
import { Shopcontext } from '../../Context/Shopcontext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(Shopcontext);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  if (!product) {
    return <p>Product details are unavailable. Please try again later.</p>;
  }

  const handleOptionChange = (e) => setSelectedOption(e.target.value);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const getPrice = () => {
    if (!product || !selectedOption) return 0; // Fallback for missing data
    const selectedPriceOption = product.priceOptions.find(
      (option) => option.duration === selectedOption
    );
    return selectedPriceOption ? selectedPriceOption.price * quantity : 0;
  };

  const handleAddToCart = () => {
    addToCart(product._id); // Add the product to the cart
    navigate('/cart'); // Navigate to the cart page
  };

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
          <option value="" disabled>
            Choose an option
          </option>
          {product.priceOptions.map((option) => (
            <option key={option._id} value={option.duration}>
              {option.duration} - ₹{option.price}
            </option>
          ))}
        </select>
        <button
          className="add-to-cart"
          disabled={!selectedOption}
          onClick={handleAddToCart}
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
