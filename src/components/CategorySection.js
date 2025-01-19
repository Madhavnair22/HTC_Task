import React from 'react';
import '../css/CategorySection.css';
import img4 from "../asserts/biriyani.jpg";
import img5 from "../asserts/dosa.jpg";
import img6 from "../asserts/images.jpg";
import img7 from "../asserts/pastry.jpg";



const CategorySection = () => {
  const categories = [
    { name: 'Pizza', image: img6},
    { name: 'Biryani', image: img4 },
    { name: 'Dosa', image: img5 },
    { name: 'pastry', image: img7 },
  ];

  return (
    <section className="category-section"  id="EC">
      <h2>Explore Categories</h2>
      <div className="categories">
        
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
