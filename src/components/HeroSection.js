import React from 'react';

function HeroSection() {
  return (
    <section className="ve-hero">
      <div className="ve-hero-content">
        <h1>Welcome to Virtual Envi</h1>
        <p>
          Step into VirtualEnvi, where your imagination meets reality. Explore real-world places, make new friends, shop in immersive virtual stores, and own exclusive digital collectibles as NFTs—all from the comfort of your home.
        </p>
        <button className="ve-learn-btn">Learn More</button>
      </div>
      <div className="ve-hero-image">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
          alt="Virtual Reality"
        />
      </div>
    </section>
  );
}

export default HeroSection;