import React, { useState } from 'react';
import { DollarSign, Users, Award, TrendingUp, Plus, Copy, Check } from 'lucide-react';

export function ReferItUpShowcase() {
  const [referrals, setReferrals] = useState(1482);
  const [earnings, setEarnings] = useState(12450);
  const [converted, setConverted] = useState(false);

  const handleSimulateReferral = () => {
    setReferrals((prev) => prev + 1);
    setEarnings((prev) => prev + 25);
    setConverted(true);
    setTimeout(() => setConverted(false), 1400);
  };

  return (
    <div className="project-interactive-card referitup-card">
      <div className="card-top-bar">
        <div className="card-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="card-title-badge">
          <span>dashboard.referitup.com</span>
        </div>
        <div className="live-pulse">
          <span className="pulse-dot" /> <span className="pulse-label">REALTIME PAYOUT ENGINE</span>
        </div>
      </div>

      <div className="referitup-dashboard">
        <div className="metrics-grid">
          <div className="metric-box">
            <div className="metric-icon"><Users size={16} /></div>
            <div className="metric-data">
              <span className="metric-label">TOTAL REFERRALS</span>
              <span className="metric-val">{referrals.toLocaleString()}</span>
            </div>
          </div>

          <div className="metric-box highlight">
            <div className="metric-icon"><DollarSign size={16} /></div>
            <div className="metric-data">
              <span className="metric-label">EARNINGS PAYOUT</span>
              <span className="metric-val">${earnings.toLocaleString()}</span>
            </div>
          </div>

          <div className="metric-box">
            <div className="metric-icon"><TrendingUp size={16} /></div>
            <div className="metric-data">
              <span className="metric-label">CONVERSION RATE</span>
              <span className="metric-val">24.8%</span>
            </div>
          </div>
        </div>

        <div className="referral-action-bar">
          <div className="referral-link-box">
            <Copy size={13} className="link-icon" />
            <span className="link-text">https://referitup.com/r/mohan-dev</span>
          </div>
          <button className={`simulate-ref-btn ${converted ? 'active' : ''}`} onClick={handleSimulateReferral}>
            {converted ? <Check size={14} /> : <Plus size={14} />}
            <span>{converted ? 'CONVERTED +$25!' : 'SIMULATE CONVERSION'}</span>
          </button>
        </div>

        <div className="referral-activity-feed">
          <div className="feed-title"><Award size={14} /> RECENT PAYOUT PIPELINE</div>
          <div className="feed-row">
            <span className="user-id">#USER-8821</span>
            <span className="badge-tier">GOLD TIER</span>
            <span className="payout-amount">+$50.00 Paid</span>
          </div>
          <div className="feed-row">
            <span className="user-id">#USER-8822</span>
            <span className="badge-tier">PLATINUM TIER</span>
            <span className="payout-amount">+$100.00 Paid</span>
          </div>
        </div>
      </div>
    </div>
  );
}

