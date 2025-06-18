import React, { useEffect, useState } from 'react';
import bgImage from '../assets/qspwrsh7.png';

const WhatWeOfferSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setIsLoaded(true);
  }, []);

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
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default WhatWeOfferSection;