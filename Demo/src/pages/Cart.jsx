import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { restaurantConfig } from '../data/restaurant';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getSubtotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderType: 'Pickup',
    address: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    let msg = `*PEPCHICK ORDER*\n\n`;
    msg += `Customer: ${formData.name}\n`;
    msg += `Phone: ${formData.phone}\n\n`;
    
    msg += `*Order:*\n`;
    cart.forEach(item => {
      msg += `${item.quantity} × ${item.name} — ₹${item.price * item.quantity}\n`;
    });
    
    msg += `\n*Subtotal: ₹${getSubtotal()}*\n\n`;
    msg += `Order Type: ${formData.orderType}\n`;
    
    if (formData.orderType === 'Delivery') {
      msg += `Address:\n${formData.address}\n\n`;
    }
    
    if (formData.notes) {
      msg += `Notes:\n${formData.notes}\n\n`;
    }
    
    msg += `Please confirm my order.`;
    
    return encodeURIComponent(msg);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const message = generateWhatsAppMessage();
    const phone = restaurantConfig.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="section container text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className="title-lg mb-4">Your Cart is Empty</h1>
        <p className="subtitle mb-8">Looks like you haven't added any authentic flavors yet.</p>
        <Link to="/menu" className="btn btn-primary">Browse Menu</Link>
      </div>
    );
  }

  return (
    <div className="section container">
      <div className="text-center mb-8">
        <span className="eyebrow">Review</span>
        <h1 className="title-lg">CHECKOUT</h1>
      </div>
      
      <div className="grid grid-cols-2">
        {/* Cart Items */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #eee', paddingBottom: '16px', marginBottom: '24px' }}>
            <h3 className="title-md" style={{ margin: 0 }}>Order Summary</h3>
            <button onClick={clearCart} style={{ background: 'none', border: 'none', color: 'var(--pepchick-red)', cursor: 'pointer', fontWeight: 600 }}>Clear All</button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '16px', backgroundColor: 'var(--white)', padding: '16px', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)' }}>
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{item.name}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span className="font-bold text-lg" style={{ color: 'var(--pepchick-red)' }}>₹{item.price}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f5f5f5', padding: '4px 8px', borderRadius: '20px' }}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}><Minus size={16} /></button>
                      <span style={{ fontWeight: 600 }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}><Plus size={16} /></button>
                    </div>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#999', cursor: 'pointer' }}>
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #eee', paddingTop: '24px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>Subtotal</span>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--charcoal)' }}>₹{getSubtotal()}</span>
          </div>
          <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '8px' }}>
            *Delivery charges (if applicable) will be confirmed by staff on WhatsApp.
          </p>
        </div>

        {/* Checkout Form */}
        <div style={{ backgroundColor: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
          <h3 className="title-md mb-6">Customer Details</h3>
          <form onSubmit={handleCheckout}>
            <div className="mb-4">
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Name</label>
              <input type="text" name="name" className="form-control" value={formData.name} onChange={handleInputChange} required />
            </div>
            
            <div className="mb-4">
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Phone Number</label>
              <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleInputChange} required />
            </div>
            
            <div className="mb-6">
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Order Type</label>
              <div style={{ display: 'flex', gap: '24px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="radio" name="orderType" value="Pickup" checked={formData.orderType === 'Pickup'} onChange={handleInputChange} style={{ width: '20px', height: '20px' }} />
                  <span style={{ fontSize: '1.1rem' }}>Pickup</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="radio" name="orderType" value="Delivery" checked={formData.orderType === 'Delivery'} onChange={handleInputChange} style={{ width: '20px', height: '20px' }} />
                  <span style={{ fontSize: '1.1rem' }}>Delivery</span>
                </label>
              </div>
            </div>
            
            {formData.orderType === 'Delivery' && (
              <div className="mb-4">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Delivery Address</label>
                <textarea name="address" className="form-control" rows="3" value={formData.address} onChange={handleInputChange} required></textarea>
              </div>
            )}
            
            <div className="mb-6">
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Special Instructions (Optional)</label>
              <textarea name="notes" className="form-control" rows="2" value={formData.notes} onChange={handleInputChange} placeholder="E.g., less spicy, extra mayo..."></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}>
              Send Order on WhatsApp <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
