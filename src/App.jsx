import React, { useState } from 'react';
import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { PageLoader } from './components/PageLoader/PageLoader';
import { Navbar } from './components/Navigation/Navbar';
import { Hero } from './components/Hero/Hero';
import { Intro } from './components/Intro/Intro';
import { Projects } from './components/Projects/Projects';
import { Capabilities } from './components/Capabilities/Capabilities';
import { TechStack } from './components/TechStack/TechStack';
import { Experience } from './components/Experience/Experience';
import { About } from './components/About/About';
import { CurrentlyBuilding } from './components/CurrentlyBuilding/CurrentlyBuilding';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { useLenis } from './hooks/useLenis';
import './index.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize Lenis smooth scroll linked to GSAP ScrollTrigger
  useLenis();

  return (
    <CursorProvider>
      <div className="portfolio-app-root">
        {/* Subtle noise grain background overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Desktop Custom Cursor */}
        <CustomCursor />

        {/* Brand Initializing Page Loader */}
        {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}

        {/* Fixed Navbar & Navigation Overlay */}
        <Navbar />

        {/* Continuous Storytelling Main Layout */}
        <main className="main-content">
          <Hero />
          <Intro />
          <Projects />
          <Capabilities />
          <TechStack />
          <Experience />
          <About />
          <CurrentlyBuilding />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </CursorProvider>
  );
}
