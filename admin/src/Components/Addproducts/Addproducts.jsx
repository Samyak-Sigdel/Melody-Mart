import React, { useState } from 'react';
import './Addproduct.css';
import upload_area from '../../assets/upload.jpg';

export const Addproducts = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    id: '', // Initialize id field
    name: '',
    category: '',
    description: '',
    priceOptions: {
      Weekly: '',
      HalfMonthly: '',
      Monthly: ''
    }
  });

  // Handle text input changes for name, id, category, and description
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  // Handle changes for price options (Weekly, HalfMonthly, Monthly)
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      priceOptions: {
        ...prevDetails.priceOptions,
        [name]: value
      }
    }));
  };

  // Handle image file change
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('id', productDetails.id || '');
    formData.append('name', productDetails.name || '');
    formData.append('category', productDetails.category || '');
    formData.append('description', productDetails.description || '');
  
    if (image) {
      formData.append('imageFile', image);
    }
  
    const priceOptions = [
      { duration: 'Weekly', price: productDetails.priceOptions.Weekly || '' },
      { duration: 'Half-monthly', price: productDetails.priceOptions.HalfMonthly || '' },
      { duration: 'monthly', price: productDetails.priceOptions.Monthly || '' }
    ];
  
    formData.append('priceOptions', JSON.stringify(priceOptions));
  
    console.log('Form Data:', formData);
  
    try {
      const response = await fetch('http://localhost:4000/api/admin/addProduct', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
      if (response.ok) {
        console.log('Product added successfully:', result);
        alert("Product added");
      } else {
        console.error('Error adding product:', result);
        alert("Product not added");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="add-product">
      <form onSubmit={handleSubmit}>
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <input
            type="text"
            name="name"
            value={productDetails.name}
            onChange={handleInputChange}
            placeholder="Type here"
            required
          />
        </div>

        <div className="addproduct-itemfield">
          <p>ID</p>
          <input
            type="text"
            name="id" // Corrected to match productDetails property
            value={productDetails.id}
            onChange={handleInputChange}
            placeholder="Type here"
            required
          />
        </div>

        <div className="addproduct-itemfield">
          <p>Instrument Category</p>
          <select
            name="category"
            value={productDetails.category}
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
          required
        </div>

        <div className="addproduct-itemfield">
          <div className="priceoption">
            <p>Price Options</p>
            <div className="duration">
              <p>Weekly</p>
              <input
                type="number"
                name="Weekly"
                value={productDetails.priceOptions.Weekly}
                onChange={handlePriceChange}
                placeholder="Type here"
                required
              />
              <p>Half-Monthly</p>
              <input
                type="number"
                name="HalfMonthly"
                value={productDetails.priceOptions.HalfMonthly}
                onChange={handlePriceChange}
                placeholder="Type here"
                required
              />
              <p>Monthly</p>
              <input
                type="number"
                name="Monthly"
                value={productDetails.priceOptions.Monthly}
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
              src={image ? URL.createObjectURL(image) : upload_area}
              className="addproduct-thumbnail-img"
              alt="Thumbnail"
            />
          </label>
          <input
            onChange={handleImageChange}
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
            value={productDetails.description}
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
