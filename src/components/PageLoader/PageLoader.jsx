import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import './PageLoader.css';

export function PageLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const progressLineRef = useRef(null);
  const [percent, setPercent] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal loader title
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power3.out'
      });

      // 2. Quick progress count to 100%
      const progressObj = { value: 0 };
      gsap.to(progressObj, {
        value: 100,
        duration: 0.8,
        ease: 'power2.inOut',
        onUpdate: () => {
          const val = Math.floor(progressObj.value);
          setPercent(val);
          if (progressLineRef.current) {
            progressLineRef.current.style.width = `${val}%`;
          }
        },
        onComplete: () => {
          setIsReady(true);
          // Dismiss loader immediately after brief 100% feedback
          gsap.to(loaderRef.current, {
            yPercent: -100,
            duration: 0.7,
            ease: 'power4.inOut',
            delay: 0.1,
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="page-loader" role="status" aria-label="Initializing Portfolio">
      <div className="loader-header">
        <span className="loader-brand">MR / 2026</span>
        <span className="loader-counter">{percent}%</span>
      </div>

      <div className="loader-content">
        <h1 ref={textRef} className="loader-title">
          MOHAN RACHARLA
        </h1>
        <p className="loader-subtitle">FULL-STACK DEVELOPER / BUILDER</p>
      </div>

      <div className="loader-progress-track">
        <div ref={progressLineRef} className="loader-progress-bar"></div>
      </div>
    </div>
  );
}
