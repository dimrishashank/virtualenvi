import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import HeroSection from '../components/HeroSection';
import StepIntoSection from '../components/StepIntoSection';
import MissionSection from '../components/MissionSection';
// import FounderSection from '../components/FounderSection';
import WhatWeOfferSection from '../components/WhatWeOfferSection';
import WhyChooseSection from '../components/WhyChooseSection';
// import BlogCardsSection from '../components/BlogCardsSection';
// import EllipseBackground from '../components/EllipseBackground';

function Home() {
  useEffect(() => {
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

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* <EllipseBackground /> */}
      <Header />
      {/* <HeroSection /> */}
      <div className="reveal-element fade-up">
        <StepIntoSection />
      </div>
      <div className="reveal-element fade-left">
        <MissionSection />
      </div>
      {/* <FounderSection /> */}
      <div className="reveal-element fade-right">
        <WhatWeOfferSection />
      </div>
      <div className="reveal-element fade-up">
        <WhyChooseSection />
      </div>
      {/* <BlogCardsSection /> */}
      <Footer />
    </>
  );
}

export default Home;