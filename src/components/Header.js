import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <header className="ve-header">
      <a href="/" className="ve-logo-link">
        <div className="ve-logo">
          <img src={Logo} alt="VirtualEnvi Logo" style={{ height: '60px' }} />
          <h1 className="ve-logo-text">Mayatopia</h1>
        </div>
      </a>
      
      {/* Hamburger Menu Button */}
      <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      <nav className={`ve-nav ${isMenuOpen ? 'active' : ''}`}>
        <a href="/about" onClick={closeMenu}>About Us</a>
        <a href="/products" onClick={closeMenu}>Products</a>
        <a href="/blogs" onClick={closeMenu}>Blogs</a>
        <a href="/contact" onClick={closeMenu}>Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;