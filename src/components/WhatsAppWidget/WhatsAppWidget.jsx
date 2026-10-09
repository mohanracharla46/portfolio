import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import { X, Send } from 'lucide-react';
import './WhatsAppWidget.css';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  const phoneRaw = PORTFOLIO_DATA.personal.phoneRaw || '8464069091';
  const defaultMsg = encodeURIComponent("Hi Mohan, I visited your portfolio and would like to discuss a project!");
  const whatsappUrl = `https://wa.me/91${phoneRaw}?text=${defaultMsg}`;

  const toggleWidget = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="whatsapp-floating-root">
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="whatsapp-card-popup">
          <div className="wa-card-header">
            <div className="wa-avatar-box">
              <div className="wa-avatar-circle">MR</div>
              <span className="wa-online-pulse" title="Online now" />
            </div>
            <div className="wa-header-info">
              <span className="wa-name">Mohan Racharla</span>
              <span className="wa-status">Typically replies in minutes</span>
            </div>
            <button 
              className="wa-close-btn" 
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="wa-card-body">
            <div className="wa-chat-bubble">
              <p>
                👋 Hi there! Need a website, app, or custom software solution in a hurry? Let's chat on WhatsApp!
              </p>
              <span className="wa-time">Just now</span>
            </div>
          </div>

          <div className="wa-card-footer">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-chat-submit-btn"
              onMouseEnter={() => setCursor('CHAT ON WA', 'hover')}
              onMouseLeave={resetCursor}
            >
              <span>START CHAT ON WHATSAPP</span>
              <Send size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button (100% Authentic Official WhatsApp Icon) */}
      <button
        className={`whatsapp-trigger-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleWidget}
        onMouseEnter={() => setCursor('WHATSAPP', 'hover')}
        onMouseLeave={resetCursor}
        aria-label="Toggle WhatsApp Chat"
      >
        <span className="wa-btn-pulse-ring" aria-hidden="true" />
        
        {/* 100% Mathematically Centered Official WhatsApp Logo SVG */}
        <svg 
          className="wa-svg-icon" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="#FFFFFF"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.485 1.332 5.002l-1.415 5.163 5.281-1.385c1.464.798 3.116 1.22 4.792 1.221h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.667-1.038-5.175-2.924-7.062a9.923 9.923 0 0 0-7.069-2.939zm6.18 14.504c-.256.726-1.487 1.334-2.046 1.397-.52.059-1.19.076-1.928-.159-.441-.141-1.008-.329-1.734-.643-3.047-1.315-5.027-4.385-5.18-4.588-.151-.202-1.242-1.656-1.242-3.155 0-1.498.784-2.235 1.062-2.538.278-.303.606-.379.808-.379.202 0 .404.002.58.01.193.008.452-.073.707.538.261.626.892 2.176.97 2.333.078.157.13.34.025.55-.104.21-.157.34-.309.52-.152.18-.32.402-.457.54-.153.154-.312.32-.134.626.178.306.791 1.306 1.698 2.115 1.166 1.04 2.148 1.362 2.453 1.515.305.153.484.128.665-.08.181-.208.777-.905 1.033-1.215.256-.31.512-.258.863-.129.351.129 2.224 1.049 2.607 1.24.383.191.639.287.732.446.093.159.093.921-.163 1.647z"/>
        </svg>
      </button>
    </div>
  );
}
