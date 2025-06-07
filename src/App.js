import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import FounderSection from './components/FounderSection';
import TeamSection from './components/TeamSection';
import BlogCardsSection from './components/BlogCardsSection';
import Footer from './components/Footer';
import EllipseBackground from './components/EllipseBackground';

function App() {
  return (
    <div className="App">
      <EllipseBackground />
      <Header />
      <HeroSection />
      <MissionSection />
      <FounderSection />
      <TeamSection />
      <BlogCardsSection />
      <Footer />
    </div>
  );
}

export default App;
