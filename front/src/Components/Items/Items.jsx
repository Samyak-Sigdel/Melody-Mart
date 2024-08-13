import React from 'react'
import { Link } from 'react-router-dom'

export const Items = (props) => {
  return (
    <div className="item">
    <Link to={`/product/${props.id}`} > <img onClick={window.scrollTo(0,0)}src={props.image} alt="" /></Link>

     <p>
         {props.name}
     </p>
     <div className="item-prices">
         <div className="item-price-new">
             ${props.priceperday}

         </div>

     </div>


 </div>
  )
}
