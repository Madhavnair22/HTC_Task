import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id='CU'>
            <div className="footer-container">
              
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/investors">Investors</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="/affiliate">Affiliate Program</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Help & Support</h4>
                    <ul>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/cancellation">Cancellation Policy</a></li>
                        <li><a href="/delivery-partners">Partner Support</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="/terms">Terms & Conditions</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/security">Security</a></li>
                        <li><a href="/compliance">Compliance</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">LinkedIn</a>
                    </div>
                </div>
                <div className="footer-section newsletter">
                    <h4>Subscribe to our Newsletter</h4>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" className="newsletter-input" />
                        <button type="submit" className="newsletter-button">Subscribe</button>
                    </form>
                </div>
                <div className="footer-section app-download">
                    <h4>Get the Swiggy App</h4>
                    <div className="download-buttons">
                        <a href="https://play.google.com" className="play-store">Google Play</a>
                        <a href="https://www.apple.com/app-store/" className="app-store">App Store</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Swiggy Clone. All rights reserved.</p>
                
            </div>
        </footer>
    );
};

export default Footer;
