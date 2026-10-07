import React, { useState } from 'react';
import { BarChart3, FileText, CheckCircle } from 'lucide-react';

export function IraReportsShowcase() {
  const [selectedFilter, setSelectedFilter] = useState('q3');

  return (
    <div className="project-interactive-card ira-reports-card">
      <div className="card-top-bar">
        <div className="card-window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="card-title-badge">
          <BarChart3 size={13} className="badge-icon text-accent" />
          <span>reports.iramediaconcepts.com</span>
        </div>
        <div className="card-tab-buttons">
          <button 
            className={`tab-btn ${selectedFilter === 'q3' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('q3')}
          >
            Q3 MEDIA REPORT
          </button>
          <button 
            className={`tab-btn ${selectedFilter === 'campaign' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('campaign')}
          >
            CAMPAIGN ROI
          </button>
        </div>
      </div>

      <div className="ira-reports-body" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', padding: '0.85rem', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block' }}>TOTAL IMPRESSIONS</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)' }}>4.8M</span>
          </div>

          <div style={{ background: 'var(--bg-tertiary)', border: '1px solid rgba(255, 159, 28, 0.3)', padding: '0.85rem', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.68rem', color: '#FF9F1C', letterSpacing: '0.08em', display: 'block' }}>CAMPAIGN CONVERSIONS</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '700', color: '#FF9F1C' }}>184.2K</span>
          </div>

          <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', padding: '0.85rem', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block' }}>CLIENTS SERVED</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)' }}>45+</span>
          </div>
        </div>

        <div style={{
          background: '#050505',
          border: '1px solid var(--border-subtle)',
          borderRadius: '8px',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={16} style={{ color: '#FF9F1C' }} />
            <div>
              <span style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: '600' }}>IRA_MEDIA_AUDIT_2026.PDF</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Automated Client Reporting Engine</span>
            </div>
          </div>
          <span style={{ fontSize: '0.72rem', color: '#27C93F', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <CheckCircle size={12} /> GENERATED
          </span>
        </div>
      </div>
    </div>
  );
}
