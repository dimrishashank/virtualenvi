import React, { useEffect } from 'react';
import stepIntoImage from '../assets/Step_into.jpg';

const StepIntoSection = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    // Observe all reveal elements within this section
    const revealElements = document.querySelectorAll('.step-into-section .reveal-element');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      className="step-into-section" 
      style={{ backgroundImage: `url(${stepIntoImage})` }}
    >
      <div className="step-into-overlay">
        <div className="step-into-content">
          <h1 className="step-into-title reveal-element fade-down">
            Step into the metaverse—real, accessible, and limitless.
          </h1>
          
          <div className="step-into-features reveal-element fade-up delay-300">
            <div className="feature-item reveal-element fade-left delay-100">
              <h3>Explore Real-World Places Virtually</h3>
            </div>
            <div className="feature-item reveal-element fade-left delay-200">
              <h3>Shop in Immersive Marketplaces</h3>
            </div>
            <div className="feature-item reveal-element fade-left delay-300">
              <h3>Connect Through Lifelike Avatars</h3>
            </div>
            <div className="feature-item reveal-element fade-left delay-400">
              <h3>Unlock Web3 Digital Assets</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepIntoSection;
