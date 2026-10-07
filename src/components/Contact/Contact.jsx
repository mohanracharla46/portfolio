import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import { ArrowUpRight, Copy, Check, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons/SocialIcons';
import './Contact.css';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-top-label">
          <div className="section-label">05 / CONTACT</div>
        </div>

        <div className="contact-main-wrapper">
          <h2 className="contact-huge-headline">
            HAVE <br />
            AN <br />
            IDEA?
          </h2>

          <div className="contact-sub-cta">
            <h3 className="contact-sub-title">LET'S BUILD IT.</h3>

            <div className="contact-cta-box">
              <a 
                href={`mailto:${PORTFOLIO_DATA.personal.contactEmail}`}
                className="magnetic-contact-btn"
                onMouseEnter={() => setCursor('SAY HELLO', 'hover')}
                onMouseLeave={resetCursor}
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={24} />
              </a>

              <div className="contact-quick-buttons">
                <button 
                  className="copy-email-btn" 
                  onClick={handleCopyEmail}
                  onMouseEnter={() => setCursor('COPY EMAIL')}
                  onMouseLeave={resetCursor}
                >
                  {copiedEmail ? <Check size={16} className="text-accent" /> : <Mail size={16} />}
                  <span>{copiedEmail ? 'EMAIL COPIED!' : PORTFOLIO_DATA.personal.contactEmail}</span>
                </button>

                <a 
                  href={`tel:${PORTFOLIO_DATA.personal.phoneRaw}`}
                  className="copy-email-btn phone-btn"
                  onClick={handleCopyPhone}
                  onMouseEnter={() => setCursor('CALL / COPY')}
                  onMouseLeave={resetCursor}
                >
                  {copiedPhone ? <Check size={16} className="text-accent" /> : <Phone size={16} />}
                  <span>{copiedPhone ? 'PHONE COPIED!' : PORTFOLIO_DATA.personal.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-links-bar">
          <div className="social-links-group">
            <a 
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="social-hover-link"
              onMouseEnter={() => setCursor('GITHUB')}
              onMouseLeave={resetCursor}
            >
              <GithubIcon size={18} />
              <span>GITHUB</span>
              <ArrowUpRight size={14} className="link-arrow" />
            </a>

            <a 
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="social-hover-link"
              onMouseEnter={() => setCursor('LINKEDIN')}
              onMouseLeave={resetCursor}
            >
              <LinkedinIcon size={18} />
              <span>LINKEDIN</span>
              <ArrowUpRight size={14} className="link-arrow" />
            </a>

            <a 
              href={`mailto:${PORTFOLIO_DATA.personal.contactEmail}`}
              className="social-hover-link"
              onMouseEnter={() => setCursor('EMAIL')}
              onMouseLeave={resetCursor}
            >
              <Mail size={18} />
              <span>EMAIL</span>
              <ArrowUpRight size={14} className="link-arrow" />
            </a>

            <a 
              href={`tel:${PORTFOLIO_DATA.personal.phoneRaw}`}
              className="social-hover-link"
              onMouseEnter={() => setCursor('CALL')}
              onMouseLeave={resetCursor}
            >
              <Phone size={18} />
              <span>{PORTFOLIO_DATA.personal.phone}</span>
              <ArrowUpRight size={14} className="link-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
