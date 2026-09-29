import React from 'react';
import { restaurantConfig } from '../data/restaurant';

const About = () => {
  return (
    <div className="section container">
      <div className="text-center mb-12">
        <span className="eyebrow">Our Story</span>
        <h1 className="title-lg">ABOUT {restaurantConfig.name}</h1>
      </div>
      
      <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '60px' }}>
        <div>
          <img 
            src="/assets/Restaurant Photos/Screenshot 2026-09-27 121832.png" 
            alt="About PEPCHICK" 
            style={{ width: '100%', borderRadius: 'var(--radius-lg)', objectFit: 'cover', boxShadow: 'var(--shadow-md)' }} 
          />
        </div>
        <div>
          <h2 className="title-md mb-6">Authentic Flavors in Edavannapara</h2>
          <p className="subtitle mb-6" style={{ color: 'var(--text-dark)' }}>
            At {restaurantConfig.name}, we believe in serving food that brings people together. Our passion lies in crafting perfect Arabic platters and crispy Western fast food that leaves a lasting impression.
          </p>
          <p className="subtitle mb-8" style={{ color: 'var(--text-dark)' }}>
            From our signature slowly-cooked Kuzhimanthi and perfectly spiced Alfaham, to our famous crispy Broast chicken, every dish is prepared with premium ingredients and authentic recipes.
          </p>
          <div style={{ padding: '20px', backgroundColor: 'var(--white)', borderLeft: '4px solid var(--pepchick-red)', borderRadius: 'var(--radius-sm)' }}>
            <p className="font-bold" style={{ fontSize: '1.1rem' }}>
              Family Restaurant • Dine-In • Takeaway • Delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
