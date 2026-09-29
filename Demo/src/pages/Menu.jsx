import React, { useState } from 'react';
import { menuData } from '../data/menu';
import { useCart } from '../context/CartContext';
import { Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FoodCard from '../components/FoodCard';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0]);
  const { addToCart, getTotalItems, getSubtotal } = useCart();

  const filteredItems = activeCategory === 'All' 
    ? menuData.items 
    : menuData.items.filter(item => item.category === activeCategory);

  return (
    <div className={`section ${getTotalItems() > 0 ? 'page-with-cart' : ''}`}>
      <div className="container">
        <div className="text-center mb-8">
          <span className="eyebrow">Discover</span>
          <h1 className="title-lg">OUR MENU</h1>
        </div>
        
        {/* Category Tabs */}
        <div className="menu-preview-tags mb-12">
          {menuData.categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className="menu-tag"
              style={{
                backgroundColor: activeCategory === cat ? 'var(--pepchick-red)' : 'transparent',
                borderColor: activeCategory === cat ? 'var(--pepchick-red)' : 'var(--charcoal)',
                color: activeCategory === cat ? 'var(--white)' : 'var(--charcoal)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-3">
          {filteredItems.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Sticky Mobile Cart CTA */}
      {getTotalItems() > 0 && (
        <div className="mobile-sticky-cart">
          <div>
            <span className="font-bold" style={{ display: 'block' }}>{getTotalItems()} Items</span>
            <span className="text-primary font-bold">₹{getSubtotal()}</span>
          </div>
          <Link to="/cart" className="btn btn-primary">
            Checkout <ArrowRight size={20} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
