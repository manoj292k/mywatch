import React from 'react';

function Cart({ cartItems, clearCart }) {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  if (cartItems.length === 0) {
    return <h3>No products found in the cart. <br /> Shop now</h3>;
  }

  return (
    <div>
      <h2>Cart</h2>
      <div className='Box-pro'>
        {cartItems.map((item) => (
          <div className='product' key={item.id}>
            <div>
              <img className='cart-img' src={item.image} alt={item.name} />
            </div>
            <p>{item.brand}</p>
            <p>Name: {item.name}</p>
            <p>Price: ₹ {item.price}</p>
            <button onClick={() => clearCart(item.id)}><box-icon name='x' color='#ffffff' ></box-icon></button>
          </div>
        ))}
      </div>
      <h2>Total Amount: ₹{totalAmount}/-</h2>
    </div>
  );
}

export default Cart;
