import React, { useContext } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Items } from '../Components/Items/Items';
import './Css/Subcategory.css'

import { Shopcontext } from '../Context/Shopcontext'; 

export const Subcategory = (props) => {
    const {all_product} = useContext(Shopcontext) || {};
 
  return (
    <div className='shop-category'>
    
   

    <div className="shopcategory-indexSort">
      <p>
        <span> Showing 1-12  </span>out of 36 products
      </p>

      <div className="shopcategory-sort">
        sort by <RiArrowDropDownLine />
      </div>
    </div>

    <div className="shopcategory-products">
      {all_product && all_product.map((item,i)=>{
        if(props.category===item.category){
          
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
          return null
        }
      })}
    </div>

    <div className="shopcategory-loadmore">
      Explore More
    </div>


  </div>
  )
}
