import React from 'react';
import '../css/PopularRestaurants.css';
import img7 from "../asserts/a2b.jpg";
import img8 from "../asserts/CB.jpg";
import img9 from "../asserts/ph.jpg";
import img10 from "../asserts/TCW.jpg";


const PopularRestaurants = () => {
  const restaurants = [
    { name: 'A2B', image: img7 },
    { name: 'California Burrito', image: img8 },
    { name: 'Pizza Hut', image:img9},
    { name: 'The Chinese Kitchen', image: img10},
  ];

  return (
    <section className="popular-restaurants" id='PR'>
      <h2>Popular Restaurants</h2>
      <div className="restaurant-cards">
        {restaurants.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRestaurants;
