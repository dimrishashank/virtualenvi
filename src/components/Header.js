import React from 'react';
import Logo from '../assets/Logo.png';

function Header() {
  return (
    <header className="ve-header">
      <div className="ve-logo">
        <img src={Logo} alt="VirtualEnvi Logo" style={{ height: '60px' }} />
      </div>
      <nav className="ve-nav">
        <a href="/">Home</a>
        <a href="/blogs">Blogs</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;