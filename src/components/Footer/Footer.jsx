import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { LegalModal } from '../LegalModal/LegalModal';
import { useCursor } from '../../context/CursorContext';
import './Footer.css';

export function Footer() {
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'privacy' });
  const { setCursor, resetCursor } = useCursor();

  const openLegal = (type) => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegal = () => {
    setLegalModal({ isOpen: false, type: 'privacy' });
  };

  return (
    <>
      <footer className="footer-section">
        <div className="container footer-container">
          <div className="footer-brand-col">
            <span className="footer-brand-title">{PORTFOLIO_DATA.personal.name}</span>
            <span className="footer-brand-role">{PORTFOLIO_DATA.personal.title}</span>
            <p className="footer-brand-location">Hyderabad, Telangana, India • Global Remote Services</p>
          </div>

          <div className="footer-nav-col">
            <a href="#hero">HOME</a>
            <a href="#work">WORK</a>
            <a href="#capabilities">CAPABILITIES</a>
            <a href="#requirements">REQUIREMENTS</a>
            <a href="#tools">TOOLS</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#contact">CONTACT</a>
          </div>

          <div className="footer-legal-links">
            <button 
              onClick={() => openLegal('privacy')}
              className="legal-footer-btn"
              onMouseEnter={() => setCursor('PRIVACY')}
              onMouseLeave={resetCursor}
            >
              PRIVACY POLICY
            </button>
            <span className="legal-dot">•</span>
            <button 
              onClick={() => openLegal('terms')}
              className="legal-footer-btn"
              onMouseEnter={() => setCursor('TERMS')}
              onMouseLeave={resetCursor}
            >
              TERMS & CONDITIONS
            </button>
          </div>

          <div className="footer-bottom-row">
            <span>© {PORTFOLIO_DATA.personal.year} Mohan Racharla. All rights reserved. Full-Stack Freelance Software Developer.</span>
            <span className="footer-design-tag">HIGH-PERFORMANCE WEB & APP ENGINEERING</span>
          </div>
        </div>
      </footer>

      <LegalModal 
        isOpen={legalModal.isOpen} 
        onClose={closeLegal} 
        type={legalModal.type} 
      />
    </>
  );
}
