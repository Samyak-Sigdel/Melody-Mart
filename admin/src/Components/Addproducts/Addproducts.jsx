// components/Addproducts.js

import React, { useState } from 'react';
import './Addproduct.css';
import upload_area from '../../assets/upload.jpg';

export const Addproducts = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'guitar',
    priceOptions: { Weekly: '', HalfMonthly: '', Monthly: '' },
    imageFile: null,
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      priceOptions: { ...prev.priceOptions, [name]: value },
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, category, priceOptions, image, description } = formData;

    // Prepare the form data to send to the backend
    const productData = new FormData();
    productData.append('name', name);
    productData.append('category', category);
    productData.append('description', description);
    productData.append('imageFile', image);


    
 

    // Append each price option
    productData.append(
      'priceOptions',
      JSON.stringify([
        { duration: 'Weekly', price: priceOptions.Weekly },
        { duration: 'Half-monthly', price: priceOptions.HalfMonthly },
        { duration: 'Monthly', price: priceOptions.Monthly },
      ])
    );

    try {
      const response = await fetch('http://localhost:4000/api/admin/addProduct', {
        method: 'POST',
        body: productData,
      });
      const result = await response.json();
      if (response.ok) {
        alert('Product added successfully!');
        // Clear form data if necessary
        setFormData({
          name: '',
          category: 'guitar',
          priceOptions: { Weekly: '', HalfMonthly: '', Monthly: '' },
          image: null,
          description: '',
        });
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="add-product">
      <form onSubmit={handleSubmit}>
        <div className="addproduct-itemfield">
          <p>Product Title</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Type here"
            required
          />
        </div>

        <div className="addproduct-itemfield">
          <p>Instrument Category</p>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="add-product-selector"
          >
            <option value="guitar">Guitar</option>
            <option value="piano">Piano</option>
            <option value="violin">Violin</option>
            <option value="drums">Drums</option>
            <option value="electricguitar">Electric Guitar</option>
            <option value="flute">Flute</option>
          </select>
        </div>

        <div className="addproduct-itemfield">
          <div className="priceoption">
            <p>Price Options</p>
            <div className="duration">
              <p>Weekly</p>
              <input
                type="number"
                name="Weekly"
                value={formData.priceOptions.Weekly}
                onChange={handlePriceChange}
                placeholder="Type here"
                required
              />
              <p>Half-Monthly</p>
              <input
                type="number"
                name="HalfMonthly"
                value={formData.priceOptions.HalfMonthly}
                onChange={handlePriceChange}
                placeholder="Type here"
                required
              />
              <p>Monthly</p>
              <input
                type="number"
                name="Monthly"
                value={formData.priceOptions.Monthly}
                onChange={handlePriceChange}
                placeholder="Type here"
                required
              />
            </div>
          </div>
        </div>

        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img
              src={formData.image ? URL.createObjectURL(formData.image) : upload_area}
              className="addproduct-thumbnail-img"
              alt="Thumbnail"
            />
          </label>
          <input
            onChange={handleFileChange}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>

        <div className="addproduct-itemfield">
          <p>Description</p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Type here"
            rows="5"
            cols="50"
            required
          />
        </div>

        <button type="submit" className="addproduct-btn">
          ADD
        </button>
      </form>
    </div>
  );
};
