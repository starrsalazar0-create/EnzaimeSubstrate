import React from 'react';

const particles = [
  { left: '8%', top: '18%', size: 4, color: 'bg-white/70', duration: 10, delay: 0 },
  { left: '22%', top: '65%', size: 3, color: 'bg-rose-200/60', duration: 12, delay: 1.5 },
  { left: '42%', top: '30%', size: 5, color: 'bg-amber-200/60', duration: 14, delay: 0.8 },
  { left: '68%', top: '22%', size: 3, color: 'bg-violet-200/60', duration: 11, delay: 2.2 },
  { left: '78%', top: '70%', size: 4, color: 'bg-white/50', duration: 13, delay: 0.5 },
  { left: '55%', top: '80%', size: 2, color: 'bg-rose-100/60', duration: 9, delay: 1 },
];

export default function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-10 top-14 h-16 w-16 rounded-full bg-pink-200/20 blur-2xl" />
      <div className="absolute right-14 top-32 h-20 w-20 rounded-full bg-violet-200/20 blur-2xl" />
      <div className="absolute left-1/4 bottom-20 h-24 w-24 rounded-full bg-rose-200/20 blur-2xl" />
      <div className="absolute right-1/3 bottom-28 h-16 w-16 rounded-full bg-amber-200/20 blur-2xl" />
      {particles.map((particle, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full ${particle.color} shadow-[0_0_20px_rgba(255,255,255,0.12)] animate-floating`}
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
