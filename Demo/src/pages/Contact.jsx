import React from 'react';
import { restaurantConfig } from '../data/restaurant';
import { socialData } from '../data/social';
import { Phone, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="section container">
      <div className="text-center mb-12">
        <span className="eyebrow">Get In Touch</span>
        <h1 className="title-lg">CONTACT US</h1>
      </div>
      
      <div className="grid grid-cols-2" style={{ gap: '60px' }}>
        <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
          <h2 className="title-md mb-8">We'd Love to Hear From You</h2>
          
          <a href={`tel:${restaurantConfig.phone.replace(/[^0-9+]/g, '')}`} style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit', cursor: 'pointer', padding: '12px', borderRadius: '8px', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <div style={{ backgroundColor: 'rgba(227, 24, 55, 0.1)', padding: '16px', borderRadius: '50%', color: 'var(--pepchick-red)' }}>
              <Phone size={24} />
            </div>
            <div style={{ paddingTop: '4px' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Call Us</h4>
              <p className="subtitle">{restaurantConfig.phone}</p>
            </div>
          </a>

          <a href={`https://wa.me/${restaurantConfig.whatsapp.replace(/[^0-9+]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit', cursor: 'pointer', padding: '12px', borderRadius: '8px', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <div style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', padding: '16px', borderRadius: '50%', color: '#25D366' }}>
              <FaWhatsapp size={24} />
            </div>
            <div style={{ paddingTop: '4px' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>WhatsApp</h4>
              <p className="subtitle">{restaurantConfig.whatsapp}</p>
            </div>
          </a>
          
          <a href={restaurantConfig.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit', cursor: 'pointer', padding: '12px', borderRadius: '8px', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <div style={{ backgroundColor: 'rgba(227, 24, 55, 0.1)', padding: '16px', borderRadius: '50%', color: 'var(--pepchick-red)' }}>
              <MapPin size={24} />
            </div>
            <div style={{ paddingTop: '4px' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Location</h4>
              <p className="subtitle">{restaurantConfig.address.line1}<br/>{restaurantConfig.address.line2}</p>
            </div>
          </a>

          <a href={socialData.instagram.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit', cursor: 'pointer', padding: '12px', borderRadius: '8px', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <div style={{ backgroundColor: 'rgba(225, 48, 108, 0.1)', padding: '16px', borderRadius: '50%', color: '#E1306C' }}>
              <FaInstagram size={24} />
            </div>
            <div style={{ paddingTop: '4px' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Instagram</h4>
              <p className="subtitle">@{socialData.instagram.handle}</p>
            </div>
          </a>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '8px', alignItems: 'flex-start', padding: '12px' }}>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', padding: '16px', borderRadius: '50%', color: '#555' }}>
              <Clock size={24} />
            </div>
            <div style={{ paddingTop: '4px' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Opening Hours</h4>
              <p className="subtitle">{restaurantConfig.hours}</p>
            </div>
          </div>
        </div>

        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: 'var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <img src="/assets/Food Photos/storefront-exterior.png" alt="Map Location" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
          <div style={{ position: 'absolute', textAlign: 'center', zIndex: 2, padding: '20px' }}>
            <MapPin size={48} color="var(--white)" style={{ margin: '0 auto 16px' }} />
            <h3 className="title-md" style={{ color: 'var(--white)', marginBottom: '8px' }}>Find Us On Google Maps</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '24px' }}>{restaurantConfig.address.line2}</p>
            <a href={restaurantConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Open Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
