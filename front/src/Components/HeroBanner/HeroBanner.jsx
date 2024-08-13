import React from 'react';
import './HeroBanner.css'

function HeroBanner() {
  return (
    <div class="hero-banner">
        <img src="https://www.shutterstock.com/image-photo/guitarist-male-hands-playing-guitar-600nw-2077596298.jpg" alt="Hero Banner" class="banner-image"/>
        <div class="hero-text">
            <h1>Find Your Perfect Instrument</h1>
            <p>Rent or buy the best musical instruments from us!</p>
            <a href="#sale" class="btn">Shop Now</a>
        </div>
    </div>
  );
}

export default HeroBanner;
