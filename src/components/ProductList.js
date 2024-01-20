import React from 'react';
import productsData from '../data/productsData'; // Add a file with your product data

function ProductList({ addToCart }) {
  const handleAddToCart = (product, event) => {
    addToCart(product);
    window.alert('Your product has been added to the cart.');
    
    document.getElementsByTagName("button").innerHtml = "Added";

  };


  return (
    <div>
      <h2>Product List</h2>
      <div className='Box-pro'>
        {productsData.map((product) => (
          <div className='product' key={product.id}>
            <div>
              <img className='pro-img' src={product.image} alt={product.name} />
            </div>
            <h5>{product.brand}</h5>
            <h6>{product.name} <span className='gender'>{product.gender}</span></h6>
            <p>₹{product.price}</p>
            <button onClick={(event) => handleAddToCart(product, event)}>Add to Cart</button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
