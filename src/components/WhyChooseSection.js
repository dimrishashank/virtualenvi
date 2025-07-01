import React, { useEffect, useState } from 'react';
import bgVideo from '../assets/WhyChooseMayatopiaVideo.mp4';
import phoneGif from '../assets/GIF/icons8-phone.gif';
import connectionGif from '../assets/GIF/icons8-connection.gif';

const WhyChooseSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.why-choose-section');
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const scrollPercentage = (window.innerHeight - sectionTop) / (window.innerHeight + rect.height);
      
      // Reverse the scroll direction by using negative scrollPercentage
      if (scrollPercentage >= 0 && scrollPercentage <= 1) {
        setScrollPosition(scrollPercentage);
      }
    };

    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    // Observe all reveal elements within this section
    const revealElements = document.querySelectorAll('.why-choose-section .reveal-element');
    revealElements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      title: "Reality Meets Imagination",
      description: "Mayatopia bridges the physical and digital worlds through VirtuaEnvi—delivering ultra-realistic interactive environments inspired by real-life locations.",
      icon: "🌐",
      isEmoji: true,
      animationClass: "emoji-rotate"
    },
    {
      title: "Mobile-First, India-Focused",
      description: "With a design optimized for mobile devices, VirtuaEnvi is built to reach and engage India's massive young, mobile-first population.",
      icon: phoneGif,
      isEmoji: false
    },
    {
      title: "Immersive Commerce & Culture",
      description: "From regional marketplaces to artistic showcases, we blend traditional elements with futuristic experiences—making shopping socializing and creating more meaningful.",
      icon: "🛍️",
      isEmoji: true,
      animationClass: "emoji-bounce"
    },
    {
      title: "Built for Connection",
      description: "Advanced voice, chat, and avatar systems power authentic interactions and community events—bringing people together in immersive spaces.",
      icon: connectionGif,
      isEmoji: false
    },
    {
      title: "Scalable & Future-Ready",
      description: "With a roadmap spanning VR, AI, and international partnerships, Mayatopia is built for longevity and growth potential in the evolving metaverse landscape.",
      icon: "📈",
      isEmoji: true,
      animationClass: "emoji-pulse"
    },
    {
      title: "Web3 & NFT Integration",
      description: "Leverage blockchain technology for true digital ownership, decentralized commerce, and community-driven ecosystems within the metaverse.",
      icon: "🔗",
      isEmoji: true,
      animationClass: "emoji-swing"
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="video-container">
        <video
          className="why-choose-video-bg"
          autoPlay
          loop
          muted
          playsInline
          style={{
            transform: `translate(-50%, -50%) scale(1.2) translateX(${scrollPosition * -100}px)` 
          }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="whychoose-section-title reveal-element fade-down">
        <h2>Why Choose Mayatopia</h2>
      </div>
      <div className="why-choose-grid">
        {features.map((feature, index) => (
          <div key={index} className={`feature-card reveal-element fade-up delay-stagger delay-${(index + 1) * 100}`}>
            <div className={`feature-icon ${feature.isEmoji ? feature.animationClass : ''}`}>
              {feature.isEmoji ? (
                <span style={{fontSize: '2rem'}}>{feature.icon}</span>
              ) : (
                <img src={feature.icon} alt={feature.title} style={{width: '2rem', height: '2rem'}} />
              )}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;