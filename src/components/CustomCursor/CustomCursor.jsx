import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useCursor } from '../../context/CursorContext';
import './CustomCursor.css';

export function CustomCursor() {
  const { cursorText, cursorVariant } = useCursor();
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Disable custom cursor on mobile / touch screens
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use GSAP quickTo for smooth cursor interpolation
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.2, ease: 'power3.out' });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className={`custom-cursor ${cursorVariant} ${cursorText ? 'has-text' : ''}`}
      aria-hidden="true"
    >
      <div className="cursor-dot">
        <span ref={textRef} className="cursor-text">{cursorText}</span>
      </div>
    </div>
  );
}
