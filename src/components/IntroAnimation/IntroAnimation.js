import React, { useRef, useEffect, useState } from 'react';
import './IntroAnimation.css';

const IntroAnimation = ({ onAnimationComplete }) => {
  const videoSectionRef = useRef(null);
  const [locked, setLocked] = useState(false);

  // Listen for a small scroll, then snap to video and lock scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!locked && currentScrollY > lastScrollY && currentScrollY > 5) {
        if (videoSectionRef.current) {
          videoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
          setLocked(true);
          setTimeout(() => {
            window.scrollTo(0, window.innerHeight);
            document.body.style.overflow = 'hidden';
          }, 700);
        }
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [locked]);

  // Unlock scroll after video ends (optional, or keep locked)
  const handleVideoEnd = () => {
    document.body.style.overflow = '';
    onAnimationComplete();
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Arrow click scrolls and locks as well
  const handleArrowClick = () => {
    videoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setLocked(true);
    setTimeout(() => {
      window.scrollTo(0, window.innerHeight);
      document.body.style.overflow = 'hidden';
    }, 700);
  };

  return (
    <div className="intro-animation-stack">
      <section className="landing-intro">
        <div className="landing-content">
          <h1>Hi, There!</h1>
          <div className="arrow" onClick={handleArrowClick}>
            <svg width="60" height="40" viewBox="0 0 60 40">
              <polyline points="10,10 30,30 50,10" fill="none" stroke="#00baff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>
      <section ref={videoSectionRef} className="video-section">
        <video
          src={require('../../assets/animation/intromation.mp4')}
          className="intro-video"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
      </section>
    </div>
  );
};

export default IntroAnimation;