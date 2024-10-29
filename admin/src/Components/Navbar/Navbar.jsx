import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav2.jpg'
import navProfile from  '../../assets/nav1.jpg'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo}  alt="" className="nav_logo" />
       <img src={navProfile} alt="" className="nav-profile" />

        
       </div>
  )
}
