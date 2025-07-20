import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import IntroAnimation from './components/IntroAnimation/IntroAnimation';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
      sessionStorage.clear();
    }

    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      setShowIntro(true);
      sessionStorage.setItem('hasVisited', 'true');
    } else {
      setShowIntro(false);
    }
    
    setIsLoading(false);
  }, []);

  const handleAnimationComplete = () => {
    setShowIntro(false);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        {showIntro ? (
          <IntroAnimation onAnimationComplete={handleAnimationComplete} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Product />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
