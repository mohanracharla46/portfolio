import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Terminal } from 'lucide-react';
import './PageLoader.css';

export function PageLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const progressLineRef = useRef(null);
  const progressGlowRef = useRef(null);
  const statusTextRef = useRef(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  
  const [percent, setPercent] = useState(0);
  const [statusMsg, setStatusMsg] = useState('INITIALIZING CORE ENGINE...');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial reveal timeline
      const tl = gsap.timeline();

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out'
      })
      .to([titleLine1Ref.current, titleLine2Ref.current], {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power4.out'
      }, '-=0.3')
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out'
      }, '-=0.4')
      .to(footerRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out'
      }, '-=0.4');

      // 2. Smooth Progress Counting
      const progressObj = { value: 0 };
      
      gsap.to(progressObj, {
        value: 100,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          const val = Math.floor(progressObj.value);
          setPercent(val);
          
          if (progressLineRef.current) {
            progressLineRef.current.style.width = `${val}%`;
          }
          if (progressGlowRef.current) {
            progressGlowRef.current.style.left = `${val}%`;
          }

          // Dynamic status messages based on loading progress
          if (val < 25) {
            setStatusMsg('INITIALIZING CORE ENGINE & SHADERS...');
          } else if (val < 60) {
            setStatusMsg('COMPILING INTERACTIVE MODULES...');
          } else if (val < 90) {
            setStatusMsg('OPTIMIZING HIGH-PERFORMANCE CANVAS...');
          } else {
            setStatusMsg('SYSTEM ONLINE • WELCOME');
          }
        },
        onComplete: () => {
          // Exit animation
          const exitTl = gsap.timeline({
            delay: 0.3,
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });

          exitTl.to(loaderRef.current, {
            clipPath: 'inset(0% 0% 100% 0%)',
            duration: 0.85,
            ease: 'power4.inOut'
          });
        }
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="page-loader" role="status" aria-label="Initializing Portfolio">
      {/* Ambient background glow and grid */}
      <div className="loader-bg-ambient" aria-hidden="true" />
      <div className="loader-bg-grid" aria-hidden="true" />

      {/* Decorative corner crosshairs */}
      <div className="corner-crosshair top-left" aria-hidden="true" />
      <div className="corner-crosshair top-right" aria-hidden="true" />
      <div className="corner-crosshair bottom-left" aria-hidden="true" />
      <div className="corner-crosshair bottom-right" aria-hidden="true" />

      {/* Loader Header */}
      <div ref={headerRef} className="loader-header">
        <div className="loader-status-pill">
          <span className="status-dot-pulse"></span>
          <span className="status-text">INITIALIZING</span>
          <span className="status-divider">/</span>
          <span className="status-year">2026 EDITION</span>
        </div>

        <div className="loader-counter-box">
          <span className="loader-counter-label">SYSTEM READY</span>
          <span className="loader-counter-val">
            {percent.toString().padStart(2, '0')}
            <span className="percent-sign">%</span>
          </span>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="loader-content">
        <div className="loader-meta-tag">
          <span className="meta-tag-code">[01]</span>
          <span className="meta-tag-divider">//</span>
          <span className="meta-tag-text">FULL-STACK DEVELOPER &amp; PRODUCT BUILDER</span>
        </div>

        <div className="loader-title-wrapper">
          <h1 ref={titleLine1Ref} className="loader-title line-1">
            MOHAN
          </h1>
          <h1 ref={titleLine2Ref} className="loader-title line-2">
            RACHARLA
          </h1>
        </div>

        <div ref={subtitleRef} className="loader-subtitle-wrapper">
          <div className="subtitle-line"></div>
          <p className="loader-subtitle">ENGINEERING DIGITAL EXPERIENCES</p>
          <div className="subtitle-line"></div>
        </div>
      </div>

      {/* Footer / Progress Bar Section */}
      <div ref={footerRef} className="loader-footer">
        <div className="loader-status-bar">
          <span ref={statusTextRef} className="loader-status-msg">
            <Terminal size={13} className="terminal-icon" />
            {statusMsg}
          </span>
          <span className="loader-loc">HYDERABAD, IN [IST]</span>
        </div>

        <div className="loader-progress-container">
          <div className="loader-progress-track">
            <div ref={progressLineRef} className="loader-progress-bar"></div>
            <div ref={progressGlowRef} className="loader-progress-head"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
