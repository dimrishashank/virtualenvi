import React from 'react';
import stepIntoImage from '../assets/Step_into.jpg';

const StepIntoSection = () => {
  return (
    <section 
      className="step-into-section" 
      style={{ backgroundImage: `url(${stepIntoImage})` }}
    >
      <div className="step-into-overlay">
        <div className="step-into-content">
          <h1 className="step-into-title">
            Step into the metaverse—real, accessible, and limitless.
          </h1>
          
          <div className="step-into-features">
            <div className="feature-item">
              <h3>Explore Real-World Places Virtually</h3>
            </div>
            <div className="feature-item">
              <h3>Shop in Immersive Marketplaces</h3>
            </div>
            <div className="feature-item">
              <h3>Connect Through Lifelike Avatars</h3>
            </div>
            <div className="feature-item">
              <h3>Unlock Web3 Digital Assets</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepIntoSection;
