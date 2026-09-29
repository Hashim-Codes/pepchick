import React from 'react';
import { restaurantConfig } from '../data/restaurant';
import { Phone, MapPin, Clock } from 'lucide-react';

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
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '32px', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: 'rgba(227, 24, 55, 0.1)', padding: '16px', borderRadius: '50%', color: 'var(--pepchick-red)' }}>
              <Phone size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Phone / WhatsApp</h4>
              <p className="subtitle">{restaurantConfig.phone}</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '32px', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: 'rgba(227, 24, 55, 0.1)', padding: '16px', borderRadius: '50%', color: 'var(--pepchick-red)' }}>
              <MapPin size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Location</h4>
              <p className="subtitle">{restaurantConfig.address.line1}<br/>{restaurantConfig.address.line2}</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '16px', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: 'rgba(227, 24, 55, 0.1)', padding: '16px', borderRadius: '50%', color: 'var(--pepchick-red)' }}>
              <Clock size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Opening Hours</h4>
              <p className="subtitle">{restaurantConfig.hours}</p>
              <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '8px' }}>*Hours subject to change. Please contact us to confirm.</p>
            </div>
          </div>
        </div>

        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: 'var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <img src="/assets/Restaurant Photos/Screenshot 2026-09-27 121815.png" alt="Map Location" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
          <div style={{ position: 'absolute', textAlign: 'center', zIndex: 2, padding: '20px' }}>
            <MapPin size={48} color="var(--white)" style={{ margin: '0 auto 16px' }} />
            <h3 className="title-md" style={{ color: 'var(--white)', marginBottom: '8px' }}>Find Us On Google Maps</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '24px' }}>{restaurantConfig.address.line2}</p>
            <a href={restaurantConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Open Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
