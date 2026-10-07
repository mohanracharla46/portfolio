import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import './Intro.css';

gsap.registerPlugin(ScrollTrigger);

export function Intro() {
  const introSectionRef = useRef(null);
  const statementRef = useRef(null);
  const paragraphRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const words = statementRef.current.querySelectorAll('.intro-word');

      // Scroll-driven word opacity reveal
      gsap.fromTo(
        words,
        { opacity: 0.15, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statementRef.current,
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: 0.6
          }
        }
      );

      // Paragraph slide up
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, introSectionRef);

    return () => ctx.revert();
  }, []);

  const statementWords = PORTFOLIO_DATA.personal.introStatement.split(' ');

  return (
    <section ref={introSectionRef} id="intro" className="intro-section">
      <div className="container">
        <div className="section-label">{PORTFOLIO_DATA.personal.introLabel}</div>

        <div className="intro-content-grid">
          <h2 ref={statementRef} className="intro-statement">
            {statementWords.map((word, idx) => (
              <span 
                key={idx} 
                className={`intro-word ${word === 'CODE.' || word === 'THINGS.' ? 'text-accent' : ''}`}
                onMouseEnter={() => setCursor('READ')}
                onMouseLeave={resetCursor}
              >
                {word}{' '}
              </span>
            ))}
          </h2>

          <div ref={paragraphRef} className="intro-paragraph-box">
            <div className="intro-accent-line"></div>
            <p className="intro-paragraph">
              {PORTFOLIO_DATA.personal.introParagraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
