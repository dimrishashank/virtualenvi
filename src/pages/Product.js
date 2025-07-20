import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import vrHeadsetImage from '../assets/qspwrsh7.png';
import logoImage from '../assets/Logo.png';

function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const screenshots = [
    {
      src: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "VR Environment 1",
      title: "Mystical Forest",
      description: "Explore enchanted forests with magical creatures"
    },
    {
      src: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "VR Environment 2", 
      title: "Space Adventure",
      description: "Journey through distant galaxies and space stations"
    },
    {
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "VR Environment 3",
      title: "Underwater World", 
      description: "Dive into the depths of virtual ocean environments"
    },
    {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "VR Environment 4",
      title: "City Explorer",
      description: "Navigate through futuristic cityscapes and urban environments"
    }
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach((el) => observer.observe(el));

    // Keyboard navigation for modal
    const handleKeyDown = (event) => {
      if (!isModalOpen) return;
      
      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Tab functionality for specs section
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    const handleTabClick = (e) => {
      const targetTab = e.target.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      e.target.classList.add('active');
      document.getElementById(targetTab)?.classList.add('active');
    };

    tabButtons.forEach(btn => {
      btn.addEventListener('click', handleTabClick);
    });

    // Platform tabs functionality for new specs section
    const platformTabs = document.querySelectorAll('.platform-tab');
    const platformContents = document.querySelectorAll('.platform-content');

    const handlePlatformTabClick = (e) => {
      const tab = e.currentTarget;
      const platform = tab.getAttribute('data-platform');
      
      // Remove active class from all tabs and contents
      platformTabs.forEach(t => t.classList.remove('active'));
      platformContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      document.getElementById(`${platform}-content`)?.classList.add('active');
    };

    platformTabs.forEach(tab => {
      tab.addEventListener('click', handlePlatformTabClick);
    });

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      document.removeEventListener('keydown', handleKeyDown);
      tabButtons.forEach(btn => {
        btn.removeEventListener('click', handleTabClick);
      });
      platformTabs.forEach(tab => {
        tab.removeEventListener('click', handlePlatformTabClick);
      });
    };
  }, [isModalOpen]);

  return (
    <>
      <Header />
      <div className="modern-product-page">
        {/* Modern Animated Background */}
        <div className="dynamic-background">
          <div className="floating-shapes">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`shape shape-${i + 1}`}></div>
            ))}
          </div>
          <div className="gradient-mesh"></div>
        </div>

        {/* Hero Section with Modern Layout */}
        <section className="hero-modern">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <span>🚀 Revolutionary VR Experience</span>
              </div>
              <h1 className="hero-title">
                <span className="gradient-text">Mayatopia</span>
                <br />VR Universe
              </h1>
              <p className="hero-description">
                Step into breathtaking virtual worlds with cutting-edge technology. 
                Experience immersive storytelling, interactive environments, and 
                social VR features that redefine digital reality.
              </p>
              


              <div className="hero-actions">
                <div className="download-badges">
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="store-badge google-play">
                    <div className="badge-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"/>
                        <path d="M12 23C15.24 23 17.955 21.935 19.28 20.34L15.725 17.575C14.74 18.235 13.48 18.625 12 18.625C8.875 18.625 6.225 16.68 5.355 13.9H1.67V16.74C2.97 19.325 7.24 23 12 23Z"/>
                        <path d="M5.355 13.9C5.13 13.24 5 12.535 5 11.8C5 11.065 5.13 10.36 5.355 9.7V6.86H1.67C0.89 8.415 0.46 10.155 0.46 11.8C0.46 13.445 0.89 15.185 1.67 16.74L5.355 13.9Z"/>
                        <path d="M12 4.375C13.615 4.375 15.065 4.93 16.205 5.715L19.36 2.56C17.95 1.285 15.24 0.46 12 0.46C7.24 0.46 2.97 4.135 1.67 6.86L5.355 9.7C6.225 6.92 8.875 4.375 12 4.375Z"/>
                      </svg>
                    </div>
                    <div className="badge-text">
                      <span className="badge-subtitle">Get it on</span>
                      <span className="badge-title">Google Play</span>
                    </div>
                  </a>
                  
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="store-badge app-store">
                    <div className="badge-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                      </svg>
                    </div>
                    <div className="badge-text">
                      <span className="badge-subtitle">Download on the</span>
                      <span className="badge-title">App Store</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="VR App Interface" />
                    <div className="screen-overlay"></div>
                  </div>
                </div>
                <div className="floating-elements">
                  <div className="float-card card-2">
                    <span>Real-time Physics</span>
                  </div>
                  <div className="float-card card-3">
                    <span>Social VR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Features Grid */}
        <section className="features-modern">
          <div className="features-container">
            <div className="section-header">
              <span className="section-badge">Features</span>
              <h2 className="section-title">Why Choose Mayatopia VR?</h2>
              <p className="section-subtitle">
                Experience the next generation of virtual reality with features designed for the modern world
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card primary">
                <div className="feature-icon">
                  <div className="icon-bg gradient-1">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <h3>4K Virtual Worlds</h3>
                <p>Explore stunning ultra-high-definition environments with photorealistic graphics and immersive lighting</p>
                <div className="feature-stats">
                  <span>100+ Environments</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <div className="icon-bg gradient-2">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <h3>Real-time Physics</h3>
                <p>Advanced physics engine providing realistic interactions with virtual objects and environments</p>
                <div className="feature-stats">
                  <span>60 FPS Guaranteed</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <div className="icon-bg gradient-3">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.002 2.002 0 0 0 18.06 7c-.72 0-1.38.37-1.75.99L14.5 12.5 16 16v6h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6h2.5L8.46 8.37A2.002 2.002 0 0 0 6.56 7c-.72 0-1.38.37-1.75.99L3 12.5 4.5 16v6h3z"/>
                    </svg>
                  </div>
                </div>
                <h3>Social VR</h3>
                <p>Connect with friends worldwide in shared virtual spaces with voice chat and collaborative experiences</p>
                <div className="feature-stats">
                  <span>Multi-player Ready</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <div className="icon-bg gradient-4">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </div>
                </div>
                <h3>Cross-Platform</h3>
                <p>Seamless experience across all VR devices including mobile VR, standalone headsets, and PC VR</p>
                <div className="feature-stats">
                  <span>All Devices Supported</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Gallery */}
        <section className="gallery-modern">
          <div className="gallery-container">
            <div className="section-header">
              <span className="section-badge">Screenshots</span>
              <h2 className="section-title">Experience Preview</h2>
            </div>
            
            <div className="screenshot-grid">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="screenshot-card" onClick={() => openModal(index)}>
                  <div className="screenshot-image">
                    <img src={screenshot.src} alt={screenshot.alt} />
                    <div className="screenshot-overlay">
                      <div className="overlay-content">
                        <h4>{screenshot.title}</h4>
                        <p>{screenshot.description}</p>
                        <button className="view-btn">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          View Full Size
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {isModalOpen && (
          <div className="image-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <button className="modal-nav modal-prev" onClick={prevImage}>‹</button>
              <button className="modal-nav modal-next" onClick={nextImage}>›</button>
              
              <div className="modal-image-container">
                <img 
                  src={screenshots[currentImageIndex].src} 
                  alt={screenshots[currentImageIndex].alt}
                  className="modal-image"
                />
                <div className="modal-info">
                  <h3>{screenshots[currentImageIndex].title}</h3>
                  <p>{screenshots[currentImageIndex].description}</p>
                </div>
              </div>
              
              <div className="modal-thumbnails">
                {screenshots.map((screenshot, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img src={screenshot.src} alt={screenshot.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modern App Specifications */}
        <section className="app-specs-modern">
          <div className="specs-container-modern">
            <div className="specs-header-modern">
              <div className="section-badge">Technical Specifications</div>
              <h2 className="section-title">App Details & Requirements</h2>
              <p className="section-subtitle">
                Everything you need to know about our VR application and system compatibility
              </p>
            </div>
            
            <div className="specs-layout-modern">
              {/* App Information Cards */}
              <div className="app-info-section">
                <h3 className="subsection-title">App Information</h3>
                <div className="info-cards-grid">
                  <div className="info-card featured">
                    <div className="card-header">
                      <div className="card-icon version">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div className="card-badge">Latest</div>
                    </div>
                    <div className="card-content">
                      <h4>Version 2.1.0</h4>
                      <p>Latest stable release with enhanced VR features and performance improvements</p>
                      <div className="card-stats">
                        <span className="release-date">Released: Dec 2024</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="info-card">
                    <div className="card-header">
                      <div className="card-icon size">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="card-content">
                      <h4>Download Size</h4>
                      <p>450 MB compressed download</p>
                      <div className="card-stats">
                        <span>Installed: ~1.2 GB</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="info-card highlight">
                    <div className="card-header">
                      <div className="card-icon rating">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div className="card-badge premium">Premium</div>
                    </div>
                    <div className="card-content">
                      <h4>4.8★ Rating</h4>
                      <p>Highly rated by 2,340+ users</p>
                      <div className="card-stats">
                        <div className="rating-bar">
                          <div className="rating-fill" style={{width: '96%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="info-card">
                    <div className="card-header">
                      <div className="card-icon downloads">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="card-content">
                      <h4>50K+ Downloads</h4>
                      <p>Active community of VR enthusiasts</p>
                      <div className="card-stats">
                        <span>Growing by 500+ weekly</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Requirements */}
              <div className="requirements-section-modern">
                <h3 className="subsection-title">System Requirements</h3>
                <div className="requirements-tabs-modern">
                  <div className="platform-tab active" data-platform="android">
                    <div className="tab-icon android">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.523 15.3414c-.4878 0-.8823-.4086-.8823-.8941 0-.4967.3945-.8941.8823-.8941.4878 0 .8823.3974.8823.8941 0 .4855-.3945.8941-.8823.8941m-11.046 0c-.4878 0-.8823-.4086-.8823-.8941 0-.4967.3945-.8941.8823-.8941.4878 0 .8823.3974.8823.8941 0 .4855-.3945.8941-.8823.8941m11.405-6.02l1.997-3.5c.3834-.6745-.1343-1.5121-.8678-1.5121-.6008 0-1.1264.3521-1.3485.8941L15.939 8.3023c-.8678-.2789-1.8356-.4298-2.9391-.4298-1.1035 0-2.0713.1509-2.9391.4298L8.2678 4.3094c-.2222-.542-.7477-.8941-1.3485-.8941-.7335 0-1.2512.8376-.8678 1.5121l1.997 3.5C5.854 9.1237 4.187 11.1971 4.187 13.6914h15.625c0-2.4943-1.6666-4.5677-3.8708-5.3527"/>
                      </svg>
                    </div>
                    <span>Android</span>
                  </div>
                  <div className="platform-tab" data-platform="ios">
                    <div className="tab-icon ios">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5Z"/>
                      </svg>
                    </div>
                    <span>iOS</span>
                  </div>
                </div>
                
                <div className="platform-content active" id="android-content">
                  <div className="requirements-modern-grid">
                    <div className="req-card primary">
                      <div className="req-header">
                        <div className="req-icon os">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14,12H10V10H14M14,16H10V14H14M20,8H17.19C16.74,7.22 16.12,6.55 15.37,6.04L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.04,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6.04C7.88,6.55 7.26,7.22 6.81,8H4V10H6.09C6.04,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.04,15.67 6.09,16H4V18H6.81C7.85,19.79 9.78,21 12,21C14.22,21 16.15,19.79 17.19,18H20V16H17.91C17.96,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.96,10.33 17.91,10H20V8Z"/>
                          </svg>
                        </div>
                        <div className="req-status supported">✓ Supported</div>
                      </div>
                      <h5>Operating System</h5>
                      <p>Android 8.0+ (API Level 26)</p>
                      <div className="req-details">
                        <span>Recommended: Android 10+</span>
                      </div>
                    </div>
                    
                    <div className="req-card">
                      <div className="req-header">
                        <div className="req-icon memory">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6,2V8H6V8L10,12L6,16V16H6V22H18V16H18V16L14,12L18,8V8H18V2H6M16,4V6H8V4H16M8,18V20H16V18H8Z"/>
                          </svg>
                        </div>
                        <div className="req-status minimum">Min</div>
                      </div>
                      <h5>Memory (RAM)</h5>
                      <p>4GB minimum required</p>
                      <div className="req-details">
                        <span>6GB+ for optimal performance</span>
                      </div>
                    </div>
                    
                    <div className="req-card">
                      <div className="req-header">
                        <div className="req-icon graphics">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M5,6H14V11H5V6M15,6H19V8H15V6M19,9V14H15V9H19M5,12H11V14H5V12M12,12H14V14H12V12Z"/>
                          </svg>
                        </div>
                        <div className="req-status required">Required</div>
                      </div>
                      <h5>Graphics API</h5>
                      <p>OpenGL ES 3.2 support</p>
                      <div className="req-details">
                        <span>Vulkan API support preferred</span>
                      </div>
                    </div>
                    
                    <div className="req-card">
                      <div className="req-header">
                        <div className="req-icon sensors">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9C4,7.89 4.89,7 6,7H7V9H6V21H18V9H17V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z"/>
                          </svg>
                        </div>
                        <div className="req-status essential">Essential</div>
                      </div>
                      <h5>Motion Sensors</h5>
                      <p>Gyroscope & Accelerometer</p>
                      <div className="req-details">
                        <span>For head tracking & VR controls</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="platform-content" id="ios-content">
                  <div className="requirements-modern-grid">
                    <div className="req-card primary">
                      <div className="req-header">
                        <div className="req-icon os">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5Z"/>
                          </svg>
                        </div>
                        <div className="req-status supported">✓ Supported</div>
                      </div>
                      <h5>Operating System</h5>
                      <p>iOS 13.0 or later</p>
                      <div className="req-details">
                        <span>Recommended: iOS 15+</span>
                      </div>
                    </div>
                    
                    <div className="req-card">
                      <div className="req-header">
                        <div className="req-icon device">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16,1H8A3,3 0 0,0 5,4V20A3,3 0 0,0 8,23H16A3,3 0 0,0 19,20V4A3,3 0 0,0 16,1M16,21H8A1,1 0 0,1 7,20V4A1,1 0 0,1 8,3H16A1,1 0 0,1 17,4V20A1,1 0 0,1 16,21Z"/>
                          </svg>
                        </div>
                        <div className="req-status minimum">Min</div>
                      </div>
                      <h5>Device Model</h5>
                      <p>iPhone 8 or newer</p>
                      <div className="req-details">
                        <span>iPhone 12+ recommended</span>
                      </div>
                    </div>
                    
                    <div className="req-card">
                      <div className="req-header">
                        <div className="req-icon processor">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17,17H7V7H17M21,11V9H19V7C19,5.89 18.1,5 17,5H15V3H13V5H11V3H9V5H7C5.89,5 5,5.89 5,7V9H3V11H5V13H3V15H5V17C5,18.1 5.89,19 7,19H9V21H11V19H13V21H15V19H17A2,2 0 0,0 19,17V15H21V13H19V11M13,13H11V11H13"/>
                          </svg>
                        </div>
                        <div className="req-status required">Required</div>
                      </div>
                      <h5>Processor</h5>
                      <p>A12 Bionic chip or newer</p>
                      <div className="req-details">
                        <span>A15+ for enhanced features</span>
                      </div>
                    </div>
                    
                    <div className="req-card">
                      <div className="req-header">
                        <div className="req-icon ar">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                          </svg>
                        </div>
                        <div className="req-status essential">Essential</div>
                      </div>
                      <h5>AR Framework</h5>
                      <p>ARKit 4.0+ compatible</p>
                      <div className="req-details">
                        <span>For advanced AR/VR features</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="performance-section">
                <h3 className="subsection-title">Performance Metrics</h3>
                <div className="performance-grid">
                  <div className="metric-card">
                    <div className="metric-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,12.5L16,7.5H13V4H11V7.5H8L12,12.5Z"/>
                      </svg>
                    </div>
                    <h4>Frame Rate</h4>
                    <div className="metric-value">60 FPS</div>
                    <p>Consistent smooth performance</p>
                  </div>
                  
                  <div className="metric-card">
                    <div className="metric-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,19V17C7.5,16.8 5,14.4 5,11.5A6.5,6.5 0 0,1 11.5,5H12.5A6.5,6.5 0 0,1 19,11.5V12.5C19,15.54 16.54,18 13.5,18H12V19H11Z"/>
                      </svg>
                    </div>
                    <h4>Latency</h4>
                    <div className="metric-value">&lt; 20ms</div>
                    <p>Ultra-low motion-to-photon delay</p>
                  </div>
                  
                  <div className="metric-card">
                    <div className="metric-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z"/>
                      </svg>
                    </div>
                    <h4>Resolution</h4>
                    <div className="metric-value">4K Ready</div>
                    <p>Up to 3840×2160 rendering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern CTA */}
        <section className="cta-modern">
          <div className="cta-container">
            <div className="cta-content">
              <div className="cta-badge">
                <span>🚀 Ready to start?</span>
              </div>
              <h2 className="cta-title">Enter the Virtual Universe</h2>
              <p className="cta-description">
                Join thousands of users already exploring infinite virtual worlds. 
                Download Mayatopia VR now and begin your journey into the future.
              </p>
              
              <div className="cta-actions">
                <div className="download-section">
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="download-btn primary">
                    <span className="btn-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"/>
                      </svg>
                    </span>
                    <span>Download for Android</span>
                  </a>
                  
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="download-btn primary">
                    <span className="btn-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5Z"/>
                      </svg>
                    </span>
                    <span>Download for iOS</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="cta-visual">
              <div className="floating-phones">
                <div className="phone-float phone-1">
                  <img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="VR Scene 1" />
                </div>
                <div className="phone-float phone-2">
                  <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="VR Scene 2" />
                </div>
                <div className="phone-float phone-3">
                  <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="VR Scene 3" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Product;
