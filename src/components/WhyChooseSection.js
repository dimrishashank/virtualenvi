import React, { useEffect, useState } from 'react';
import bgVideo from '../assets/WhyChooseMayatopiaVideo.mp4';

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
        setScrollPosition(-scrollPercentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Reality Meets Imagination",
      description: "Mayatopia bridges the physical and digital worlds through VirtuaEnvi—delivering ultra-realistic interactive environments inspired by real-life locations.",
      icon: "🌐"
    },
    {
      title: "Mobile-First, India-Focused",
      description: "With a design optimized for mobile devices, VirtuaEnvi is built to reach and engage India's massive young, mobile-first population.",
      icon: "📱"
    },
    {
      title: "Immersive Commerce & Culture",
      description: "From regional marketplaces to artistic showcases, we blend traditional elements with futuristic experiences—making shopping socializing and creating more meaningful.",
      icon: "🛍️"
    },
    {
      title: "Built for Connection",
      description: "Advanced voice, chat, and avatar systems power authentic interactions and community events—bringing people together in immersive spaces.",
      icon: "👥"
    },
    {
      title: "Scalable & Future-Ready",
      description: "With a roadmap spanning VR, AI, and international partnerships, Mayatopia is built for longevity and growth potential in the evolving metaverse landscape.",
      icon: "📈"
    },
    {
      title: "Web3 & NFT Integration",
      description: "Leverage blockchain technology for true digital ownership, decentralized commerce, and community-driven ecosystems within the metaverse.",
      icon: "🔗"
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
      <div className="whychoose-section-title">
        <h2>Why Choose Mayatopia</h2>
      </div>
      <div className="why-choose-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;