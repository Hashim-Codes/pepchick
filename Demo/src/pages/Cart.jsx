import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { restaurantConfig } from '../data/restaurant';
import { Trash2, Plus, Minus, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getSubtotal, clearCart, addToCart } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderType: 'Takeaway',
    address: '',
    paymentMode: 'Cash on Delivery',
    notes: ''
  });

  const [showUpsell, setShowUpsell] = useState(false);
  const [upsellAdded, setUpsellAdded] = useState(false);

  useEffect(() => {
    // Micro-upsell logic: check if cart has a main platter (e.g. Mandi or Broast)
    const hasPlatter = cart.some(item => item.category === 'Kuzhimanthi' || item.category === 'Signature Broast');
    const hasUpsell = cart.some(item => item.id === 'upsell-garlic-drink');
    
    if (hasPlatter && !hasUpsell && !upsellAdded) {
      setShowUpsell(true);
    } else {
      setShowUpsell(false);
    }
  }, [cart, upsellAdded]);

  const handleAddUpsell = () => {
    addToCart({
      id: 'upsell-garlic-drink',
      name: 'Extra Garlic Paste & Soft Drink',
      price: 50,
      description: 'Upsell combo',
      category: 'Add-ons'
    }, 1, null, 50);
    setUpsellAdded(true);
    setShowUpsell(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    let msg = `🔴 *NEW WEB ORDER - PEPCHICK* 🔴\n\n`;
    msg += `Customer: ${formData.name}\n`;
    msg += `Type: ${formData.orderType}\n`;
    msg += `Contact: ${formData.phone}\n\n`;
    
    msg += `ITEMS ORDERED:\n`;
    cart.forEach(item => {
      const portionText = item.portionName ? ` (${item.portionName})` : '';
      msg += `${item.quantity}x ${item.name}${portionText} - ₹${item.price * item.quantity}\n`;
    });
    
    msg += `\nTotal Bill: ₹${getSubtotal()}\n`;
    msg += `Payment: ${formData.paymentMode}\n\n`;
    
    if (formData.orderType === 'Home Delivery') {
      msg += `ADDRESS:\n${formData.address}\n`;
    }
    
    if (formData.notes) {
      msg += `\nNOTES:\n${formData.notes}\n`;
    }
    
    msg += `--------------------\n\n`;
    msg += `👉 Reply with "CONFIRMED" to accept this order.`;
    
    return encodeURIComponent(msg);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const message = generateWhatsAppMessage();
    const phone = restaurantConfig.whatsapp.replace(/[^0-9+]/g, '');
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
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            <AnimatePresence>
              {cart.map(item => (
                <motion.div 
                  key={item.cartId} 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ display: 'flex', gap: '16px', backgroundColor: 'var(--white)', padding: '16px', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}
                >
                  {item.image && (
                    <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                  )}
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{item.name}</h4>
                    {item.portionName && <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>{item.portionName}</span>}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                      <span className="font-bold text-lg" style={{ color: 'var(--pepchick-red)' }}>₹{item.price}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f5f5f5', padding: '4px 8px', borderRadius: '20px' }}>
                        <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}><Minus size={16} /></button>
                        <span style={{ fontWeight: 600 }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}><Plus size={16} /></button>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.cartId)} style={{ background: 'none', border: 'none', color: '#999', cursor: 'pointer', alignSelf: 'flex-start' }}>
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {showUpsell && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{ backgroundColor: 'rgba(255, 69, 0, 0.1)', border: '1px solid var(--pepchick-orange)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '32px', position: 'relative' }}
              >
                <button onClick={() => setShowUpsell(false)} style={{ position: 'absolute', top: '8px', right: '8px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  <X size={16} />
                </button>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--charcoal)' }}>Craving more?</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '12px' }}>Add extra Garlic Paste & Soft Drink for ₹50?</p>
                <button onClick={handleAddUpsell} className="btn" style={{ backgroundColor: 'var(--pepchick-orange)', color: 'var(--white)', padding: '8px 16px', fontSize: '0.9rem' }}>
                  Add to Order
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #eee', paddingTop: '24px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>Total Bill</span>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--charcoal)' }}>₹{getSubtotal()}</span>
          </div>
          <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '8px' }}>
            *Delivery charges (if applicable) will be confirmed on WhatsApp.
          </p>
        </div>

        {/* Checkout Form */}
        <div style={{ backgroundColor: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
          <h3 className="title-md mb-6">Customer Details</h3>
          <form onSubmit={handleCheckout}>
            <div className="mb-4">
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Full Name</label>
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
                  <input type="radio" name="orderType" value="Takeaway" checked={formData.orderType === 'Takeaway'} onChange={handleInputChange} style={{ width: '20px', height: '20px' }} />
                  <span style={{ fontSize: '1.1rem' }}>Self-Takeaway</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="radio" name="orderType" value="Home Delivery" checked={formData.orderType === 'Home Delivery'} onChange={handleInputChange} style={{ width: '20px', height: '20px' }} />
                  <span style={{ fontSize: '1.1rem' }}>Home Delivery</span>
                </label>
              </div>
            </div>
            
            {formData.orderType === 'Home Delivery' && (
              <div className="mb-4">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Delivery Address / Landmark</label>
                <textarea name="address" className="form-control" rows="3" value={formData.address} onChange={handleInputChange} required></textarea>
              </div>
            )}

            <div className="mb-6">
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Payment Mode</label>
              <select name="paymentMode" className="form-control" value={formData.paymentMode} onChange={handleInputChange} required>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="UPI on Delivery">UPI on Delivery</option>
              </select>
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
