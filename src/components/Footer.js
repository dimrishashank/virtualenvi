import React from "react";

function Footer() {
  return (
    <footer className="ve-footer">
      <div className="ve-footer-main">
        <div className="ve-footer-links">
          <div>
            <h4>Navigation</h4>
            <ul>
              <li><a href="#" role="button" tabIndex="0">Home</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#!">Terms of Use</a></li>
              <li><a href="#!">Privacy Policy</a></li>
              <li><a href="#!">Sitemap</a></li>
              <li><a href="#!">Security Regulations</a></li>
            </ul>
          </div>
          <div className="ve-footer-contact-btn">
            <button>Contact Us</button>
          </div>
        </div>
        <div className="ve-footer-info">
          <div className="ve-footer-location">
            <span role="img" aria-label="location" className="ve-footer-location-icon">📍</span>
            Dehradun, Uttarakhand, India
          </div>
          <div className="ve-footer-copyright">
            © 2024 | Virtual Envi Pvt Ltd<br />
            All Rights Reserved
          </div>
          <div className="ve-footer-socials">
            <a href="#!"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#!"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" /></a>
            <a href="#!"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" /></a>
            <a href="#!"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;