import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import PopularRestaurants from "./components/PopularRestaurants";
import DownloadAppSection from "./components/DownloadAppSection";
import Footer from "./components/Footer";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <CategorySection />
            <PopularRestaurants />
            <DownloadAppSection />
            <Footer />
        </div>
    );
};

export default LandingPage;
