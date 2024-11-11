import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cros.jpg';

export const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch products from the API
  const fetchInfo = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/admin/allproduct');
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setAllProducts(Array.isArray(data.products) ? data.products : []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Could not load products");
      setAllProducts([]);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);


  
// Function to remove a product by its unique id
const removeProduct = async (id) => {
  try {
    const res = await fetch('http://localhost:4000/api/admin/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id })  // Send "id" as the key
    });

    if (!res.ok) throw new Error("Failed to remove product");

    const result = await res.json();
    console.log("Product removed:", result);

    await fetchInfo();
  } catch (error) {
    console.error("Error removing product:", error);
    setError("Could not remove product. Please try again.");
  }
};

  

  return (
    <div className="list-product">
      <h1>All Products List</h1>

      {/* Display error if any */}
      {error && <p className="error-message">{error}</p>}

      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Weekly Price</p>
        <p>Half-Month Price</p>
        <p>Monthly Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts">
        <hr />
        {allproducts.length > 0 ? (
          allproducts.map((product) => (
            <React.Fragment key={product._id}>
              <div className="listproduct-format-main listproduct-format">
                <img src={product.image} alt={product.name} className="listproduct-product-icon" />
                <p>{product.name}</p>

                {/* Display each price based on its duration */}
                <p>
                  ${product.priceOptions.find(option => option.duration === "Weekly")?.price || 'N/A'}
                </p>
                <p>
                  ${product.priceOptions.find(option => option.duration === "Half-monthly")?.price || 'N/A'}
                </p>
                <p>
                  ${product.priceOptions.find(option => option.duration === "monthly")?.price || 'N/A'}
                </p>

                <p>{product.category}</p>
                <img
                  src={cross_icon}
                  className="listproduct-remove-icon"
                  onClick={() => removeProduct(product._id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </React.Fragment>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
