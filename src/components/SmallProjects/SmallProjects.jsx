import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ArrowUpRight, ChevronLeft, ChevronRight, Globe, Sparkles } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

import previewNkxus from '../../assets/preview_nkxus.jpg';
import previewAmarnath from '../../assets/preview_amarnath.jpg';
import previewPsmsk from '../../assets/preview_psmsk.jpg';
import previewVwish from '../../assets/preview_vwish.jpg';
import previewGlory from '../../assets/preview_glory.jpg';
import previewBliss from '../../assets/preview_bliss.jpg';
import previewHyderabad from '../../assets/preview_hyderabad_spas.jpg';

import './SmallProjects.css';

gsap.registerPlugin(ScrollTrigger);

const PREVIEW_IMAGES = {
  'nkxus-portfolio': previewNkxus,
  'amarnath-sarangula': previewAmarnath,
  'psmsk': previewPsmsk,
  'vwish-technologies': previewVwish,
  'the-glory-spa': previewGlory,
  'the-bliss-wellness': previewBliss,
  'hyderabad-spas': previewHyderabad,
};

export function SmallProjects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const trackRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth + 120);
      };

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth + 300}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleManualScroll = (direction) => {
    const cardWidth = 460;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    window.scrollBy({
      top: scrollAmount * 1.2,
      behavior: 'smooth'
    });
  };

  return (
    <section ref={sectionRef} id="client-work" className="small-projects-section">
      <div ref={triggerRef} className="horizontal-scroll-pin">
        
        {/* Section Header */}
        <div className="container small-projects-header-container">
          <div className="small-projects-header-block">
            <div>
              <div className="section-label">02.5 / FEATURED WEBSITES</div>
              <h2 className="small-projects-main-title">CLIENT & SIDE PROJECTS</h2>
            </div>
            
            <div className="scroll-navigation-hint">
              <span className="hint-pill">
                <Sparkles size={13} className="hint-icon" />
                SCROLL DOWN TO EXPLORE SIDEWAYS
              </span>

              <div className="carousel-arrow-nav">
                <button 
                  className="carousel-nav-btn" 
                  onClick={() => handleManualScroll('left')}
                  aria-label="Scroll left"
                  onMouseEnter={() => setCursor('PREV')}
                  onMouseLeave={resetCursor}
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="carousel-nav-btn" 
                  onClick={() => handleManualScroll('right')}
                  aria-label="Scroll right"
                  onMouseEnter={() => setCursor('NEXT')}
                  onMouseLeave={resetCursor}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="horizontal-track-wrapper">
          <div ref={trackRef} className="horizontal-scroll-track">
            {PORTFOLIO_DATA.smallProjects.map((project) => {
              const previewImg = PREVIEW_IMAGES[project.id];

              return (
                <article 
                  key={project.id} 
                  className="small-project-card"
                  onMouseEnter={() => setCursor('VISIT', 'hover')}
                  onMouseLeave={resetCursor}
                >
                  {/* Browser Window Header Bar */}
                  <div className="card-browser-bar">
                    <div className="browser-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="browser-domain-pill">
                      <Globe size={12} className="globe-icon" />
                      <span>{project.domain}</span>
                    </div>
                    <span className="browser-live-badge">
                      <span className="live-pulse-dot"></span>
                      LIVE
                    </span>
                  </div>

                  {/* Project Website Hero Banner Image Preview */}
                  <div className="card-hero-image-frame">
                    {previewImg && (
                      <img 
                        src={previewImg} 
                        alt={`${project.title} Hero Section Preview`}
                        className="card-hero-img" 
                      />
                    )}
                    <div className="card-hero-gradient-overlay" />
                    <span 
                      className="hero-category-tag" 
                      style={{ color: project.accentColor, borderColor: `${project.accentColor}40` }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Card Body Content */}
                  <div className="small-card-content">
                    <div className="small-card-meta">
                      <span className="small-card-num">{project.number}</span>
                      <h3 className="small-card-title">{project.title}</h3>
                    </div>

                    <p className="small-card-subtitle">{project.subtitle}</p>

                    <div className="small-card-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="small-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="small-card-footer">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="small-card-link-btn"
                        style={{ '--card-accent': project.accentColor }}
                      >
                        <span>LAUNCH SITE</span>
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Ambient Accent Glow */}
                  <div 
                    className="small-card-glow" 
                    style={{ background: `radial-gradient(circle at 80% 20%, ${project.accentColor}15 0%, transparent 70%)` }} 
                  />
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
