import React from 'react'
import { Instruments } from '../Components/Instruments/Instruments'


import Footer from '../Components/Footer/Footer'
import { Loginregnav } from '../Components/Loginregnav/Loginregnav'

export const Category = () => {
  return (
    <div>
     <Loginregnav />
      <Instruments />
      <Footer />


    </div>
  )
}
