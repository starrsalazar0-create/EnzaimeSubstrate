import React from 'react';

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

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-white/90 border border-[#d9b0ba]/30 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.06)]">
      <div className="mb-6">
        <p className="font-mono text-[0.7rem] text-[#6f4d5b] uppercase tracking-[0.28em]">Active Binding Sites</p>
        <p className="text-sm text-[#5e4452] mt-2">select to reveal affinity data</p>
      </div>
      <div className="space-y-6">
        {reasons.map((reason) => (
          <div key={reason.title} className="rounded-3xl bg-[#f7eef1] p-6 border border-[#e9d0d8]/70">
            <p className="font-mono text-xs text-[#7b5364] uppercase tracking-[0.26em] mb-3">{reason.title}</p>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#9f5673] mb-3">tap to analyze</p>
            <p className="font-semibold text-[#6f4d5b] mb-3">analysis result</p>
            <p className="text-sm leading-7 text-[#5e4452]">{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
