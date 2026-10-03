import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { restaurantConfig } from '../data/restaurant';
import { Trash2, Plus, Minus, ArrowRight, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getSubtotal, clearCart, addToCart } = useCart();
  
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

          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #eee', paddingTop: '24px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>Total Bill</span>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--charcoal)' }}>₹{getSubtotal()}</span>
          </div>
          <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '8px' }}>
            *Delivery charges (if applicable) will be confirmed on WhatsApp.
          </p>
        </div>

        {/* Call to Order Card */}
        <div style={{ backgroundColor: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', alignSelf: 'start', position: 'sticky', top: '100px' }}>
          <h3 className="title-md mb-4 text-center">Ready to Order?</h3>
          <p className="text-center mb-6 text-muted">Review your items and call us to place your order directly. No login required.</p>
          
          <a href={`tel:${restaurantConfig.verifiedOrderNumber.replace(/[^0-9+]/g, '')}`} className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.2rem', justifyContent: 'center' }}>
            <Phone size={24} style={{ marginRight: '8px' }} /> Call to Order
          </a>
          
          <p className="text-center mt-6 text-muted" style={{ fontSize: '0.9rem' }}>
            Call {restaurantConfig.verifiedOrderNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
