import React from 'react'
import FeatureCard from './FeatureCard'

const FeatureGrid: React.FC = () => {
  return (
    <div className="features hero-features" id="features">
      <FeatureCard
        title="Easy Training"
        description="Upload your images and fine-tune your model with simple settings. No technical knowledge required."
      >
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </FeatureCard>

      <FeatureCard
        title="Instant Deployment"
        description="Once trained, deploy your model instantly. Generate unique images anytime, anywhere."
      >
        <svg viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      </FeatureCard>

      <FeatureCard
        title="Secure & Private"
        description="Your training data is secure. Train on your own private server with full control over your data."
      >
        <svg viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </FeatureCard>

      <FeatureCard
        title="Lightning Fast"
        description="Train models in minutes, not hours. Optimized infrastructure for maximum speed and efficiency."
      >
        <svg viewBox="0 0 24 24">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      </FeatureCard>
    </div>
  )
}

export default FeatureGrid
