import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const FoodCard = ({ item }) => {
  const { addToCart } = useCart();
  const hasPortions = item.portions && item.portions.length > 0;
  
  // Default to the first portion if available
  const [selectedPortionIdx, setSelectedPortionIdx] = useState(0);

  const currentPrice = hasPortions ? item.portions[selectedPortionIdx].price : item.price;
  const currentPortionName = hasPortions ? item.portions[selectedPortionIdx].name : null;

  const handleAdd = () => {
    addToCart(item, 1, currentPortionName, currentPrice);
  };

  return (
    <motion.div 
      className="food-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="food-card-img-wrapper">
        <img src={item.image} alt={item.name} className="food-card-img" />
      </div>
      <div className="food-card-content">
        <h3 className="food-card-title">{item.name}</h3>
        <p className="food-card-desc">{item.description}</p>
        
        {hasPortions && (
          <div className="portion-selector mb-4">
            {item.portions.map((portion, idx) => (
              <button
                key={portion.name}
                onClick={() => setSelectedPortionIdx(idx)}
                className={`portion-btn ${selectedPortionIdx === idx ? 'active' : ''}`}
              >
                {portion.name}
              </button>
            ))}
          </div>
        )}

        <div className="food-card-footer">
          <span className="food-card-price">₹{currentPrice}</span>
          <button onClick={handleAdd} className="food-card-add" aria-label="Add to cart">
            <Plus size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
