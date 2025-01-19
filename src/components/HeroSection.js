import React, { useState, useEffect } from 'react';
import '../css/HeroSection.css';
import img3 from "../asserts/1280-Indian-food.jpg";

const HeroSection = () => {
  const [location, setLocation] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');
  const [typedText, setTypedText] = useState('');
  const fullText = "ORDER FOOD & DISCOVER BEST RESTAURANTS. SWIGGY IT!";

  const mockApiData = {
    chennai: [
      { name: 'Anjappar Chettinad', rating: 4.5 },
      { name: 'Murugan Idli Shop', rating: 4.3 },
      { name: 'Sangeetha Veg Restaurant', rating: 4.2 },
      { name: 'The Marina', rating: 4.4 },
      { name: 'Dindigul Thalappakatti', rating: 4.6 },
      { name: 'Junior Kuppanna', rating: 4.1 },
      { name: 'Kefi', rating: 4.7 },
      { name: 'Rayar Mess', rating: 4.8 },
      { name: 'Namma Veedu Vasanta Bhavan', rating: 4.0 },
    ],
    salem: [
      { name: 'Sri Annapoorna', rating: 4.4 },
      { name: 'Hotel Saravana Bhavan', rating: 4.3 },
      { name: 'The Cascade', rating: 4.2 },
      { name: 'Junior Kuppanna', rating: 4.1 },
      { name: 'Silver Spoon', rating: 4.5 },
      { name: 'Sree Krishnas', rating: 4.6 },
      { name: 'The White House', rating: 4.2 },
      { name: 'Selvi Mess', rating: 4.3 },
      { name: 'Shri Krishna Inn', rating: 4.0 },
    ],
    calicut: [
      { name: 'Paragon Restaurant', rating: 4.7 },
      { name: 'Salkara Hotel', rating: 4.5 },
      { name: 'Rahmath Hotel', rating: 4.6 },
      { name: 'Zains Hotel', rating: 4.3 },
      { name: 'Topform Restaurant', rating: 4.4 },
      { name: 'Kadal Restaurant', rating: 4.1 },
      { name: 'Mezban Restaurant', rating: 4.2 },
      { name: 'Kingsbay Restaurant', rating: 4.6 },
      { name: 'Sixth Avenue', rating: 4.3 },
    ],
  };

  const fetchRestaurants = () => {
    const formattedLocation = location.trim().toLowerCase();
    if (mockApiData[formattedLocation]) {
      setRestaurants(mockApiData[formattedLocation]);
      setError('');
    } else {
      setRestaurants([]);
      setError('No restaurants found for the entered location.');
    }
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index += 1;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id='HS'>
      <div className="hero-content">
        <h1>{typedText}</h1>
        <p className="hero-description">
          Explore top restaurants and popular dishes in your city. Fast, reliable, and delicious.
        </p>
        <div className="search-bar">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your delivery location"
            aria-label="Delivery Location"
          />
          <button onClick={fetchRestaurants}>Find Restaurants</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="restaurant-list">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="restaurant-card">
              <h3>{restaurant.name}</h3>
              <p>Rating: {restaurant.rating}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-image">
        <div className="promo-container">
          <div className="promo-item">💥 Free delivery for 10km away</div>
          <div className="promo-item">🥗 Healthy meal plans starting at just ₹99</div>
        </div>
        <img src={img3} alt="food" className="food1" />
      </div>
    </section>
  );
};

export default HeroSection;