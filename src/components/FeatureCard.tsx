import React from 'react'

interface FeatureCardProps {
  title: string
  description: string
  children?: React.ReactNode // optional icon
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, children }) => {
  return (
    <div className="feature-card">
      {children && <div className="feature-icon">{children}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default FeatureCard
