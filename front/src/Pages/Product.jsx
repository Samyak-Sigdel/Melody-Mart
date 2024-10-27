import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Shopcontext } from '../Context/Shopcontext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

import { Loginregnav } from '../Components/Loginregnav/Loginregnav';
import BrandSlider from '../Components/BrandSlider/BrandSlider';

import Footer from '../Components/Footer/Footer'
import { ListCategory } from '../Components/ListCategory/ListCategory';

export const Product = () => {
  const {all_product}=useContext(Shopcontext)
  const {productId}= useParams();
  const product=all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Loginregnav />
      <ProductDisplay product={product}/>


      <ListCategory />


      <BrandSlider />
      
      <Footer />

    </div>
  )
}
