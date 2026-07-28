import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ChevronDown } from 'lucide-react';

const START_DATE = new Date('2026-01-13T00:00:00Z');

function TimeUnit({ value, label }) {
  return (
    <div className="text-center">
      <div className="font-mono text-2xl md:text-4xl font-medium text-deepRose tabular-nums">
        {value}
      </div>
      <div className="font-mono text-[0.6rem] md:text-xs text-botanical uppercase tracking-[0.2em] mt-1">{label}</div>
    </div>
  );
}

export default function Hero() {
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateElapsed = () => {
      const diff = Date.now() - START_DATE.getTime();
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setElapsed({ days, hours, minutes, seconds });
    };

    updateElapsed();
    const intervalId = window.setInterval(updateElapsed, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24">
      <div className="absolute left-2 md:left-12 top-0 h-full w-16 md:w-24 text-botanical opacity-30 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(143,133,111,0.15),_transparent_45%)]" />
      </div>
      <div className="absolute right-2 md:right-12 top-0 h-full w-16 md:w-24 text-sage opacity-30 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(142,152,114,0.14),_transparent_42%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10 px-6"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Activity className="w-4 h-4 text-botanical" />
          <span className="font-mono text-xs text-botanical uppercase tracking-[0.3em]">Bonded Pair Analysis</span>
          <Activity className="w-4 h-4 text-botanical" />
        </div>

        <p className="font-display text-xl md:text-2xl text-rose-500 mb-4">we met in biology class {'<3'}</p>
        <div className="flex flex-col items-center gap-1 mb-8">
          <span className="font-mono text-[0.6rem] text-botanical uppercase tracking-[0.2em]">Subject A</span>
          <h1 className="font-heading text-5xl md:text-7xl text-deepRose font-semibold">Enzaime</h1>
          <span className="font-mono text-sm text-rose-400 my-1">+</span>
          <span className="font-mono text-[0.6rem] text-botanical uppercase tracking-[0.2em]">Subject B</span>
          <h1 className="font-heading text-5xl md:text-7xl text-deepRose font-semibold">Substrate</h1>
        </div>

        <div className="inline-block border border-botanical/30 rounded-lg px-6 py-4 bg-white/50 backdrop-blur">
          <p className="font-mono text-[0.6rem] text-botanical uppercase tracking-[0.3em] mb-3">Reaction Duration</p>
          <div className="flex gap-4 md:gap-8 justify-center animate-heartbeat">
            <TimeUnit value={String(elapsed.days).padStart(3, '0')} label="Days" />
            <TimeUnit value={String(elapsed.hours).padStart(2, '0')} label="Hrs" />
            <TimeUnit value={String(elapsed.minutes).padStart(2, '0')} label="Min" />
            <TimeUnit value={String(elapsed.seconds).padStart(2, '0')} label="Sec" />
          </div>
        </div>

        <p className="font-mono text-[0.6rem] text-botanical/60 uppercase tracking-[0.2em] mt-4">Observation Period: Ongoing · Bond Classification: Covalent</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-rose-300"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
