import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import { MessageSquare, X, Send } from 'lucide-react';
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
              <X size={16} />
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

      {/* Main Floating Trigger Button */}
      <button
        className={`whatsapp-trigger-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleWidget}
        onMouseEnter={() => setCursor('WHATSAPP', 'hover')}
        onMouseLeave={resetCursor}
        aria-label="Toggle WhatsApp Chat"
      >
        <span className="wa-btn-pulse-ring" aria-hidden="true" />
        
        {/* Crisp WhatsApp SVG Icon */}
        <svg 
          className="wa-svg-icon" 
          width="26" 
          height="26" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.002 3.66 3.745-.993zm11.367-8.335c.095.157.14.364.08.56-.057.199-.379.791-.564.992-.185.202-.381.25-.67.24-.29-.01-1.285-.426-2.45-1.464-.908-.81-1.522-1.811-1.7-2.119-.178-.307-.019-.474.13-.62.134-.132.29-.344.435-.517.145-.173.193-.298.29-.494.095-.197.048-.368-.024-.515-.072-.147-.648-1.562-.888-2.138-.233-.56-.471-.484-.648-.493-.162-.008-.348-.01-.534-.01-.186 0-.488.07-.744.348-.256.277-.978.956-.978 2.33 0 1.374 1.001 2.701 1.14 2.887.14.186 1.968 3.006 4.768 4.215.666.288 1.187.46 1.593.589.67.213 1.28.183 1.761.111.536-.08 1.648-.674 1.88-1.326.232-.653.232-1.213.163-1.326z"/>
        </svg>
      </button>
    </div>
  );
}
