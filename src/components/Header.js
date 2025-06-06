import React from 'react';

function Header() {
  return (
    <header className="ve-header">
      <div className="ve-logo">
        <span className="ve-logo-main">VIRTUAL</span>
        <span className="ve-logo-highlight">ENVI</span>
      </div>
      <nav className="ve-nav">
        <a href="#">Home</a>
        <a href="#">Blogs</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;