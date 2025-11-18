import React from 'react'

interface AppHeaderProps {
  timerText: string
  timerRunning: boolean
  onBack: () => void
}

export const AppHeader: React.FC<AppHeaderProps> = ({ timerText, timerRunning, onBack }) => {
  return (
    <header className="app-header">
      <div className="app-title">CloneX Studio</div>
      <div className="app-controls">
        <div
          className="timer-display"
          style={{ display: timerRunning ? 'flex' : 'none' }}
          aria-hidden={!timerRunning}
        >
          <span id="timerText">{timerText}</span>
        </div>
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span>Connected</span>
        </div>
        <button className="btn-back" type="button" onClick={onBack}>
          ← Back to Home
        </button>
      </div>
    </header>
  )
}

export const AppSidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Quick Start Guide</h3>
        <div className="info-panel">
          <h4>Getting Started</h4>
          <ol>
            <li>Configure your LoRA settings</li>
            <li>Upload 15-30 training images</li>
            <li>Set trigger words</li>
            <li>Start training</li>
          </ol>
        </div>
      </div>

      <div className="sidebar-section">
        <h3>My Projects</h3>
        <div className="sidebar-item active">
          <span>●</span> Current Training
        </div>
        <div className="sidebar-item">
          <span>◐</span> Recent Models
        </div>
        <div className="sidebar-item">
          <span>★</span> Favorites
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Resources</h3>
        <div className="sidebar-item">Documentation</div>
        <div className="sidebar-item">Tutorials</div>
        <div className="sidebar-item">Community</div>
        <div className="sidebar-item">Support</div>
      </div>

      <div className="sidebar-section">
        <div className="info-panel">
          <h4>💡 Pro Tip</h4>
          <p>
            Use diverse images with various angles, lighting, and backgrounds for optimal model
            performance.
          </p>
        </div>
      </div>
    </aside>
  )
}
