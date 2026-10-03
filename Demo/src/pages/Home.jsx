import React from 'react';
import { Link } from 'react-router-dom';
import { restaurantConfig } from '../data/restaurant';
import { menuData } from '../data/menu';
import { socialData } from '../data/social';
import { ArrowRight, MapPin, Phone, Plus } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import FoodCard from '../components/FoodCard';

const Home = () => {
  const { addToCart } = useCart();
  const featuredItems = menuData.items.filter(item => menuData.featured.includes(item.id));

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-v2">
        <img src="/assets/Food Photos/hero-background.png" alt="Signature Broast" className="hero-v2-bg" />
        <div className="hero-v2-overlay"></div>
        <div className="container hero-v2-content">
          <span className="eyebrow">{restaurantConfig.type}</span>
          <h1 className="title-xl">{restaurantConfig.name}</h1>
          <p className="hero-v2-tagline">{restaurantConfig.tagline}</p>
          
          <div className="hero-v2-actions">
            <a href={`tel:${restaurantConfig.verifiedOrderNumber.replace(/[^0-9+]/g, '')}`} className="btn btn-primary">
              <Phone size={20} /> Call to Order
            </a>
            <Link to="/menu" className="btn btn-outline" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>
              View Menu
            </Link>
          </div>
          
          <div className="hero-v2-location">
            <MapPin size={16} color="var(--pepchick-red)" />
            <span>{restaurantConfig.address.line2}</span>
          </div>
        </div>
      </section>

      {/* 2. QUICK ACTION BAR */}
      <section className="quick-action-bar">
        <div className="container quick-action-grid">
          <Link to="/menu" className="quick-action-item">
            <span className="quick-action-title">Order Online</span>
            <span className="quick-action-desc">Delivery & Pickup</span>
          </Link>
          <Link to="/menu" className="quick-action-item">
            <span className="quick-action-title">View Menu</span>
            <span className="quick-action-desc">Explore our items</span>
          </Link>
          <a href={`tel:${restaurantConfig.verifiedOrderNumber.replace(/[^0-9+]/g, '')}`} className="quick-action-item">
            <span className="quick-action-title">Call to Order</span>
            <span className="quick-action-desc">{restaurantConfig.verifiedOrderNumber}</span>
          </a>
          <a href={restaurantConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="quick-action-item">
            <span className="quick-action-title">Location</span>
            <span className="quick-action-desc">Get Directions</span>
          </a>
        </div>
      </section>

      {/* 3. FEATURED FOOD SECTION */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <span className="eyebrow">House Favorites</span>
            <h2 className="title-lg">OUR SIGNATURE FLAVOURS</h2>
          </div>
          
          <div className="grid grid-cols-4">
            {featuredItems.map(item => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. MENU PREVIEW */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container text-center">
          <h2 className="title-lg mb-8">EXPLORE OUR MENU</h2>
          
          <div className="menu-preview-tags mb-12">
            {menuData.categories.slice(1).map(cat => (
              <Link key={cat} to="/menu" className="menu-tag">{cat}</Link>
            ))}
          </div>
          
          <Link to="/menu" className="btn btn-dark">
            View Full Menu <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* 5. FOOD VISUAL SHOWCASE */}
      <section className="visual-showcase">
        <div className="showcase-main">
          <img src="/assets/Food Photos/showcase-main.png" alt="BBQ Mandi" />
        </div>
        <div className="showcase-secondary">
          <img src="/assets/Food Photos/showcase-side-1.png" alt="Kuzhimanthi" />
          <img src="/assets/Food Photos/showcase-side-2.png" alt="Alfaham" />
        </div>
      </section>

      {/* 6. RESTAURANT EXPERIENCE */}
      <section className="section section-dark text-center">
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="eyebrow">Experience</span>
          <h2 className="title-lg mb-6">GOOD FOOD. GOOD COMPANY.</h2>
          <p className="subtitle" style={{ margin: '0 auto 40px' }}>
            Whether you're sharing a massive Mandi platter with family or grabbing a quick spicy Alfaham roll, PEPCHICK brings authentic flavors to your table in a warm, welcoming environment.
          </p>
          <img src="/assets/Food Photos/restaurant-interior.png" alt="Restaurant Interior" style={{ borderRadius: 'var(--radius-lg)', width: '100%', objectFit: 'cover', height: '400px' }} />
        </div>
      </section>

      {/* 7. SOCIAL PROOF / INSTAGRAM */}
      <section className="section">
        <div className="container text-center">
          <span className="eyebrow">Social</span>
          <h2 className="title-lg mb-12">FROM OUR TABLE TO YOUR FEED</h2>
          
          <div className="grid grid-cols-4 mb-12 instagram-grid">
            {socialData.instagram.showcaseImages.map((img, i) => (
              <a key={i} href={socialData.instagram.url} target="_blank" rel="noopener noreferrer" className="insta-frame">
                <img src={img} alt="Instagram Post" />
                <div className="insta-overlay">
                  <FaInstagram size={32} color="var(--white)" />
                </div>
              </a>
            ))}
          </div>
          
          <a href={socialData.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Follow {socialData.instagram.handle}
          </a>
        </div>
      </section>

      {/* 8. LOCATION / CONTACT */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="grid grid-cols-2 align-center">
            <div>
              <span className="eyebrow">Location</span>
              <h2 className="title-lg mb-6">COME FIND US</h2>
              <div className="location-details mb-8">
                <p className="font-bold text-xl">{restaurantConfig.address.line1}</p>
                <p className="text-xl">{restaurantConfig.address.line2}</p>
              </div>
              <div className="location-actions">
                <a href={`tel:${restaurantConfig.verifiedOrderNumber.replace(/[^0-9+]/g, '')}`} className="btn btn-primary">
                  <Phone size={18} /> Call to Order
                </a>
                <a href={restaurantConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Get Directions
                </a>
              </div>
            </div>
            <div className="map-placeholder">
              <img src="/assets/Food Photos/storefront-exterior.png" alt="Restaurant Exterior" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
