import React, { useState } from 'react';
import { ArrowRight, Users, Calendar, Phone, PartyPopper } from 'lucide-react';
import { restaurantConfig } from '../data/restaurant';

const Party = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '50',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getSuggestedTier = (guests) => {
    const num = parseInt(guests, 10);
    if (num < 20) return "Mini Gathering (Mandi & Alfaham mixed platters)";
    if (num < 100) return "Classic Feast (Full Broast & Mandi combo packages)";
    return "Grand Banquet (Unlimited Premium Buffet style)";
  };

  const handleEnquiry = (e) => {
    e.preventDefault();
    const suggestedTier = getSuggestedTier(formData.guests);
    let msg = `🔴 *PARTY ENQUIRY - PEPCHICK* 🔴\n\n`;
    msg += `Name: ${formData.name}\n`;
    msg += `Phone: ${formData.phone}\n`;
    msg += `Date: ${formData.date}\n`;
    msg += `Guest Count: ${formData.guests}\n\n`;
    msg += `Interested in: ${suggestedTier}\n\n`;
    msg += `Please contact me to discuss the menu and pricing.`;
    
    const phone = restaurantConfig.whatsapp.replace(/[^0-9+]/g, '');
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="section container">
      <div className="text-center mb-12">
        <span className="eyebrow">Events & Bulk Orders</span>
        <h1 className="title-lg">PARTY ORDERS</h1>
        <p className="subtitle mt-4" style={{ maxWidth: '600px', margin: '16px auto 0' }}>
          Hosting a get-together, office party, or family event? Let PEPCHICK handle the food. 
          We offer specialized bulk packages for groups of all sizes.
        </p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '60px', alignItems: 'center' }}>
        <div>
          <div style={{ backgroundColor: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
            <h3 className="title-md mb-6" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <PartyPopper color="var(--pepchick-red)" /> Request a Quote
            </h3>
            
            <form onSubmit={handleEnquiry}>
              <div className="mb-4">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Your Name / Organization</label>
                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleInputChange} required />
              </div>
              
              <div className="mb-4">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Phone Number</label>
                <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleInputChange} required />
              </div>

              <div className="mb-4" style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}><Calendar size={16} style={{ display: 'inline', marginRight: '4px' }}/> Event Date</label>
                  <input type="date" name="date" className="form-control" value={formData.date} onChange={handleInputChange} required />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}><Users size={16} style={{ display: 'inline', marginRight: '4px' }}/> Guests</label>
                  <input type="number" name="guests" className="form-control" min="10" max="1000" value={formData.guests} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="mb-6" style={{ backgroundColor: 'var(--cream)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Suggested Package</span>
                <p style={{ fontWeight: 600, color: 'var(--pepchick-red)', marginTop: '4px' }}>
                  {getSuggestedTier(formData.guests)}
                </p>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}>
                Send Enquiry on WhatsApp <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <img src="/assets/Food Photos/hero-background.png" alt="Party Orders" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
          
          <div style={{ backgroundColor: 'var(--charcoal)', color: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-md)' }}>
            <h3 className="title-md mb-4" style={{ color: 'var(--white)' }}>Why PEPCHICK for events?</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--pepchick-red)' }}>✓</span> Premium packaging that keeps food hot
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--pepchick-red)' }}>✓</span> Special wholesale pricing for 20+ guests
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--pepchick-red)' }}>✓</span> Reliable timing & dedicated event manager
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Party;
