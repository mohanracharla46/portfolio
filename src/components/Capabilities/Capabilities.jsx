import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Cpu, Terminal, Database, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import './Capabilities.css';

gsap.registerPlugin(ScrollTrigger);

const CAPABILITY_DETAILS = [
  {
    sysId: 'SYS_01',
    icon: Layers,
    tags: ['React', 'JavaScript', 'Vite', 'GSAP Motion', 'CSS Architecture'],
    accent: '#B8FF3C'
  },
  {
    sysId: 'SYS_02',
    icon: Cpu,
    tags: ['Microservices', 'Multi-Tenant Systems', 'Cloud Deploy', 'CI/CD Pipelines'],
    accent: '#4E9FFF'
  },
  {
    sysId: 'SYS_03',
    icon: Terminal,
    tags: ['Python Flask', 'Node.js', 'REST API', 'WebSocket Streams'],
    accent: '#9D4EDD'
  },
  {
    sysId: 'SYS_04',
    icon: Database,
    tags: ['Supabase', 'PostgreSQL', 'SQLite', 'Auth Engines', 'Realtime Sync'],
    accent: '#FF9F1C'
  },
  {
    sysId: 'SYS_05',
    icon: Sparkles,
    tags: ['Product Design', 'Zero-to-One Launch', 'Interactive UX', 'Performance'],
    accent: '#FF5E36'
  }
];

export function Capabilities() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const tickerRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Kinetic Ticker marquee scroll speed acceleration
      gsap.to(tickerRef.current, {
        xPercent: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5
        }
      });

      // 2. Futuristic Glass Cards staggered reveal
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="capabilities" className="capabilities-section">
      {/* Sci-Fi Ambient Glow Orbs */}
      <div className="cap-ambient-glow glow-1" aria-hidden="true" />
      <div className="cap-ambient-glow glow-2" aria-hidden="true" />

      {/* Background Cyberpunk Kinetic Ticker */}
      <div className="capabilities-ticker-track" aria-hidden="true">
        <div ref={tickerRef} className="capabilities-ticker-text">
          SYSTEM ARCHITECTURE • FULL STACK CAPABILITIES • CLOUD SCALABILITY • MOTION UX • HIGH PERFORMANCE APIs • SYSTEM ARCHITECTURE •
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="capabilities-header">
          <div className="header-meta-group">
            <div className="section-label">
              <span className="live-pulse-dot" />
              03 // SYSTEM CAPABILITIES
            </div>
            <h2 className="capabilities-title font-heading">
              ENGINEERED FOR <span className="text-glow-accent">PERFORMANCE</span> & SCALE
            </h2>
          </div>
          <p className="capabilities-subcopy">
            From low-latency cloud platforms to responsive micro-animations, I construct complete digital systems built for real-world impact.
          </p>
        </div>

        {/* High-Tech Bento Grid Layout */}
        <div className="capabilities-bento-grid">
          {PORTFOLIO_DATA.capabilities.map((item, index) => {
            const detail = CAPABILITY_DETAILS[index % CAPABILITY_DETAILS.length];
            const IconComponent = detail.icon;
            const isFeatured = index === 0;

            return (
              <div
                key={item.name}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`cap-cyber-card ${isFeatured ? 'bento-featured' : ''}`}
                onMouseEnter={() => setCursor('CAPABILITY', 'hover')}
                onMouseLeave={resetCursor}
                style={{ '--card-accent': detail.accent }}
              >
                {/* HUD Corner Accents */}
                <span className="hud-corner corner-tl" />
                <span className="hud-corner corner-tr" />
                <span className="hud-corner corner-bl" />
                <span className="hud-corner corner-br" />

                {/* Card Top Meta */}
                <div className="cap-card-top">
                  <div className="cap-sys-badge">
                    <IconComponent size={16} className="cap-icon" />
                    <span className="sys-code">{detail.sysId}</span>
                    {isFeatured && <span className="featured-tag">FEATURED MODULE</span>}
                  </div>
                  <div className="cap-status-indicator">
                    <CheckCircle2 size={13} className="status-icon" />
                    <span>OPERATIONAL</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="cap-card-body">
                  <h3 className="cap-card-title">
                    {item.name}
                    <ArrowUpRight size={20} className="title-arrow" />
                  </h3>
                  <p className="cap-card-desc">{item.desc}</p>
                </div>

                {/* Featured Extra Performance Metric HUD for Card 1 */}
                {isFeatured && (
                  <div className="featured-metrics-row">
                    <div className="f-metric">
                      <span className="f-val">100%</span>
                      <span className="f-lbl">Lighthouse UX</span>
                    </div>
                    <div className="f-metric">
                      <span className="f-val">60 FPS</span>
                      <span className="f-lbl">Motion Render</span>
                    </div>
                    <div className="f-metric">
                      <span className="f-val">&lt; 100ms</span>
                      <span className="f-lbl">First Contentful Paint</span>
                    </div>
                  </div>
                )}

                {/* Cyberpunk Tech Tags */}
                <div className="cap-tech-tags">
                  {detail.tags.map((tag) => (
                    <span key={tag} className="cap-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

