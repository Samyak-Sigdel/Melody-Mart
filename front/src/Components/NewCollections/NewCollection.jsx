import React, { useEffect, useState } from 'react';
import './Newcollection.css';
import { Items } from '../Items/Items';

export const NewCollections = () => {
  const [newCollections, setNewCollections] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/product/newcollection')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => setNewCollections(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="new-collection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollections.map((product) => (
          <Items
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            priceperday={product.priceperday}
          />
        ))}
      </div>
    </div>
  );
};
