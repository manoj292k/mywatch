import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProductList from './components/ProductList';
import Cart from './components/Cart';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const clearCart = (itemId) => {
    // Implement logic to remove item from the cart
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <Router>
      <>
        <h1 className='shopname'>Timezone</h1>
        <nav>
          <ul className='ultag'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Brands</Link>
            </li>
            <li>
              <Link to="/contact">Smartwatch</Link>
            </li>
            <li>
              <Link to="/products">Buy online</Link>
            </li>
            <li>
              <Link to="/cart">
                <box-icon name='cart-add' color='brown'></box-icon>
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} clearCart={clearCart} />} />
        </Routes>
   
        <div className='Bottom'>
          <div className='BottomBox'>
              <h3>Timezone.com</h3>
              <h6>Who we are</h6>
              <h6>Join our team</h6>
              <h6>Terms and condition </h6>
              <h6>We respect your privacy</h6>
              <h6>Returns and refunds</h6>
              <h6>Promotion and terms & condition</h6>
          </div>
          <div className='BottomBox'>
              <h3>Help</h3>
              <h6>Fequently asked question</h6>
              <h6>Return</h6>
              <h6>Track your order </h6>
              <h6>Payment</h6>
              <h6>Customer</h6>
              <h6>cancellation</h6>
          </div>
          <div className='BottomBox'>
              <h3>Shop by</h3>
              <h6>Home</h6>
              <h6>Men</h6>
              <h6>women</h6>
              <h6>Kids</h6>
              <h6>Cosmetics</h6>
              <h6>others</h6>
          </div>
          <div className='BottomBox'>
              <h3>Follow us</h3>
              <h6>Instagram</h6>
              <h6>Twiter X</h6>
              <h6>Whatsapp</h6>
              <h6>Facebook</h6>
              <h6>Pinterest</h6>
              <h6>others</h6>
          </div>
        </div>
      </>
      </Router>
    
  );
}

export default App;
