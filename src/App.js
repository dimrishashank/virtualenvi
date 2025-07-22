import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import IntroAnimation from './components/IntroAnimation/IntroAnimation';
import './App.css';

// Custom animated loader
function AnimatedLoader() {
  return (
    <div className="animated-loader">
      <div className="loader-dot"></div>
      <div className="loader-dot"></div>
      <div className="loader-dot"></div>
    </div>
  );
}

// ScrollToTopButton component
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="scroll-to-top"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          onClick={scrollToTop}
        >
          ↑ Top
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function ProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="progress-bar" style={{ width: `${scroll}%` }} />
  );
}

function AppContent({ theme, toggleTheme, showIntro, handleAnimationComplete }) {
  const location = useLocation();
  return (
    <div className="App">
      <ProgressBar />
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
      <ScrollToTopButton />
      
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <IntroAnimation onAnimationComplete={handleAnimationComplete} />
          </motion.div>
        ) : (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Product />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  const handleAnimationComplete = () => setShowIntro(false);
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  if (isLoading) {
    return <AnimatedLoader />;
  }

  return (
    <Router>
      <AppContent
        theme={theme}
        toggleTheme={toggleTheme}
        showIntro={showIntro}
        handleAnimationComplete={handleAnimationComplete}
      />
    </Router>
  );
}

export default App;
