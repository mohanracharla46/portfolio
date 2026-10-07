import React, { useState, useEffect } from 'react';
import { Activity, Gauge, Zap, ShieldCheck } from 'lucide-react';

export function GogoCarShowcase() {
  const [speed, setSpeed] = useState(84);
  const [battery, setBattery] = useState(92);
  const [activeTab, setActiveTab] = useState('telemetry');

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(prev => 80 + Math.floor(Math.random() * 9));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="project-interactive-card gogocar-card">
      <div className="card-top-bar">
        <div className="card-window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="card-title-badge">
          <Activity size={13} className="badge-icon text-accent" />
          <span>telematics.gogocar.io</span>
        </div>
        <div className="live-status">LIVE TELEMETRY STREAM</div>
      </div>

      <div className="gogocar-dashboard">
        <div className="telemetry-top-stats">
          <div className="gauge-box">
            <Gauge size={20} className="stat-icon" />
            <div>
              <span className="gauge-value">{speed} <small>km/h</small></span>
              <span className="gauge-label">VEHICLE SPEED</span>
            </div>
          </div>

          <div className="gauge-box">
            <Zap size={20} className="stat-icon text-accent" />
            <div>
              <span className="gauge-value">{battery}%</span>
              <span className="gauge-label">BATTERY HEALTH</span>
            </div>
          </div>

          <div className="gauge-box">
            <ShieldCheck size={20} className="stat-icon" />
            <div>
              <span className="gauge-value">OPTIMAL</span>
              <span className="gauge-label">DIAGNOSTIC STATUS</span>
            </div>
          </div>
        </div>

        {/* Realtime Waveform SVG Chart */}
        <div className="chart-container">
          <div className="chart-header">
            <span>REAL-TIME ENGINE TORQUE & EFFICIENCY (D3 TELEMETRY FEED)</span>
          </div>
          <svg viewBox="0 0 500 120" className="telemetry-chart-svg">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B8FF3C" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#B8FF3C" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 90 Q 50 20, 100 70 T 200 40 T 300 80 T 400 30 T 500 60 L 500 120 L 0 120 Z"
              fill="url(#chartGradient)"
            />
            <path
              d="M0 90 Q 50 20, 100 70 T 200 40 T 300 80 T 400 30 T 500 60"
              fill="none"
              stroke="#B8FF3C"
              strokeWidth="2.5"
            />
            {/* Blinking telemetry ping dot */}
            <circle cx="400" cy="30" r="4" fill="#B8FF3C">
              <animate attributeName="r" values="3;7;3" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
}
