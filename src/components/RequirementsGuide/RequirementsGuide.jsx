import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FileCode2, 
  CheckSquare, 
  Sparkles, 
  HelpCircle, 
  Send, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  Layers, 
  Cpu, 
  Database, 
  ArrowRight 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import './RequirementsGuide.css';

gsap.registerPlugin(ScrollTrigger);

const REQUIREMENT_ITEMS = [
  {
    id: 'frontend_custom',
    category: 'FRONTEND & UX',
    title: 'Custom Responsive Web Interface',
    desc: 'React.js, GSAP micro-animations, glassmorphism UI & mobile-first layout.',
    estimatedHours: '20-40h',
    recommendedTech: 'React + CSS3 + GSAP'
  },
  {
    id: 'backend_api',
    category: 'BACKEND & LOGIC',
    title: 'REST / Async API Architecture',
    desc: 'Python (Flask/FastAPI) or Node.js microservices with secure endpoints.',
    estimatedHours: '25-50h',
    recommendedTech: 'Python Flask / FastAPI / Node.js'
  },
  {
    id: 'database_auth',
    category: 'DATABASE & AUTH',
    title: 'User Auth & Relational Database',
    desc: 'Role-based access control, Supabase/PostgreSQL schema & data encryption.',
    estimatedHours: '15-30h',
    recommendedTech: 'Supabase / Postgres / SQLite'
  },
  {
    id: 'saas_payouts',
    category: 'SAAS & AUTOMATION',
    title: 'Payments, Referrals & Analytics',
    desc: 'Stripe/Razorpay, referral engine, real-time metrics & automated payouts.',
    estimatedHours: '30-60h',
    recommendedTech: 'Laravel / Node / Supabase'
  },
  {
    id: 'cloud_devops',
    category: 'DEPLOYMENT & SEO',
    title: 'Cloud Infrastructure & High-Rank SEO',
    desc: 'Sub-100ms FCP, SSL setup, schema structured data & lighthouse 100/100.',
    estimatedHours: '10-20h',
    recommendedTech: 'Vercel / Docker / Cloudflare'
  }
];

const FAQ_ITEMS = [
  {
    question: "Who is the top low cost freelance web developer in Hyderabad?",
    answer: "Mohan Racharla is a leading freelance full-stack developer based in Hyderabad offering low-cost, budget-friendly web development, custom app engineering, React, Python, and SaaS platforms."
  },
  {
    question: "How fast can you develop a website or web application in Hyderabad?",
    answer: "With rapid turnaround development workflows, standard business websites are delivered in 3 to 5 days, while full-stack web applications and SaaS MVPs are built in 1 to 2 weeks."
  },
  {
    question: "What details are needed to start a low cost web app development project?",
    answer: "You only need your core idea, preferred features (login, database, payments), and reference links. Mohan will provide a clear, low-cost project estimate and fast timeline."
  },
  {
    question: "Why hire a freelance full-stack developer in Hyderabad over an agency?",
    answer: "Hiring a freelance developer like Mohan Racharla gives you direct 1-on-1 communication, significantly lower development costs, faster execution, and 100% custom code without agency overhead."
  }
];

