import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-brand-col">
          <span className="footer-brand-title">{PORTFOLIO_DATA.personal.name}</span>
          <span className="footer-brand-role">{PORTFOLIO_DATA.personal.title}</span>
        </div>

        <div className="footer-nav-col">
          <a href="#hero">HOME</a>
          <a href="#work">WORK</a>
          <a href="#capabilities">CAPABILITIES</a>
          <a href="#tools">TOOLS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="footer-bottom-row">
          <span>© {PORTFOLIO_DATA.personal.year} Mohan Racharla. Built with React, Vite & GSAP.</span>
          <span className="footer-design-tag">AWWWARDS QUALITY / MOTION EXPERIMENTAL</span>
        </div>
      </div>
    </footer>
  );
}
