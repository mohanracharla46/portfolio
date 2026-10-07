import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useCursor } from '../../context/CursorContext';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons/SocialIcons';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const MENU_ITEMS = [
  { number: '01', label: 'HOME', targetId: 'hero' },
  { number: '02', label: 'WORK', targetId: 'work' },
  { number: '03', label: 'CAPABILITIES', targetId: 'capabilities' },
  { number: '04', label: 'TOOLS', targetId: 'tools' },
  { number: '05', label: 'EXPERIENCE', targetId: 'experience' },
  { number: '06', label: 'ABOUT', targetId: 'about' },
  { number: '07', label: 'CONTACT', targetId: 'contact' },
];

export function MenuOverlay({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    if (!overlayRef.current) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';

      gsap.to(overlayRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.7,
        ease: 'power4.inOut'
      });

      gsap.fromTo(
        linksRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power3.out',
          delay: 0.35
        }
      );
    } else {
      document.body.style.overflow = '';

      gsap.to(overlayRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.6,
        ease: 'power4.inOut'
      });
    }
  }, [isOpen]);

  const handleNavClick = (targetId) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <div 
      ref={overlayRef} 
      className={`menu-overlay ${isOpen ? 'is-open' : ''}`}
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
    >
      <div className="menu-container">
        <div className="menu-header">
          <span className="menu-brand">{PORTFOLIO_DATA.personal.shortName} / NAVIGATION</span>
          <button 
            className="menu-close-btn" 
            onClick={onClose}
            onMouseEnter={() => setCursor('CLOSE')}
            onMouseLeave={resetCursor}
          >
            CLOSE [✕]
          </button>
        </div>

        <nav className="menu-nav">
          <ul className="menu-links-list">
            {MENU_ITEMS.map((item, index) => (
              <li 
                key={item.targetId}
                ref={(el) => (linksRef.current[index] = el)}
                className="menu-item"
              >
                <button 
                  onClick={() => handleNavClick(item.targetId)}
                  className="menu-link"
                  onMouseEnter={() => setCursor('GO', 'hover')}
                  onMouseLeave={resetCursor}
                >
                  <span className="menu-item-num">{item.number}</span>
                  <span className="menu-item-text">{item.label}</span>
                  <ArrowUpRight className="menu-item-icon" size={32} />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-footer">
          <div className="menu-socials">
            <span className="menu-social-title">CONNECT</span>
            <div className="menu-social-links">
              <a 
                href={PORTFOLIO_DATA.personal.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={() => setCursor('GITHUB')}
                onMouseLeave={resetCursor}
              >
                <GithubIcon size={18} /> GitHub
              </a>
              <a 
                href={PORTFOLIO_DATA.personal.linkedinUrl} 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={() => setCursor('LINKEDIN')}
                onMouseLeave={resetCursor}
              >
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a 
                href={`mailto:${PORTFOLIO_DATA.personal.contactEmail}`}
                onMouseEnter={() => setCursor('EMAIL')}
                onMouseLeave={resetCursor}
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <div className="menu-location">
            <span>{PORTFOLIO_DATA.personal.location}</span>
            <span>© {PORTFOLIO_DATA.personal.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
