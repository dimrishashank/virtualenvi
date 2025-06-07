import React from 'react';
import VisionIcon from '../assets/Vision (Traced).png';
import RectangleIcon from '../assets/Rectangle 25 (Traced).png';

function MissionSection() {
  return (
    <section className="ve-mission">
      <div className="ve-mission-content">
        <span className="ve-mission-icon">
          <img src={VisionIcon} alt="Vision" className="ve-mission-img" />
        </span>
        <p>
          To create a space where people could escape reality, explore new horizons and find infinite adventure.
        </p>
      </div>
      <div className="ve-mission-divider"></div>
      <div className="ve-mission-content">
        <span className="ve-mission-icon">
          <img src={RectangleIcon} alt="Metaverse" className="ve-mission-img" />
        </span>
        <p>
          Building a next-level metaverse! We create amazing virtual worlds where anyone can explore, connect, and have adventures – all from home.
        </p>
      </div>
    </section>
  );
}

export default MissionSection;