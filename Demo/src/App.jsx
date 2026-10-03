import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Party from './pages/Party';
import { Phone, Menu as MenuIcon } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { restaurantConfig } from './data/restaurant';

function App() {
  return (
    <div className="app-container">
      <div className="top-bar">
        <div className="status-dot"></div>
        Open Now (Delivering until 12:00 AM)
      </div>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/party" element={<Party />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      
      {/* Global Sticky Mobile CTA */}
      <div className="mobile-sticky-bar">
        <RouterLink to="/menu" className="btn btn-outline" style={{ flex: 1, padding: '12px' }}>
          <MenuIcon size={18} /> View Menu
        </RouterLink>
        <a href={`tel:${restaurantConfig.verifiedOrderNumber.replace(/[^0-9+]/g, '')}`} className="btn btn-primary" style={{ flex: 1, padding: '12px' }}>
          <Phone size={18} /> Call to Order
        </a>
      </div>
    </div>
  );
}

export default App;
