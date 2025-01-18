import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title fade-in">
          Contact Me
        </h2>
        
        <div className="contact-card">
          <div className="contact-header">
            <h3>Let's work together!</h3>
            <p>
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a 
                href="mailto:mandresyrakotonanahary@gmail.com?subject=Hello&body=Hi Mandresy," 
                className="contact-value"
                target="_blank"
                rel="noopener noreferrer"
              >
                mandresyrakotonanahary@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <a 
                href="tel:034 81 718 64" 
                className="contact-value"
              >
                034 81 718 64
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <a 
                href="https://www.linkedin.com/in/mandresy-rakotonanahary-356a36259/"
                className="contact-value"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mandresy Rakotonanahary
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;