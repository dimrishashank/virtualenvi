import React from 'react';

function FounderSection() {
  return (
    <section className="ve-founder">
      <div className="ve-founder-info">
        <h2>Our Founder</h2>
        <p>
          <strong>Meet Aarushi</strong>, the visionary behind our metaverse startup. Currently a student at the University of Petroleum and Energy Studies (UPES), [Name] is pursuing a career as a DevSecOps Engineer. With a passion for design and a long-standing dream of establishing her own studio, she combines technical expertise with creative flair to lead our innovative journey into the metaverse. <b>Read More.</b>
        </p>
        <div className="ve-founder-socials">
          {/* Add social icons here */}
          <span>🌐</span>
          <span>🔗</span>
          <span>✖️</span>
          <span>✉️</span>
        </div>
      </div>
      <div className="ve-founder-image">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Founder"
        />
      </div>
    </section>
  );
}

export default FounderSection;