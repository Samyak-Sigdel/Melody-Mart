import React from 'react'


import { Newsletter } from '../Components/Newsletter/Newsletter'
import Footer from '../Components/Footer/Footer'
import { ListCategory } from '../Components/ListCategory/ListCategory'
import { Loginregnav } from '../Components/Loginregnav/Loginregnav'
import ImageCarousel from '../Components/ImageCarousel/ImageCarousel'
import BrandSlider from '../Components/BrandSlider/BrandSlider'




export const Main = () => {
  return (
    <div>
        <Loginregnav />
        <ImageCarousel />
      
        <ListCategory/>

        <BrandSlider/>

      
        <Newsletter/>
        <Footer />
   

        
        
        
        
    </div>
  )
}
