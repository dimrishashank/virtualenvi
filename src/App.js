import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import FounderSection from './components/FounderSection';
import TeamSection from './components/TeamSection';
import BlogCardsSection from './components/BlogCardsSection';
import Footer from './components/Footer';
import EllipseBackground from './components/EllipseBackground';
import IntroAnimation from './components/IntroAnimation/IntroAnimation';
import WhatWeOfferSection from './components/WhatWeOfferSection';
import WhyChooseSection from './components/WhyChooseSection';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleAnimationComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="App">
      {showIntro ? (
        <IntroAnimation onAnimationComplete={handleAnimationComplete} />
      ) : (
        <>
          <EllipseBackground />
          <Header />
          <HeroSection />
          <MissionSection />
          <FounderSection />
          <WhatWeOfferSection />
          <WhyChooseSection />
          <BlogCardsSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
