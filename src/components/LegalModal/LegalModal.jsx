import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import './LegalModal.css';

export function LegalModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="legal-modal-overlay" onClick={onClose}>
      <div className="legal-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="legal-modal-header">
          <div className="legal-header-title">
            {isPrivacy ? <ShieldCheck className="text-accent" size={20} /> : <FileText className="text-accent" size={20} />}
            <h3>{isPrivacy ? 'PRIVACY POLICY' : 'TERMS & CONDITIONS'}</h3>
          </div>
          <button className="legal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="legal-modal-body">
          {isPrivacy ? (
            <div className="legal-content">
              <p className="legal-intro">
                Last Updated: October 2026. This Privacy Policy outlines how Mohan Racharla ("we", "our", or "us") manages and protects your information when visiting our website or submitting project inquiries.
              </p>

              <h4>1. Information We Collect</h4>
              <p>
                We only collect information that you voluntarily provide when contacting us via email, telephone, or through the interactive project requirements scope form. This includes your name, email address, phone number, and project specifications.
              </p>

              <h4>2. How Your Information Is Used</h4>
              <p>
                Your information is used strictly to respond to project inquiries, provide development estimates, schedule consultations, and deliver freelance software services. We never sell, rent, or trade your personal data to third parties.
              </p>

              <h4>3. Cookies & Analytics</h4>
              <p>
                Our site uses standard technical cookies and minimal privacy-focused performance telemetry to optimize page loading speeds and Core Web Vitals performance.
              </p>

              <h4>4. Data Security & Contact</h4>
              <p>
                We implement industry-standard encryption protocols (HTTPS/TLS) across all communications. If you have questions regarding your data, contact us at <strong>racharlamohan16@gmail.com</strong>.
              </p>
            </div>
          ) : (
            <div className="legal-content">
              <p className="legal-intro">
                Last Updated: October 2026. By accessing or utilizing the services of Mohan Racharla, you agree to comply with and be bound by these Terms & Conditions.
              </p>

              <h4>1. Scope of Development Services</h4>
              <p>
                Mohan Racharla provides freelance full-stack software development, custom web application engineering, SaaS platform building, and technical consultation services under mutually agreed statement of work (SOW) terms.
              </p>

              <h4>2. Intellectual Property Rights</h4>
              <p>
                Upon final project completion and invoice settlement, all client-specific custom code, designs, and proprietary assets are transferred to the client, unless otherwise agreed.
              </p>

              <h4>3. Project Estimates & Turnaround</h4>
              <p>
                Estimated delivery timelines (e.g. 3-5 days for websites, 1-2 weeks for web apps) are provided in good faith based on defined client requirements. Scope modifications may adjust timeline estimates.
              </p>

              <h4>4. Contact & Governing Law</h4>
              <p>
                These terms are governed by the laws of India. For inquiries regarding development contracts, contact <strong>racharlamohan16@gmail.com</strong> or call +91 8464069091.
              </p>
            </div>
          )}
        </div>

        <div className="legal-modal-footer">
          <button className="legal-confirm-btn" onClick={onClose}>
            I UNDERSTAND & AGREE
          </button>
        </div>
      </div>
    </div>
  );
}
