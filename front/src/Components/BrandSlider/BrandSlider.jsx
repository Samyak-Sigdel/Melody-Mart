import React, { useState } from "react";

import './BrandSlider.css'

import takamine from '../../Assets/takamine.png';
import jackson from '../../Assets/jackson.png';
import mapex from '../../Assets/ibanez.png';
import prs from '../../Assets/prs.png';
import roland from '../../Assets/fender.png';
import korg from '../../Assets/korg.png';
import gibson from '../../Assets/gibson.png'
import tama from '../../Assets/tama.png'

// Sample brand logos
const brands = [
  { id: 1, name: "Takamine", logo: takamine },
  { id: 2, name: "Roland", logo: jackson },
  { id: 3, name: "PRS Guitars", logo: korg},
  { id: 4, name: "Pearl", logo: roland},
  { id: 5, name: "Martin & Co.", logo: prs },
  { id: 6, name: "Mapex", logo: mapex },
  { id: 7, name: "gibson", logo: gibson },
  { id: 8, name: "tama", logo: tama }
];

const BrandSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const brandsToShow = 8;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= brands.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? brands.length - 1 : prevIndex - 1
    );
  };

  const visibleBrands = [];
  for (let i = 0; i < brandsToShow; i++) {
    const brandIndex = (currentIndex + i) % brands.length;  // Loops the index
    visibleBrands.push(brands[brandIndex]);
  }

  return (
    <div className="brand-slider-container">
      <h2>Brands We House</h2>
      <div className="brand-slider">
        <button className="prev-button" onClick={prevSlide}>
          &#8249;
        </button>
        <div className="brand-slider-wrapper">
          {brands.slice(currentIndex, currentIndex + brandsToShow).map((brand) => (
            <div key={brand.id} className="brand-slide">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
            </div>
          ))}
        </div>
        <button className="next-button" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default BrandSlider;
