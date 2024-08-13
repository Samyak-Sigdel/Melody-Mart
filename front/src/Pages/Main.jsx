import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import HeroBanner from '../Components/HeroBanner/HeroBanner'
import Contact from '../Components/Contact/Contact'
import { Newsletter } from '../Components/Newsletter/Newsletter'
import Footer from '../Components/Footer/Footer'



export const Main = () => {
  return (
    <div>

        <HeroBanner />
        <Contact />
        <Newsletter/>
        <Footer />
   

        
        
        
        
    </div>
  )
}
