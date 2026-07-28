import React, { useRef, useEffect } from 'react';

function rand(min, max) { return Math.random() * (max - min) + min; }

export default function Particles({ count = 40 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // skip heavy animation

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = canvas.clientWidth * devicePixelRatio;
    let height = canvas.height = canvas.clientHeight * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const colors = ['#ffdce6', '#f6d6da', '#e7f1ff', '#fdeff4'];

    const particles = Array.from({ length: count }).map(() => ({
      x: rand(0, canvas.clientWidth),
      y: rand(0, canvas.clientHeight),
      r: rand(1, 6),
      vx: rand(-0.15, 0.15),
      vy: rand(-0.05, 0.05),
      hue: colors[Math.floor(rand(0, colors.length))],
      alpha: rand(0.06, 0.22),
    }));

    function resize() {
      width = canvas.width = canvas.clientWidth * devicePixelRatio;
      height = canvas.height = canvas.clientHeight * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      // subtle blur backdrop
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = canvas.clientWidth + 10;
        if (p.x > canvas.clientWidth + 10) p.x = -10;
        if (p.y < -20) p.y = canvas.clientHeight + 20;
        if (p.y > canvas.clientHeight + 20) p.y = -20;

        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, hexToRgba(p.hue, p.alpha));
        grad.addColorStop(1, hexToRgba(p.hue, 0));
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fill();
      });
      rafRef.current = requestAnimationFrame(draw);
    }

    function hexToRgba(hex, a) {
      const c = hex.replace('#','');
      const bigint = parseInt(c, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    window.addEventListener('resize', resize);
    resize();
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none particle-canvas"
      aria-hidden="true"
    />
  );
}
