import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/qspwrsh7.png';

const WhatWeOfferSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setIsLoaded(true);
  }, []);

  const handleLearnMore = () => {
    navigate('/about');
    window.scrollTo(0, 0); // Add this line to scroll to top
  };

  return (
    <div 
      className="what-we-offer-section" 
      style={{ 
        backgroundImage: `url(${bgImage})`,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in'
      }}
    >
      <div className="offer-content">
        <div className="offer-title">
          <h2>What We Offer</h2>
        </div>
        <div className="offer-description">
          <p>
            At Mayatopia, our flagship product VirtualEnvi delivers a 
            hyper-realistic, mobile-first metaverse experience—merging 
            real-world exploration, immersive shopping, social connection, 
            creative expression, and Web3 innovation into one seamless 
            digital platform
          </p>
        </div>
        <button 
          className="learn-more-btn" 
          onClick={handleLearnMore}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WhatWeOfferSection;