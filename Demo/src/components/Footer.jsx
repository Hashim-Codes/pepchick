import React from 'react';
import { Link } from 'react-router-dom';
import { restaurantConfig } from '../data/restaurant';
import { MapPin, Phone, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer section-dark">
      <div className="container footer-container">
        <div className="footer-brand">
          <img src={restaurantConfig.logo} alt={restaurantConfig.name} className="footer-logo" />
          <p className="footer-tagline">{restaurantConfig.type}</p>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">Contact</h4>
          <div className="footer-contact-item">
            <Phone size={16} />
            <span>{restaurantConfig.phone}</span>
          </div>
          <div className="footer-contact-item">
            <MapPin size={16} />
            <span>{restaurantConfig.address.line2}</span>
          </div>
          <a href={restaurantConfig.mapsUrl} className="footer-social-link mt-4" target="_blank" rel="noopener noreferrer">
            <Camera size={20} />
            <span>Follow Us</span>
          </a>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} {restaurantConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
