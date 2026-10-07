import React, { useState } from 'react';
import { Cpu, AlertTriangle, FileCode, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export function BugifyShowcase() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const steps = PORTFOLIO_DATA.projects.find(p => p.id === 'bugify').workflowSteps;

  const handleNextStep = () => {
    if (isAnalyzing) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
      setIsAnalyzing(false);
    }, 350);
  };

  return (
    <div className="project-interactive-card bugify-card">
      <div className="card-top-bar">
        <div className="card-window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="card-title-badge">
          <Cpu size={13} className="badge-icon text-accent" />
          <span>bugify-ai.engine/triage</span>
        </div>
        <button className="step-trigger-btn" onClick={handleNextStep} disabled={isAnalyzing}>
          <RefreshCw size={12} className={isAnalyzing ? 'spin' : ''} />
          {isAnalyzing ? 'ANALYZING...' : `STEP ${currentStep + 1} / 5 → NEXT`}
        </button>
      </div>

      <div className="bugify-body">
        {/* Step indicator timeline */}
        <div className="bugify-steps-bar">
          {steps.map((s, idx) => (
            <div 
              key={s.step} 
              className={`bugify-step-node ${idx === currentStep ? 'active' : idx < currentStep ? 'completed' : ''}`}
              onClick={() => setCurrentStep(idx)}
            >
              <span className="node-num">{s.step}</span>
              <span className="node-title">{s.title}</span>
            </div>
          ))}
        </div>

        {/* Dynamic Display Panel based on Step */}
        <div className="bugify-stage-display">
          {currentStep === 0 && (
            <div className="stage-content stage-0">
              <div className="stage-badge">STEP 01 — USER SUBMISSION</div>
              <div className="user-report-box">
                <AlertTriangle size={24} className="text-accent" />
                <div>
                  <h4>User Submission Recorded:</h4>
                  <p className="user-quote">"Something broke during checkout payment auth on mobile view."</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="stage-content stage-1">
              <div className="stage-badge">STEP 02 — CAPTURE STACK & CONTEXT</div>
              <div className="stack-capture-box">
                <pre><code>
{`[LOG] 2026-10-07T23:28:02.102Z - Exception thrown in AuthProvider
Uncaught TypeError: Cannot read properties of undefined (reading 'token')
  at CheckoutModal.jsx:42:15
  at dispatchAuth (AuthContext.jsx:110)`}
                </code></pre>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="stage-content stage-2">
              <div className="stage-badge">STEP 03 — AI NEURAL DIAGNOSIS</div>
              <div className="ai-scanning-box">
                <div className="scanner-line"></div>
                <div className="ai-scan-info">
                  <Cpu size={28} className="text-accent scan-icon" />
                  <p>Analyzing stack trace context & comparing against commit history...</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="stage-content stage-3">
              <div className="stage-badge">STEP 04 — ROOT CAUSE ISOLATED</div>
              <div className="bug-detected-box">
                <AlertTriangle size={28} style={{ color: '#FF5E36' }} />
                <div>
                  <h4 style={{ color: '#FF5E36' }}>Race Condition in Token Storage</h4>
                  <p>Auth token cleared prior to payload resolution during fast re-renders.</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="stage-content stage-4">
              <div className="stage-badge">STEP 05 — STRUCTURED DEV TICKET</div>
              <div className="ticket-ready-box">
                <div className="ticket-header">
                  <CheckCircle2 size={20} className="text-accent" />
                  <span>JIRA / GITHUB TICKET #409 CREATED</span>
                </div>
                <pre><code>
{`Title: Fix Auth Token Race Condition in CheckoutModal
Severity: HIGH
Suggested Fix: Add nullish coalescing guard on token state before API dispatch.`}
                </code></pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
