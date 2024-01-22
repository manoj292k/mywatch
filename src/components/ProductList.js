import React from 'react';
import productsData from '../data/productsData'; // Add a file with your product data

function ProductList({ addToCart }) {
  const handleAddToCart = (product, event) => {
    addToCart(product);

    // Update the clicked button's innerHTML with the shopping bag icon
    const button = event.currentTarget;
    button.innerHTML = '<box-icon name="shopping-bag" type="solid" color="#ffffff" ></box-icon>';
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
            <button className='addcart' onClick={(event) => handleAddToCart(product, event)}>
              <box-icon name='cart-add' color='#ffffff'></box-icon>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
