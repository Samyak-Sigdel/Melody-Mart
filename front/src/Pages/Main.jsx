import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Letterboard } from '../Components/LetterBoard/Letterboard'
import { Contact } from '../Components/Contact/Contact'


export const Main = () => {
  return (
    <div>
        <Navbar />
        {/* <Letterboard /> */}
        <Contact />
        
    </div>
  )
}
