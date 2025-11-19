import  { useMemo } from 'react'

function Particles() {
    const particles = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 10 + 10}s`,
        delay: `${Math.random() * 5}s`,
      })),
    []
  );
  return (
    <div className="bg-animation">
          {particles.map((particle, index) => (
            <div
              key={index}
              className="particle"
              style={{
                left: particle.left,
                animationDuration: particle.duration,
                // animationDelay: particle.delay,
              }}
            />
          ))}
        </div>
  )
}

export default Particles