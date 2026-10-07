import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { CodeNativeShowcase } from './CodeNativeShowcase';
import { ReferItUpShowcase } from './ReferItUpShowcase';
import { NkxusShowcase } from './NkxusShowcase';
import { IraMediaShowcase } from './IraMediaShowcase';
import { IraReportsShowcase } from './IraReportsShowcase';
import { GogoCarShowcase } from './GogoCarShowcase';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../Icons/SocialIcons';
import { useCursor } from '../../context/CursorContext';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      projectRefs.current.forEach((el) => {
        if (!el) return;

        const visual = el.querySelector('.project-visual-wrapper');
        const content = el.querySelector('.project-info-wrapper');
        const num = el.querySelector('.project-huge-number');

        // GSAP ScrollTrigger transition per project
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });

        tl.fromTo(
          visual,
          { scale: 0.9, opacity: 0, y: 50 },
          { scale: 1, opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        )
        .fromTo(
          content,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          num,
          { opacity: 0, scale: 0.7 },
          { opacity: 0.12, scale: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.8'
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderProjectShowcase = (id) => {
    switch (id) {
      case 'codenative':
        return <CodeNativeShowcase />;
      case 'referitup':
        return <ReferItUpShowcase />;
      case 'nkxus':
        return <NkxusShowcase />;
      case 'ira-media':
        return <IraMediaShowcase />;
      case 'ira-reports':
        return <IraReportsShowcase />;
      case 'gogocar':
        return <GogoCarShowcase />;
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} id="work" className="projects-section">
      <div className="container">
        <div className="projects-header-block">
          <div className="section-label">02 / SELECTED WORK</div>
          <h2 className="projects-main-title">SELECTED WORK</h2>
        </div>

        <div className="projects-list">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <article
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="project-item"
            >
              <div className="project-huge-number" aria-hidden="true">
                {project.number}
              </div>

              <div className="project-grid-layout">
                {/* Left side: Project Info */}
                <div className="project-info-wrapper">
                  <div className="project-meta-top">
                    <span className="project-num-tag">{project.number}</span>
                    <span className="project-category">{project.category}</span>
                    <span className="project-year">{project.year}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <h4 className="project-subtitle">{project.subtitle}</h4>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-cta-group">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-cta-btn primary"
                      onMouseEnter={() => setCursor('VISIT', 'hover')}
                      onMouseLeave={resetCursor}
                    >
                      <span>VISIT LIVE SITE</span>
                      <ArrowUpRight size={18} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-cta-btn secondary"
                      onMouseEnter={() => setCursor('CODE')}
                      onMouseLeave={resetCursor}
                      aria-label="View Source Code"
                    >
                      <GithubIcon size={16} />
                      <span>SOURCE</span>
                    </a>
                  </div>
                </div>

                {/* Right side: Interactive Product Showcase */}
                <div
                  className="project-visual-wrapper"
                  onMouseEnter={() => setCursor('EXPLORE', 'hover')}
                  onMouseLeave={resetCursor}
                >
                  {renderProjectShowcase(project.id)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
