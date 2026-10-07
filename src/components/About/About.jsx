import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: descRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-section">
      <div className="container">
        <div className="section-label">ABOUT ME</div>

        <div className="about-editorial-grid">
          <h2 
            ref={titleRef} 
            className="about-headline"
            onMouseEnter={() => setCursor('PHILOSOPHY')}
            onMouseLeave={resetCursor}
          >
            I LIKE TURNING <br />
            <span className="text-accent">IDEAS INTO</span> <br />
            REAL PRODUCTS.
          </h2>

          <div ref={descRef} className="about-body-column">
            <p className="about-main-text">
              {PORTFOLIO_DATA.personal.aboutDescription}
            </p>

            <div className="about-highlights-list">
              <div className="about-highlight-item">
                <span className="hl-number">01</span>
                <div>
                  <h4 className="hl-title">Product Mindset</h4>
                  <p className="hl-desc">Every line of code serves user experience and business utility.</p>
                </div>
              </div>

              <div className="about-highlight-item">
                <span className="hl-number">02</span>
                <div>
                  <h4 className="hl-title">Full-Stack Capability</h4>
                  <p className="hl-desc">Seamless integration between client interfaces and server architecture.</p>
                </div>
              </div>

              <div className="about-highlight-item">
                <span className="hl-number">03</span>
                <div>
                  <h4 className="hl-title">Motion & UX Attention</h4>
                  <p className="hl-desc">Carefully engineered motion language to bring products alive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
