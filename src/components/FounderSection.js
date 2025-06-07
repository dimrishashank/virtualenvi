import React from 'react';
import ArushiImg from '../assets/Arushi_img.png';

function FounderSection() {
  return (
    <section className="ve-founder">
      <div className="ve-founder-info">
        <h2>Our Founder</h2>
        <p>
          <strong>Meet Aarushi</strong>, the visionary behind our metaverse startup. Currently a student at the University of Petroleum and Energy Studies (UPES), Aarushi is pursuing a career as a DevSecOps Engineer. With a passion for design and a long-standing dream of establishing her own studio, she combines technical expertise with creative flair to lead our innovative journey into the metaverse. <a href="https://your-link-here.com" className="ve-founder-read-more" target="_blank" rel="noopener noreferrer">Read More.</a>
        </p>
        <div className="ve-founder-socials">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" />
          </a>
          <a href="mailto:someone@email.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="Gmail" />
          </a>
        </div>
      </div>
      <div className="ve-founder-image">
        <img
          src={ArushiImg}
          alt="Founder Aarushi"
        />
      </div>
    </section>
  );
}

export default FounderSection;