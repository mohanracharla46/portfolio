import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import './Capabilities.css';

gsap.registerPlugin(ScrollTrigger);

export function Capabilities() {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);
  const tickerRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Kinetic Ticker marquee scroll speed acceleration
      gsap.to(tickerRef.current, {
        xPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5
        }
      });

      // 2. High-impact kinetic word scroll transformation
      wordsRef.current.forEach((el, index) => {
        if (!el) return;

        const isEven = index % 2 === 0;
        const xStart = isEven ? 120 : -120;

        const wordText = el.querySelector('.capability-word');

        // Scroll Scrub Timeline per row
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 25%',
            scrub: 0.6
          }
        });

        tl.fromTo(
          el,
          { x: xStart, opacity: 0.15, scale: 0.9, rotateX: 15 },
          { x: 0, opacity: 1, scale: 1, rotateX: 0, ease: 'power2.out' }
        )
        .to(
          wordText,
          { color: '#B8FF3C', textShadow: '0 0 30px rgba(184, 255, 60, 0.4)', ease: 'none' },
          0.3
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="capabilities" className="capabilities-section">
      {/* Background Kinetic Ticker */}
      <div className="capabilities-ticker-track" aria-hidden="true">
        <div ref={tickerRef} className="capabilities-ticker-text">
          FULL STACK ARCHITECTURE • SCALABLE PLATFORMS • HIGH PERFORMANCE APIs • MOTION UX • FULL STACK ARCHITECTURE • SCALABLE PLATFORMS •
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="capabilities-header">
          <div className="section-label">03 / CAPABILITIES</div>
          <p className="capabilities-subcopy">
            From interfaces to backend systems, I build complete digital products with continuous motion storytelling.
          </p>
        </div>

        <div className="capabilities-typography-cloud">
          {PORTFOLIO_DATA.capabilities.map((item, index) => (
            <div 
              key={item.name}
              ref={(el) => (wordsRef.current[index] = el)}
              className="capability-row"
              onMouseEnter={() => setCursor('BUILD', 'hover')}
              onMouseLeave={resetCursor}
            >
              <div className="capability-left-meta">
                <span className="capability-index">0{index + 1}</span>
                <h3 className="capability-word">
                  {item.name}
                </h3>
              </div>

              <span className="capability-desc-tooltip">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
