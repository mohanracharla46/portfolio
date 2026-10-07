import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import { Cpu, ArrowUpRight, Terminal } from 'lucide-react';
import './CurrentlyBuilding.css';

export function CurrentlyBuilding() {
  const { title, status, description, progress, tech } = PORTFOLIO_DATA.currentlyBuilding;
  const { setCursor, resetCursor } = useCursor();

  return (
    <section className="currently-building-section">
      <div className="container">
        <div className="building-card">
          <div className="building-header-row">
            <div className="building-status-badge">
              <span className="pulsing-neon-dot"></span>
              <span>{status} NOW</span>
            </div>
            <span className="building-section-tag">LABS / PRODUCT SPOTLIGHT</span>
          </div>

          <div className="building-main-grid">
            <div className="building-info-col">
              <h2 className="building-title">{title}</h2>
              <p className="building-desc">{description}</p>

              <div className="building-tech-stack">
                {tech.map((t) => (
                  <span key={t} className="building-tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="building-progress-col">
              <div className="progress-top-meta">
                <span className="progress-label">ENGINE COMPLETION</span>
                <span className="progress-percent">{progress}%</span>
              </div>

              <div className="progress-track">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
              </div>

              <div className="building-terminal-preview">
                <Terminal size={14} className="text-accent" />
                <span>v2.0-beta sandbox compiler engine initialized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
