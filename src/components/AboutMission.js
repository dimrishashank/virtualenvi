import React, { useEffect, useState } from 'react';
import bgImage from '../assets/aboutus2.png';

function AboutMission() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div 
      className="about-mission-section"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        opacity: isLoaded ? 1 : 0,
      }}
    >
      <div className="mission-label">Our Mission</div>
      <div className="about-mission-content">
        <h3>
          To empower people worldwide by creating immersive, accessible
          digital experiences that bridge reality and the metaverse—unlocking
          new ways to explore, connect, create, and thrive in a limitless virtual
          universe.
        </h3>
        <div className="mission-description">
          <p>
            At Mayatopia, our mission is to build immersive digital worlds that seamlessly blend the real
            and virtual. We strive to make exploration, social connection, and creative expression
            accessible to everyone, transforming how people experience the metaverse and unlocking
            endless possibilities for growth and discovery.
          </p>
        </div>

        <div className="core-values">
          <div className="core-values-label">Core Values</div>
          <div className="values-grid">
            <div className="value-item">
              <div className='value-header'>
                <div className="value-line"></div>
                <h3>Innovation</h3>
               </div>
              <p>We constantly push the boundaries of technology and creativity to build cutting-edge, immersive experiences that redefine digital interaction.</p>
            </div>
            <div className="value-item">
                <div className='value-header'>
                    <div className="value-line"></div>
                    <h3>Accessibility</h3>
                </div>
                <p>We believe the metaverse should be open and easy to access for everyone, regardless of background or device—bringing people together without barriers.</p>
                
            </div>
            <div className="value-item">
                <div className='value-header'>
                    <div className="value-line"></div>
                    <h3>Community</h3>
                </div>
              <p>We foster a vibrant, inclusive community where users, creators, and brands collaborate, connect, and grow within a supportive virtual ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMission;