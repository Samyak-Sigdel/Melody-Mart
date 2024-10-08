import React from 'react';
import './HeroBanner.css'
import banner from '../../Assets/homebanner.jpg'; // Adjust the path to the asset folder


function HeroBanner() {
  return (
    <div class="hero-banner">
        <img src={banner} alt="Hero Banner" class="banner-image"/>
        <div class="hero-text">
            <h1>Musical instrument Rental</h1>
            <p>Rent you Instruments . Rent your melody</p>
            <a href="/category" class="btn">Shop Now</a>
        </div>
    </div>
  );
}

export default HeroBanner;
