import React, { useState } from 'react'
import './Addproduct.css'
import upload_area from '../../assets/upload.jpg'

export const Addproducts = () => {

  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product title</p>
            <input  type="text" name='name' placeholder='Type here' />
        </div> 

        <div className="addproduct_price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input  type="text" name="old_price" placeholder='Type here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input name="new_price" placeholder='Type here' />
            </div>

            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select  name="category" className='add-product-selector'>
                    <option value="women">Women</option>
                    <option value="mens">Mens</option>
                    <option value="shoes">Shoes</option>
                </select>
                <div className="addproduct-itemfield">
                    <label htmlFor="file-input">
                        {/* <img src={image?URL.createObjectURL(image):upload_area}  className ='addproduct-thumnail-img' /> */}
                    </label>
                    <input  type="file" name='image' id='file-input' hidden/>
                </div>
                <button className='addproduct-btn'>ADD</button>
            </div>
    </div>
  )
}