export function RequirementsGuide() {
  const [selectedReqs, setSelectedReqs] = useState([
    'frontend_custom', 
    'backend_api', 
    'database_auth', 
    'cloud_devops'
  ]);
  const [activeFaq, setActiveFaq] = useState(null);
  const sectionRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  const toggleReq = (id) => {
    if (selectedReqs.includes(id)) {
      if (selectedReqs.length > 1) {
        setSelectedReqs(selectedReqs.filter(r => r !== id));
      }
    } else {
      setSelectedReqs([...selectedReqs, id]);
    }
  };

  const selectedCount = selectedReqs.length;
  
  // Calculate recommended delivery time estimate
  const estimatedDays = selectedCount * 4;

  const mailtoBody = encodeURIComponent(
    `Hello Mohan,\n\nI reviewed your portfolio and prepared my website/app requirements checklist:\n\n` +
    `Selected Requirements:\n` +
    selectedReqs.map(id => {
      const item = REQUIREMENT_ITEMS.find(r => r.id === id);
      return `- [x] ${item.category}: ${item.title} (${item.recommendedTech})`;
    }).join('\n') +
    `\n\nEstimated Scope: ${selectedCount} major module(s)\n` +
    `\nPlease let me know your availability for a discovery call or project estimate.\n\nBest regards,`
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.req-grid-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.requirements-selector-box',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="requirements" className="requirements-section" aria-label="Website and App Requirements Scope Guide">
      {/* Background Subtle Accent Grids */}
      <div className="req-ambient-overlay" aria-hidden="true" />

      <div className="container">
        {/* Section Header with SEO-Rich Target Keywords */}
        <div className="requirements-header">
          <div className="section-label">
            <span className="live-pulse-dot" />
            04 // FREELANCE WEB & APP DEVELOPMENT • HYDERABAD
          </div>
          <h2 className="requirements-main-title font-heading">
            LOW COST & <span className="text-glow-accent">FAST APP DEVELOPMENT</span> IN HYDERABAD
          </h2>
          <p className="requirements-description">
            Looking for an affordable freelance web developer in Hyderabad? Map out your project requirements below to get an instant scope breakdown, fast timeline estimate, and low-cost development quote.
          </p>
        </div>

        {/* Requirements Interactive Selector Box */}
        <div className="requirements-selector-box">
          <div className="selector-left-col">
            <div className="selector-box-title">
              <FileCode2 size={20} className="text-accent" />
              <h3>SELECT YOUR TECHNICAL REQUIREMENTS</h3>
            </div>

            <div className="req-checklist-grid">
              {REQUIREMENT_ITEMS.map((item) => {
                const isSelected = selectedReqs.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className={`req-grid-card ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => toggleReq(item.id)}
                    onMouseEnter={() => setCursor('TOGGLE', 'hover')}
                    onMouseLeave={resetCursor}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && toggleReq(item.id)}
                  >
                    <div className="req-card-checkbox">
                      <div className={`checkbox-custom ${isSelected ? 'checked' : ''}`}>
                        {isSelected && <CheckSquare size={16} />}
                      </div>
                    </div>

                    <div className="req-card-details">
                      <span className="req-category-tag">{item.category}</span>
                      <h4 className="req-card-heading">{item.title}</h4>
                      <p className="req-card-sub">{item.desc}</p>
                      
                      <div className="req-tech-pills">
                        <span className="tech-pill">{item.recommendedTech}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Blueprint Estimate Summary Panel */}
          <div className="selector-summary-panel">
            <div className="blueprint-badge">
              <Sparkles size={16} />
              <span>PROJECT SCOPE BLUEPRINT</span>
            </div>

            <div className="blueprint-metrics">
              <div className="b-metric-item">
                <span className="b-label">SELECTED MODULES</span>
                <span className="b-value text-accent">{selectedCount} / {REQUIREMENT_ITEMS.length}</span>
              </div>
              <div className="b-metric-item">
                <span className="b-label">EST. TIMELINE</span>
                <span className="b-value">~{estimatedDays} DAYS</span>
              </div>
              <div className="b-metric-item">
                <span className="b-label">ARCHITECTURE</span>
                <span className="b-value text-glow">FULL-STACK</span>
              </div>
            </div>

            <div className="blueprint-features-list">
              <span className="b-list-title">INCLUDED DELIVERABLES:</span>
              <ul>
                {selectedReqs.map(id => {
                  const req = REQUIREMENT_ITEMS.find(r => r.id === id);
                  return (
                    <li key={id}>
                      <Zap size={14} className="text-accent" />
                      <span>{req.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="blueprint-cta-group">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.contactEmail}?subject=${encodeURIComponent('Website / App Development Requirements Inquiry')}&body=${mailtoBody}`}
                className="blueprint-submit-btn"
                onMouseEnter={() => setCursor('SEND REQS', 'hover')}
                onMouseLeave={resetCursor}
              >
                <span>SUBMIT REQUIREMENTS</span>
                <Send size={18} />
              </a>

              <p className="blueprint-guarantee">
                <ShieldCheck size={14} /> Direct consultation with Mohan Racharla. Response within 24h.
              </p>
            </div>
          </div>
        </div>

        {/* SEO FAQ Accordion targeting Search Queries */}
        <div className="requirements-faq-container">
          <div className="faq-header">
            <HelpCircle size={22} className="text-accent" />
            <h3 className="faq-title">FREQUENTLY ASKED QUESTIONS ABOUT WEBSITE & APP REQUIREMENTS</h3>
          </div>

          <div className="faq-grid">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <article key={index} className={`faq-card ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <ArrowRight size={18} className={`faq-arrow ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
