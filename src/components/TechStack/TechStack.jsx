import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import { Wrench } from 'lucide-react';
import './TechStack.css';

gsap.registerPlugin(ScrollTrigger);

export function TechStack() {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);
  const spotlightRef = useRef(null);
  const [activeTech, setActiveTech] = useState(PORTFOLIO_DATA.techStack[0]);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Staggered scroll animation for technology badges
      wordsRef.current.forEach((btn, idx) => {
        if (!btn) return;

        const randomRotate = (idx % 2 === 0 ? 1 : -1) * (3 + (idx % 4) * 2);

        gsap.fromTo(
          btn,
          { y: 40, opacity: 0, scale: 0.9, rotate: randomRotate },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: btn,
              start: 'top 88%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Spotlight card scroll parallax reveal
      gsap.fromTo(
        spotlightRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: spotlightRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="tools" className="techstack-section">
      <div className="container">
        <div className="techstack-top-header">
          <div className="section-label">04 / THE TOOLS</div>
          <h2 className="techstack-main-title">TECHNOLOGY STACK</h2>
        </div>

        <div className="techstack-grid-layout">
          {/* Left: Interactive Typography List */}
          <div className="techstack-words-container">
            {PORTFOLIO_DATA.techStack.map((tech, idx) => {
              const isSelected = activeTech.name === tech.name;
              return (
                <button
                  key={tech.name}
                  ref={(el) => (wordsRef.current[idx] = el)}
                  className={`tech-word-btn ${isSelected ? 'active' : ''}`}
                  onMouseEnter={() => {
                    setActiveTech(tech);
                    setCursor(tech.name, 'hover');
                  }}
                  onMouseLeave={resetCursor}
                  onClick={() => setActiveTech(tech)}
                >
                  <span className="tech-word-text">{tech.name}</span>
                  <span className="tech-word-dot"></span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Detail Spotlight */}
          <div className="techstack-detail-spotlight">
            <div ref={spotlightRef} className="spotlight-card">
              <div className="spotlight-header">
                <Wrench size={18} className="text-accent" />
                <span className="spotlight-cat-tag">{activeTech.category}</span>
              </div>

              <h3 className="spotlight-title">{activeTech.name}</h3>

              <p className="spotlight-detail-text">
                {activeTech.detail}
              </p>

              <div className="spotlight-accent-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
