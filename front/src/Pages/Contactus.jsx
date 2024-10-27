import React from 'react'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

import { Loginregnav } from '../Components/Loginregnav/Loginregnav'
import { Newsletter } from '../Components/Newsletter/Newsletter'

export const Contactus = () => {
  return (
    <div>
    <Loginregnav />
       <Contact />
       <Newsletter />
       <Footer />

    </div>
  )
}
