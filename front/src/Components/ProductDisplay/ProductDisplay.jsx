import React, { useContext, useEffect, useState } from 'react';
import './ProductDisplay.css';
import { Shopcontext } from '../../Context/Shopcontext';
import { useParams } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

export default function ProductDisplay(props) {
 
    const { product } = props // Assuming products are stored in context
  


    return (
        <div className="product-display-container">
        <div className="product-image">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
            <h1>{product.name}</h1>
            <div className="product-description">
                {product.description}
            </div>
            <div className="product-price">
                ${product.price}
            </div>
            <div className="product-rating">
                <CiStar /> {product.rating || 'No rating available'}
            </div>
            <div className="product-actions">
             
                <button>Buy Now</button>
            </div>
        </div>
    </div>
    );
}
