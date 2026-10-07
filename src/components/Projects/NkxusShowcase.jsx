import React, { useState } from 'react';
import { Layers, Zap, ArrowUpRight, Cpu } from 'lucide-react';

export function NkxusShowcase() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="project-interactive-card nkxus-card">
      <div className="card-top-bar">
        <div className="card-window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="card-title-badge">
          <Layers size={13} className="badge-icon text-accent" />
          <span>nkxus.com/network</span>
        </div>
        <div className="live-status">PROD NODE ONLINE</div>
      </div>

      <div className="nkxus-body" style={{ padding: '1.5rem' }}>
        <div className="nkxus-hero-banner" style={{
          background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.15) 0%, rgba(8, 8, 8, 0.9) 100%)',
          border: '1px solid rgba(157, 78, 221, 0.3)',
          borderRadius: '10px',
          padding: '1.25rem',
          marginBottom: '1rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', color: '#9D4EDD', fontWeight: '700', letterSpacing: '0.1em' }}>NKXUS DIGITAL PLATFORM</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>v2.4 REALTIME</span>
          </div>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Unified Digital Infrastructure</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Scalable web application framework delivering interactive user experiences and optimized asset streams.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
          <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: '6px' }}>
            <Zap size={14} style={{ color: '#9D4EDD', marginBottom: '0.25rem' }} />
            <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)' }}>&lt;90ms</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>LATENCY</span>
          </div>
          <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: '6px' }}>
            <Cpu size={14} style={{ color: '#9D4EDD', marginBottom: '0.25rem' }} />
            <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)' }}>100%</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>UPTIME</span>
          </div>
          <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: '6px' }}>
            <Layers size={14} style={{ color: '#9D4EDD', marginBottom: '0.25rem' }} />
            <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)' }}>REACT</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
