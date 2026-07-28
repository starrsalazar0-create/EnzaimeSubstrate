import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'protocol04Checklist';
const items = [
  'Go to the mall together',
  'Have a sleepover one day',
  'Achieve the experience of looking at rings together eventually',
  'Go thrifting together and pick out an outfit for each-other',
  'Teach you how to cook your first meal'
];

export default function BucketList() {
  const [completed, setCompleted] = useState(() => {
    if (typeof window === 'undefined') return Array(items.length).fill(false);
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : null;
      if (Array.isArray(parsed) && parsed.length === items.length) {
        return parsed;
      }
    } catch {
      // ignore storage errors
    }
    return Array(items.length).fill(false);
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {
      // ignore storage errors
    }
  }, [completed]);

  const toggleItem = (index) => {
    setCompleted((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-[#faf1f4] border border-[#e6c9d3]/30 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.06)]">
      <div className="mb-6">
        <p className="font-mono text-[0.7rem] text-[#6f4d5b] uppercase tracking-[0.28em]">PROTOCOL 04</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#8a4f70]">Hypothesis Testing</h2>
        <p className="text-sm text-[#5e4452] mt-3">projected experimental outcomes</p>
      </div>
      <ul className="space-y-4 text-sm leading-7 text-[#5e4452]">
        {items.map((item, index) => (
          <li key={item} className="flex items-start gap-3">
            <label className="flex items-center gap-3 w-full cursor-pointer rounded-3xl border border-[#e9d0d8]/70 bg-white/80 px-4 py-4 transition hover:border-[#c28aa7]">
              <input
                type="checkbox"
                checked={completed[index]}
                onChange={() => toggleItem(index)}
                className="mt-1 h-4 w-4 rounded border-[#c8a7b9] text-[#9f5673] focus:ring-[#9f5673]"
              />
              <span className={`block text-sm leading-7 ${completed[index] ? 'line-through text-[#8f7b8a]' : 'text-[#5e4452]'}`}>
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
