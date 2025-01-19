import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/WelcomePage.css';

const WelcomePage = () => {
  const [cart, setCart] = useState({});

  const foodItems = [
    { id: 1, name: 'Pizza', price: 250 },
    { id: 2, name: 'Burger', price: 150 },
    { id: 3, name: 'Biryani', price: 200 },
    { id: 4, name: 'Pasta', price: 180 },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.id]: prevCart[item.id]
        ? { ...item, count: prevCart[item.id].count + 1 }
        : { ...item, count: 1 },
    }));
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      if (!prevCart[item.id]) return prevCart; 
      const updatedCount = prevCart[item.id].count - 1;
      if (updatedCount === 0) {
        const { [item.id]: _, ...rest } = prevCart; 
        return rest;
      }
      return {
        ...prevCart,
        [item.id]: { ...item, count: updatedCount },
      };
    });
  };

  return (
    <div>
      <Header />
      <div className="welcome-container">
        <h1>Welcome to Swiggy!</h1>
        <p>Browse our exclusive menu and add items to your cart.</p>
        <div className="food-list">
          {foodItems.map((item) => (
            <div key={item.id} className="food-card">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              {cart[item.id] ? (
                <div className="cart-controls">
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <span>{cart[item.id].count}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              ) : (
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              )}
            </div>
          ))}
        </div>
        <div className="cart-section">
          <h2>Cart</h2>
          {Object.keys(cart).length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {Object.values(cart).map((item) => (
                <li key={item.id}>
                  {item.name} x {item.count} - ₹{item.price * item.count}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;
