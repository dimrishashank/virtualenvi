import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactForm = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach(element => observer.observe(element));

    return () => {
      revealElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="ve-contact-container">
      <div className="ve-contact-header reveal-element fade-bottom">
        <h1>Contact</h1>
        <p>The time to create is now</p>
      </div>

      <div className="ve-contact-content">
        <div className="ve-contact-info reveal-element fade-right">
          <div className="contact-info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>India</p>
          </div>
          <div className="contact-info-item">
            <FaPhone className="contact-icon" />
            <p>Phone</p>
          </div>
          <div className="contact-info-item">
            <FaEnvelope className="contact-icon" />
            <p>Email</p>
          </div>
          
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="social-icon" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <form className="ve-contact-form reveal-element fade-left">
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email *" required />
          </div>

          <div className="form-group">
            <input type="tel" placeholder="Phone" />
          </div>

          <div className="form-group">
            <textarea placeholder="Message" rows="4"></textarea>
          </div>

          <button type="submit" className="send-button">Send</button>
        </form>
      </div>

      <div className="ve-contact-map reveal-element fade-bottom">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3504113097395!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1624542977269!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;