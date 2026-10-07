import React, { useState } from 'react';
import { Terminal, Code, Globe, Play, CheckCircle } from 'lucide-react';

export function CodeNativeShowcase() {
  const [activeTab, setActiveTab] = useState('telugu');
  const [codeOutput, setCodeOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setCodeOutput('⚡ Executing in Telugu sandbox...\n[SUCCESS] Output: "నమస్కారం ప్రపంచం! CodeNative కి స్వాగతం."');
    setTimeout(() => setIsRunning(false), 400);
  };

  return (
    <div className="project-interactive-card codenative-card">
      <div className="card-top-bar">
        <div className="card-window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="card-title-badge">
          <Globe size={13} className="badge-icon" />
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
        <div className="codenative-editor">
          <div className="editor-header">
            <span className="file-name"><Code size={14} /> main_lesson.py</span>
            <button className="run-code-btn" onClick={handleRun} disabled={isRunning}>
              <Play size={12} fill="#080808" /> {isRunning ? 'EXECUTING...' : 'RUN CODE'}
            </button>
          </div>

          <pre className="code-display">
            <code>
{activeTab === 'telugu' ? (
`# 1. తెలుగు వివరణ (Telugu Concept)
# కంప్యూటర్ కు సంకేతాలు పంపే ఫంక్షన్

def welcome_learner(name):
    # ప్రింట్ ఫంక్షన్ సందేశాన్ని చూపుతుంది
    message = f"నమస్కారం {name}! programming సులభం."
    return message

print(welcome_learner("Mohan"))`
) : (
`# CodeNative Flask Backend Compiler Route
@app.route("/api/v1/compile", methods=["POST"])
def execute_telugu_sandbox():
    payload = request.get_json()
    code = payload.get("code")
    result = supabase_sandbox_eval(code)
    return jsonify({"status": "success", "output": result})`
)}
            </code>
          </pre>

          {codeOutput && (
            <div className="code-terminal-output">
              <Terminal size={14} />
              <pre>{codeOutput}</pre>
            </div>
          )}
        </div>

        <div className="codenative-stats-panel">
          <div className="stat-pill">
            <CheckCircle size={16} className="stat-icon" />
            <div>
              <span className="stat-num">0%</span>
              <span className="stat-desc">Language Barrier</span>
            </div>
          </div>
          <div className="stat-pill">
            <span className="stat-num">Supabase</span>
            <span className="stat-desc">Realtime Sandbox DB</span>
          </div>
          <div className="stat-pill">
            <span className="stat-num">Flask</span>
            <span className="stat-desc">Python Microservice</span>
          </div>
        </div>
      </div>
    </div>
  );
}
