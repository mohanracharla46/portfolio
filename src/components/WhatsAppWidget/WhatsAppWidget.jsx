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
        
        {/* Official WhatsApp Logo SVG */}
        <svg 
          className="wa-svg-icon" 
          width="34" 
          height="34" 
          viewBox="0 0 32 32" 
          fill="none"
        >
          <path 
            fill="#FFFFFF" 
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      </button>
    </div>
  );
}
