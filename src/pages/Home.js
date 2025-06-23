import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
// import FounderSection from '../components/FounderSection';
import WhatWeOfferSection from '../components/WhatWeOfferSection';
import WhyChooseSection from '../components/WhyChooseSection';
import BlogCardsSection from '../components/BlogCardsSection';
import EllipseBackground from '../components/EllipseBackground';

function Home() {
  return (
    <>
      <EllipseBackground />
      <Header />
      <HeroSection />
      <MissionSection />
      {/* <FounderSection /> */}
      <WhatWeOfferSection />
      <WhyChooseSection />
      <BlogCardsSection />
      <Footer />
    </>
  );
}

export default Home;