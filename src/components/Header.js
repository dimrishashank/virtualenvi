import React from 'react';
import Logo from '../assets/Logo.png';

function Header() {
  return (
    <header className="ve-header">
      <a href="/" className="ve-logo-link">
        <div className="ve-logo">
          <img src={Logo} alt="VirtualEnvi Logo" style={{ height: '60px' }} />
          <h1 className="ve-logo-text">Mayatopia</h1>
        </div>
      </a>
      <nav className="ve-nav">
        <a href="/about">About Us</a>
        <a href="/blogs">Blogs</a>
        <a href="/contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;