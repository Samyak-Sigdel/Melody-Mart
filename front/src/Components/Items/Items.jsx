import React from 'react'
import { Link } from 'react-router-dom'
import './Items.css';

export const Items = (props) => {
  return (
    <div className="item">
      <div className="item_left">
        <Link to={`/product/${props._id}`}>
          <img onClick={() => window.scrollTo(0,0)} src={props.image} alt="" />
        </Link>
      </div>

      <div className="item_left">
        <p>{props.name}</p>
        <div className="item-prices">
          {props.priceOptions && props.priceOptions.length > 0 ? (
            <>
              <p>Starting from ₹{Math.min(...props.priceOptions.map(option => option.price))}</p>
            </>
          ) : (
            <p>{props.priceperday}</p>
          )}
        </div>
        <div className="rent">
          <Link to={`/product/${props._id}`}>
            <button onClick={() => window.scrollTo(0,0)}>View More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}