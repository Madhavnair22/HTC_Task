import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../css/Header.css';
import img2 from "../asserts/img2.svg"; 


import { FaHome, FaUtensils, FaDownload, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
    const navigate = useNavigate(); 

   
    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <header className="header">
            <div className="header-container">
                <img src={img2} alt="Profile" className="logo1" />
                <div className="logo">Swiggy</div>

                
                <nav className="nav">
                    <a href ="#HS">
                        <FaHome /> Home
                    </a>

                     <a href ="#EC">
                        <FaUtensils /> Explore Categories
                    </a>

                    <a href ="#PR">
                        <FaUtensils /> Popular Restaurants
                    </a>

                     <a href ="#DA">
                        <FaDownload /> Download App
                    </a>

                     <a href ="#CU">
                        <FaPhoneAlt /> Contact Us
                    </a>
                </nav>

             
                <div className="auth-buttons">
                    <button className="login-btn" onClick={handleLoginClick}>Login</button>
                    <button className="signup-btn" onClick={handleSignupClick}>Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
