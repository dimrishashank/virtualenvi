import React from 'react';

function EllipseBackground() {
  return (
    <div className="ellipse-bg-layer">
      <img
        src={require('../assets/Ellipse/Ellipse 68.png')}
        alt=""
        className="ellipse ellipse-hero"
        aria-hidden="true"
      />
      {/* Left Ellipse 66 behind Mission */}
      <img
        src={require('../assets/Ellipse/Ellipse 66.png')}
        alt=""
        className="ellipse ellipse-mission-left"
        aria-hidden="true"
      />
      {/* Right Ellipse 66 behind Mission */}
      <img
        src={require('../assets/Ellipse/Ellipse 66.png')}
        alt=""
        className="ellipse ellipse-mission-right"
        aria-hidden="true"
      />
      {/* Ellipse 69 below right side */}
      <img
        src={require('../assets/Ellipse/Ellipse 69.png')}
        alt=""
        className="ellipse ellipse-mission-below-right"
        aria-hidden="true"
      />
      {/* Ellipse 67 between BlogCardsSection and Footer */}
      <img
        src={require('../assets/Ellipse/Ellipse 67.png')}
        alt=""
        className="ellipse ellipse-blog-footer"
        aria-hidden="true"
      />
    </div>
  );
}

export default EllipseBackground;