import React, { useState } from 'react';
import { MenuOverlay } from './MenuOverlay';
import { useCursor } from '../../context/CursorContext';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import './Navigation.css';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  return (
    <>
      <header className="navbar-header">
        <div className="navbar-container">
          <a 
            href="#hero" 
            className="navbar-brand"
            onMouseEnter={() => setCursor('TOP')}
            onMouseLeave={resetCursor}
          >
            <span className="brand-code">{PORTFOLIO_DATA.personal.shortName}</span>
            <span className="brand-dot"></span>
          </a>

          <button 
            className="navbar-menu-trigger" 
            onClick={() => setIsMenuOpen(true)}
            onMouseEnter={() => setCursor('OPEN', 'hover')}
            onMouseLeave={resetCursor}
            aria-label="Open Navigation Menu"
          >
            <span className="menu-btn-text">MENU</span>
            <div className="menu-btn-lines">
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </button>
        </div>
      </header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
