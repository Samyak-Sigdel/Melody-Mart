import React from 'react'

import HeroBanner from '../Components/HeroBanner/HeroBanner'
import Contact from '../Components/Contact/Contact'
import { Newsletter } from '../Components/Newsletter/Newsletter'
import Footer from '../Components/Footer/Footer'
import { ListCategory } from '../Components/ListCategory/ListCategory'
import { Navbar } from '../Components/Navbar/Navbar'



export const Main = () => {
  return (
    <div>
      <Navbar />
        <HeroBanner />
        <ListCategory/>
        <Contact />
        <Newsletter/>
        <Footer />
   

        
        
        
        
    </div>
  )
}
