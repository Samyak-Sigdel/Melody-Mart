import React from 'react'
import './Footer.css'
import { BsFillSpeakerFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


 const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
        <BsFillSpeakerFill size={50}/>
            <p>Melody Mart</p>
        </div>

     <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
     </ul>

<div className="footer-social-icon">
         <div className="footer-icons-container">
            <div className="ok">
            <FaInstagram  size={30}/>
            <FaPinterest size={30}/>
            <FaWhatsapp size={30}/>
            </div>
            {/* <img src={instagram} alt="" />
            <img src={pininterest} alt="" />
             <img src={whatsapp} alt="" /> */}
         </div>
     </div>


     <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 -All Right Reserved</p>
     </div>




    </div>
  )
}

export default Footer;
