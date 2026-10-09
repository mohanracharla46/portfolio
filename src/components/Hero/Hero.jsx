import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ArrowDown } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import portraitImg from '../../assets/mohan_portrait.jpg';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const subtitleRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Initial entrance reveal
      const entranceTl = gsap.timeline({ delay: 0.1 });

      entranceTl.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power4.out' }
      )
      .fromTo(
        imageWrapperRef.current,
        { scale: 0.85, opacity: 0, clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        { scale: 1, opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      );

      // 2. SCROLL-DRIVEN CENTER & SCALE ANIMATION (Image grows & moves to center on scroll)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=100%', // Pinned scroll duration
          scrub: 1,      // Smooth interactive scroll response
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      scrollTl
        // Fade out and recede kinetic headline & meta
        .to(line1Ref.current, { xPercent: -35, opacity: 0, scale: 0.85, ease: 'power1.in' }, 0)
        .to(line2Ref.current, { xPercent: -35, opacity: 0, scale: 0.85, ease: 'power1.in' }, 0)
        .to(line3Ref.current, { xPercent: -35, opacity: 0, scale: 0.85, ease: 'power1.in' }, 0)
        .to(subtitleRef.current, { opacity: 0, y: 30, ease: 'power1.in' }, 0)
        .to(scrollIndicatorRef.current, { opacity: 0, scale: 0.6, ease: 'power1.in' }, 0)
        // Expand and Translate Portrait Frame directly into Horizontal Center
        .to(imageWrapperRef.current, {
          x: () => {
            if (!imageWrapperRef.current || !heroRef.current) return 0;
            if (window.innerWidth <= 992) return 0; // Already single column layout on mobile/tablet
            const container = heroRef.current.querySelector('.hero-container');
            if (!container) return 0;
            
            const containerRect = container.getBoundingClientRect();
            const imageRect = imageWrapperRef.current.getBoundingClientRect();
            
            const currentX = gsap.getProperty(imageWrapperRef.current, 'x') || 0;
            const rawImageCenter = (imageRect.left - currentX) + imageRect.width / 2;
            const containerCenter = containerRect.left + containerRect.width / 2;
            
            return containerCenter - rawImageCenter;
          },
          scale: () => {
            if (window.innerWidth <= 480) return 1.22;
            if (window.innerWidth <= 768) return 1.32;
            if (window.innerHeight <= 700) return 1.4;
            return 1.65;
          },
          y: () => (window.innerWidth <= 992 ? 0 : 15),
          rotate: 0,
          borderColor: 'rgba(184, 255, 60, 0.55)',
          boxShadow: '0 40px 110px rgba(184, 255, 60, 0.38), 0 0 50px rgba(184, 255, 60, 0.25)',
          ease: 'power2.inOut'
        }, 0)
        // Parallax inner image zoom for dramatic depth
        .to(imageRef.current, {
          scale: 1.2,
          y: -10,
          ease: 'power2.inOut'
        }, 0);

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="hero-section">
      <div className="hero-background-grid" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="hero-meta">
          <span className="hero-meta-label">{PORTFOLIO_DATA.personal.name}</span>
          <span className="hero-meta-divider">/</span>
          <span className="hero-meta-role">{PORTFOLIO_DATA.personal.title}</span>
        </div>

        <div className="hero-main-content-layout">
          {/* Left: Giant Kinetic Typography with SEO H1 Heading */}
          <h1 className="hero-headline-container" aria-label="Mohan Racharla — Full-Stack Developer for Website & App Development Requirements. I Build Digital Products.">
            <span className="sr-only">Mohan Racharla — Custom Website & App Development Requirements & Full-Stack Engineering</span>
            <div className="hero-headline-line">
              <span 
                ref={line1Ref} 
                className="hero-word word-glow"
                onMouseEnter={() => setCursor('BUILD')}
                onMouseLeave={resetCursor}
              >
                I BUILD
              </span>
            </div>

            <div className="hero-headline-line">
              <span 
                ref={line2Ref} 
                className="hero-word text-outlined"
                onMouseEnter={() => setCursor('DIGITAL')}
                onMouseLeave={resetCursor}
              >
                DIGITAL
              </span>
            </div>

            <div className="hero-headline-line">
              <span 
                ref={line3Ref} 
                className="hero-word text-accent"
                onMouseEnter={() => setCursor('PRODUCTS')}
                onMouseLeave={resetCursor}
              >
                PRODUCTS.
              </span>
            </div>
          </h1>

          {/* Right: Scroll-Driven Masked Developer Portrait */}
          <div 
            ref={imageWrapperRef} 
            className="hero-portrait-frame"
            onMouseEnter={() => setCursor('MOHAN', 'hover')}
            onMouseLeave={resetCursor}
          >
            <div className="portrait-inner-mask">
              <img 
                ref={imageRef}
                src={portraitImg} 
                alt="Mohan Racharla Developer Portrait" 
                className="hero-portrait-img"
              />
              <div className="portrait-gradient-overlay"></div>
              <div className="portrait-badge">
                <span className="badge-dot"></span>
                <span>MOHAN RACHARLA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-footer-wrapper">
          <p ref={subtitleRef} className="hero-subtitle">
            {PORTFOLIO_DATA.personal.heroDescription}
          </p>

          <div ref={scrollIndicatorRef} className="hero-scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} className="scroll-arrow-anim" />
          </div>
        </div>
      </div>
    </section>
  );
}
