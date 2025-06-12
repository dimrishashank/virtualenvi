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
          <TeamSection />
          <BlogCardsSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
