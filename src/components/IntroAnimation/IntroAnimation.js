import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './IntroAnimation.css';
import Logo from '../../assets/animation/Logo.png';
import VRHeadset from '../../assets/animation/image 3.png';

const IntroAnimation = ({ onAnimationComplete }) => {
  const [stage, setStage] = useState(1);

  // VR Headset animation with different speeds for initial and zoom phases
  const headsetAnimation = useSpring({
    from: { 
      opacity: 0,
      transform: 'scale(0.2) translateZ(-400px)'
    },
    to: { 
      opacity: stage >= 4 ? 0 : 1,
      transform: stage >= 4 
        ? 'scale(8) translateZ(800px)' // increased max zoom
        : stage === 3 
          ? 'scale(4.5) translateZ(500px)' // increased intermediate zoom
          : 'scale(1) translateZ(0px)',
    },
    config: { 
      tension: stage === 3 ? 180 : 60,
      friction: stage === 3 ? 8 : 15,
      duration: stage === 3 ? 800 : undefined
    }
  });

  // Logo animation with reduced max zoom
  const logoAnimation = useSpring({
    opacity: stage >= 2 ? 1 : 0,
    transform: stage >= 5
      ? 'translate(-120%, -50%) scale(1.2) translateZ(200px)' // reduced zoom and shift left
      : stage >= 4
        ? 'translate(-50%, -50%) scale(1.2) translateZ(200px)' // reduced max zoom
        : stage >= 3
          ? 'translate(-50%, -50%) scale(1) translateZ(150px)'
          : stage >= 2 
            ? 'translate(-50%, -50%) scale(0.4) translateZ(50px)'
            : 'translate(-50%, -50%) scale(0) translateZ(-100px)',
    config: { 
      tension: stage === 5 ? 100 : 80,
      friction: stage === 5 ? 17 : 12,
      duration: stage === 5 ? 800 : stage === 3 ? 1500 : undefined
    }
  });

  // Text animation with longer pause
  const textAnimation = useSpring({
    opacity: stage >= 5 ? 1 : 0,
    transform: stage >= 5 
      ? 'translate(20%, -50%) scale(1)' 
      : 'translate(50%, -50%) scale(0.8)',
    filter: stage >= 5 ? 'blur(0px)' : 'blur(10px)',
    config: { 
      tension: 100, // Reduced for smoother appearance
      friction: 16,
      duration: 600 // Set specific duration
    }
  });

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(2), 2500);    // Logo appears
    const timer2 = setTimeout(() => setStage(3), 3500);    // Start zoom
    const timer3 = setTimeout(() => setStage(4), 5000);    // Final transition
    const timer4 = setTimeout(() => setStage(5), 5800);    // Text reveal
    const timer5 = setTimeout(() => onAnimationComplete(), 8800); // Extended pause by 3 seconds

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <div className="intro-animation">
      <div className="animation-container">
        <animated.div style={headsetAnimation} className="headset-container">
          <img src={VRHeadset} alt="VR Headset" className="vr-headset" />
        </animated.div>
        
        <animated.div style={logoAnimation} className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </animated.div>

        <animated.div style={textAnimation} className="text-container">
          <span className="brand-text">Mayatopia</span>
        </animated.div>
      </div>
    </div>
  );
};

export default IntroAnimation;