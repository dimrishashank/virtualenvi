import React, { useEffect } from 'react';
import aboutUs1 from '../assets/aboutus1.png';

function GetToKnow() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="get-to-know-section">
      <div className="get-to-know-content">
        <h1 className="reveal-element fade-bottom">Get to Know Us</h1>
        <p className="reveal-element fade-bottom">
          Discover the team behind Mayatopia and our journey in building VirtualEnvi—a
          visionary metaverse platform redefining how people explore, connect, and
          create in immersive digital worlds.
        </p>
      </div>
      <div className="who-we-are">
        <h2 className="reveal-element fade-bottom">Who We Are</h2>
        <div className="who-we-are-content reveal-element fade-bottom">
          <div className="who-we-are-text">
            <p>
              At Mayatopia, we are visionary creators and technologists passionate about 
              building immersive digital worlds. Through our flagship product, VirtualEnvi, 
              we blend cutting-edge technology with creativity to redefine how people explore, 
              and connect in the metaverse. Driven by innovation and inclusivity, we aim to 
              make the digital universe accessible, vibrant, and limitless for everyone.
            </p>
          </div>
          <div className="who-we-are-image">
            <img src={aboutUs1} alt="About VirtualEnvi" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetToKnow;