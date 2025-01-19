import React, { useState } from 'react';
import '../css/DownloadAppSection.css';

const DownloadAppSection = () => {
const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    "Exclusive offers and discounts available only on the app.",
    "Track your orders in real-time with live updates.",
    "Save your favorite restaurants and dishes for quick ordering.",
    "Get instant notifications for amazing deals near you.",
    "Enjoy a seamless and user-friendly interface.",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? features.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === features.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="download-app" id='DA'>
      <h2>Why Download the Swiggy App?</h2>
      <div className="feature-slider">
        <button className="arrow-btn left-arrow" onClick={handlePrev}>&lt;</button>
        <div className="feature-content">{features[currentIndex]}</div>
        <button className="arrow-btn right-arrow" onClick={handleNext}>&gt;</button>
      </div>
      <div className="app-links">
        <button className="app-btn">Download for Android</button>
        <button className="app-btn">Download for iOS</button>
      </div>
    </section>
  );
};

export default DownloadAppSection;
