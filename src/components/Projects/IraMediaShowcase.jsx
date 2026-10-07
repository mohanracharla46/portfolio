import React from 'react';
import { Monitor, Globe, Award, Sparkles } from 'lucide-react';

export function IraMediaShowcase() {
  return (
    <div className="project-interactive-card ira-media-card">
      <div className="card-top-bar">
        <div className="card-window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="card-title-badge">
          <Globe size={13} className="badge-icon text-accent" />
          <span>iramediaconcepts.com</span>
        </div>
        <div className="live-status">MEDIA STUDIO</div>
      </div>

      <div className="ira-media-body" style={{ padding: '1.5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(184, 255, 60, 0.12) 0%, rgba(16, 16, 16, 0.95) 100%)',
          border: '1px solid var(--accent-border)',
          borderRadius: '10px',
          padding: '1.25rem',
          marginBottom: '1rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: '700', letterSpacing: '0.12em' }}>IRA MEDIA CONCEPTS</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>PRODUCTION SITE</span>
          </div>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Digital Media & Web Agency Platform</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Modern digital brand experiences, media solutions, and web applications built for client impact.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
          <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: '6px' }}>
            <Monitor size={14} style={{ color: 'var(--accent)', marginBottom: '0.25rem' }} />
            <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)' }}>FULL STACK</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>WEB DEV</span>
          </div>
          <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: '6px' }}>
            <Sparkles size={14} style={{ color: 'var(--accent)', marginBottom: '0.25rem' }} />
            <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)' }}>EDITORIAL</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>DESIGN UX</span>
          </div>
          <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: '6px' }}>
            <Award size={14} style={{ color: 'var(--accent)', marginBottom: '0.25rem' }} />
            <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)' }}>PRODUCTION</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>READY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
