import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const cometRef = useRef(null);
  const itemRefs = useRef([]);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Timeline vertical line drawing animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 40%',
            scrub: 0.5
          }
        }
      );

      // 2. Timeline glowing comet head following scroll position
      gsap.fromTo(
        cometRef.current,
        { top: '0%' },
        {
          top: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 40%',
            scrub: 0.5
          }
        }
      );

      // 3. Timeline Item Reveals with slight parallax X movement
      itemRefs.current.forEach((item) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { opacity: 0, x: -40, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="experience-section">
      <div className="container">
        <div className="experience-header">
          <div className="section-label">04 / EXPERIENCE</div>
          <h2 className="experience-main-title">CAREER & LEADERSHIP</h2>
        </div>

        <div className="timeline-wrapper">
          <div ref={lineRef} className="timeline-line"></div>
          <div ref={cometRef} className="timeline-comet" aria-hidden="true"></div>

          <div className="timeline-items">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div 
                key={idx}
                ref={(el) => (itemRefs.current[idx] = el)}
                className="timeline-item"
                onMouseEnter={() => setCursor(exp.year, 'hover')}
                onMouseLeave={resetCursor}
              >
                <div className="timeline-node">
                  <span className="node-dot"></span>
                </div>

                <div className="timeline-content-card">
                  <div className="timeline-top-row">
                    <span className="timeline-year-badge">{exp.year}</span>
                    <span className="timeline-type-tag">{exp.type}</span>
                  </div>

                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>

                  <p className="timeline-description">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
