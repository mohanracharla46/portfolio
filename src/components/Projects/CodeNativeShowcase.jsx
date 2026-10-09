import React, { useState } from 'react';
import { Terminal, Code, Globe, Play, CheckCircle2, ShieldCheck, Zap, Cpu, Database, Activity } from 'lucide-react';

export function CodeNativeShowcase() {
  const [activeTab, setActiveTab] = useState('telugu');
  const [codeOutput, setCodeOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [runCount, setRunCount] = useState(0);

  const handleRun = () => {
    setIsRunning(true);
    setCodeOutput('');
    setTimeout(() => {
      setIsRunning(false);
      setRunCount((prev) => prev + 1);
      setCodeOutput(
        '⚡ [COMPILER] Sandbox isolated execution complete (11.4ms)\n' +
        '✓ Output: "నమస్కారం Mohan! Telugu programming సులభం."'
      );
    }, 450);
  };

  const teluguLines = [
    { num: 1, text: '# 1. తెలుగు వివరణ (Telugu Concept)', type: 'comment' },
    { num: 2, text: '# కంప్యూటర్ కు సంకేతాలు పంపే ఫంక్షన్', type: 'comment' },
    { num: 3, text: '', type: 'empty' },
    { num: 4, text: 'def welcome_learner(name):', type: 'func' },
    { num: 5, text: '    # ప్రింట్ ఫంక్షన్ సందేశాన్ని చూపుతుంది', type: 'comment-ind' },
    { num: 6, text: '    message = f"నమస్కారం {name}! programming సులభం."', type: 'str-telugu' },
    { num: 7, text: '    return message', type: 'keyword' },
    { num: 8, text: '', type: 'empty' },
    { num: 9, text: 'print(welcome_learner("Mohan"))', type: 'call' }
  ];

  const pythonLines = [
    { num: 1, text: '# CodeNative Flask Sandbox API Route', type: 'comment' },
    { num: 2, text: '@app.route("/api/v1/compile", methods=["POST"])', type: 'decorator' },
    { num: 3, text: 'def execute_telugu_sandbox():', type: 'func' },
    { num: 4, text: '    payload = request.get_json()', type: 'code' },
    { num: 5, text: '    code = payload.get("code")', type: 'code' },
    { num: 6, text: '    result = supabase_sandbox_eval(code)', type: 'code' },
    { num: 7, text: '    return jsonify({"status": "success", "latency": "11ms", "output": result})', type: 'keyword' }
  ];

  const currentLines = activeTab === 'telugu' ? teluguLines : pythonLines;

  return (
    <div className="project-interactive-card codenative-cyber-card">
      {/* Top Cyber Window Bar */}
      <div className="card-top-bar">
        <div className="card-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>

        <div className="card-title-badge glow-badge">
          <ShieldCheck size={13} className="badge-icon" />
          <span>telugu-compiler.codenative.in</span>
        </div>

        <div className="card-tab-buttons">
          <button
            className={`tab-btn ${activeTab === 'telugu' ? 'active' : ''}`}
            onClick={() => setActiveTab('telugu')}
          >
            TELUGU MODE
          </button>
          <button
            className={`tab-btn ${activeTab === 'python' ? 'active' : ''}`}
            onClick={() => setActiveTab('python')}
          >
            PYTHON BACKEND
          </button>
        </div>
      </div>

      <div className="codenative-body">
        {/* Futuristic Code Editor Container */}
        <div className="codenative-editor-box">
          <div className="editor-header">
            <div className="file-info">
              <Code size={14} className="file-icon" />
              <span className="file-name">main_lesson.py</span>
              <span className="latency-badge"><Zap size={10} /> 11ms latency</span>
            </div>
            <button
              className={`run-code-btn ${isRunning ? 'running' : ''}`}
              onClick={handleRun}
              disabled={isRunning}
            >
              <Play size={12} fill="currentColor" />
              {isRunning ? 'EXECUTING...' : 'RUN CODE'}
            </button>
          </div>

          {/* Syntax Highlighted Lines Container */}
          <div className="code-editor-viewport">
            <div className="code-line-numbers">
              {currentLines.map((line) => (
                <span key={line.num}>{line.num}</span>
              ))}
            </div>
            <div className="code-content-block">
              {currentLines.map((line) => (
                <div key={line.num} className={`code-line line-${line.type}`}>
                  {line.type === 'comment' || line.type === 'comment-ind' ? (
                    <span className="syn-comment">{line.text}</span>
                  ) : line.type === 'str-telugu' ? (
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;message = f
                      <span className="syn-telugu">"నమస్కారం &#123;name&#125;! programming సులభం."</span>
                    </span>
                  ) : line.type === 'func' ? (
                    <span>
                      <span className="syn-kw">def</span> <span className="syn-fn">welcome_learner</span>(name):
                    </span>
                  ) : line.type === 'decorator' ? (
                    <span className="syn-decorator">{line.text}</span>
                  ) : line.type === 'keyword' ? (
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="syn-kw">return</span> {line.text.replace('    return ', '')}
                    </span>
                  ) : line.type === 'call' ? (
                    <span>
                      <span className="syn-kw">print</span>(welcome_learner(<span className="syn-str">"Mohan"</span>))
                    </span>
                  ) : (
                    <span>{line.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Live Terminal Output Console */}
          {codeOutput ? (
            <div className="code-terminal-output fade-in">
              <div className="terminal-header">
                <Terminal size={13} />
                <span>EXECUTION CONSOLE // RUN #{runCount}</span>
              </div>
              <pre className="terminal-text">{codeOutput}</pre>
            </div>
          ) : (
            <div className="code-terminal-placeholder">
              <Terminal size={12} />
              <span>Click [RUN CODE] to test live execution...</span>
            </div>
          )}
        </div>

        {/* Integrated Horizontal HUD Console */}
        <div className="codenative-hud-console">
          {/* Metric 1: Language Barrier */}
          <div className="hud-console-item">
            <div className="hud-ring-wrapper">
              <svg className="hud-ring-svg" viewBox="0 0 36 36">
                <path
                  className="ring-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="ring-fill"
                  strokeDasharray="100, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="ring-center-val">0%</span>
            </div>
            <div className="hud-item-meta">
              <div className="hud-title-row">
                <span className="hud-label">LANGUAGE BARRIER</span>
                <span className="hud-status-badge lime">ZERO</span>
              </div>
              <span className="hud-subtext">Native Telugu Compiler</span>
            </div>
          </div>

          <div className="hud-divider" />

          {/* Metric 2: Supabase Sandbox DB */}
          <div className="hud-console-item">
            <div className="hud-icon-box cyan">
              <Database size={15} />
            </div>
            <div className="hud-item-meta">
              <div className="hud-title-row">
                <span className="hud-label">DATABASE</span>
                <span className="hud-status-badge green">● REALTIME</span>
              </div>
              <span className="hud-subtext">Supabase Sandbox Engine</span>
            </div>
          </div>

          <div className="hud-divider" />

          {/* Metric 3: Flask Microservice */}
          <div className="hud-console-item">
            <div className="hud-icon-box purple">
              <Cpu size={15} />
            </div>
            <div className="hud-item-meta">
              <div className="hud-title-row">
                <span className="hud-label">MICROSERVICE</span>
                <span className="hud-status-badge blue">11ms LATENCY</span>
              </div>
              <span className="hud-subtext">Flask Python Engine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

