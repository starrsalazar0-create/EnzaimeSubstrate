import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function LoveNotes() {
  const reasons = [
    {
      title: 'REASON #1',
      text: 'You make even the worst days feel worth it.'
    },
    {
      title: 'REASON #2',
      text: 'You\'re always the first person I go to when things are rough, because I can trust you with my life.'
    },
    {
      title: 'REASON #3',
      text: 'You try so hard to be the best that you can, I admire you deeply for that, and you\'re doing great.'
    },
    {
      title: 'REASON #4',
      text: 'You are the sweetest person I know, you\'re always kind, and that\'s the most attractive thing a person can express.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-white/90 border border-[#d9b0ba]/30 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.06)]">
      <div className="mb-6">
        <p className="font-mono text-[0.7rem] text-[#6f4d5b] uppercase tracking-[0.28em]">Active Binding Sites</p>
        <p className="text-sm text-[#5e4452] mt-2">select to reveal affinity data</p>
      </div>
      <div className="space-y-6">
        {reasons.map((reason, index) => {
          const selected = activeIndex === index;
          return (
            <motion.button
              key={reason.title}
              type="button"
              onClick={() => setActiveIndex(selected ? null : index)}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className={`w-full text-left rounded-3xl p-6 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9f5673]/40 ${selected ? 'border-[#9f5673] bg-[#f8e8ef] shadow-[0_20px_80px_rgba(159,86,115,0.12)] ring-2 ring-[#d38fb7]/30' : 'border-[#e9d0d8]/70 bg-[#f7eef1] hover:border-[#c28aa7]'}`}
              aria-expanded={selected}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-[#7b5364] uppercase tracking-[0.26em] mb-3">{reason.title}</p>
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#9f5673] mb-3">tap to analyze</p>
                </div>
                <span className="font-display text-lg text-[#9f5673]">{selected ? '▾' : '▸'}</span>
              </div>
              <div className="mt-3 overflow-hidden">
                <AnimatePresence initial={false}>
                  {selected ? (
                    <motion.div
                      key="content"
                      initial={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                      animate={reduceMotion ? undefined : { opacity: 1, height: 'auto' }}
                      exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: 'easeOut' }}
                      className="space-y-3"
                    >
                      <p className="font-semibold text-[#6f4d5b]">analysis result</p>
                      <p className="text-sm leading-7 text-[#5e4452]">{reason.text}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="placeholder"
                      initial={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                      animate={reduceMotion ? undefined : { opacity: 1, height: 'auto' }}
                      exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: 'easeOut' }}
                      className="space-y-3"
                    >
                      <p className="font-semibold text-[#6f4d5b]">analysis result</p>
                      <p className="text-sm leading-7 text-[#5e4452]/80">Tap to analyze this binding site and reveal the affinity summary.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
