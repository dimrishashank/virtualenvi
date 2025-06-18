import React from 'react';

const WhyChooseSection = () => {
  const features = [
    {
      title: "Reality Meets Imagination",
      description: "Moyotopia bridges the physical and digital worlds through VirtuaEnvi—delivering ultra-realistic interactive environments inspired by real-life locations.",
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
      description: "Advanced voice chat and avatar systems power authentic interactions and community events—bringing people together in immersive spaces.",
      icon: "👥"
    },
    {
      title: "Scalable & Future-Ready",
      description: "With a roadmap spanning VR, AI, and international partnerships, Moyotopia is built for longevity and growth potential in the evolving metaverse landscape.",
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
      <div className="why-choose-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;