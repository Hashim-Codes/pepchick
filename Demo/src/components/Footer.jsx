import React from 'react';
import { Link } from 'react-router-dom';
import { restaurantConfig } from '../data/restaurant';
import { socialData } from '../data/social';
import { MapPin, Phone } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
          <a href={`tel:${restaurantConfig.verifiedOrderNumber.replace(/[^0-9+]/g, '')}`} className="footer-contact-item">
            <Phone size={16} />
            <span>{restaurantConfig.verifiedOrderNumber}</span>
          </a>
          <a href={`https://wa.me/${restaurantConfig.whatsapp.replace(/[^0-9+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
            <FaWhatsapp size={18} color="#25D366" />
            <span>WhatsApp: {restaurantConfig.whatsapp}</span>
          </a>
          <a href={restaurantConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
            <MapPin size={16} />
            <span>{restaurantConfig.address.line2}</span>
          </a>
          <a href={socialData.instagram.url} className="footer-social-link mt-4" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={22} color="#E1306C" />
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
