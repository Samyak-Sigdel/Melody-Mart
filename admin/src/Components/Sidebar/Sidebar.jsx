import React from 'react'
import './Sidebar.css'
import {Link, NavLink} from 'react-router-dom'

import add_product_icon from '../../assets/addproducticon.jpg'
import list_product_icon from  '../../assets/listproduct.jpg'




export const Sidebar = () => {
  return (

    
    <div className='sidebar'>

      <Link to= {'/api/admin/addproduct'} style={{textDecoration:"none"}} >
        <div className="sidebar_item">
            <img src={add_product_icon} alt="" />
            <p>Add product</p>
        </div>
        </Link>
      
        <Link to= {'/listproduct'} style={{textDecoration:"none"}} >
        <div className="sidebar_item">
            <img src={list_product_icon} alt="" />
            <p>Product list</p>
        </div>
        </Link>

       
       
      



    </div>
  )
}
