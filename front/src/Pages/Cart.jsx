import React from 'react';


import { Loginregnav } from '../Components/Loginregnav/Loginregnav';

import BrandSlider from '../Components/BrandSlider/BrandSlider';
import Footer from '../Components/Footer/Footer';
import Pricing from '../Components/CartItems/CartItems';

export const Cart = () => {
  

  return (
    <div>
      <Loginregnav />
      <Pricing />


      <BrandSlider />
      <Footer />
    </div>
  );
};
