import React from 'react';

export default function BucketList() {
  const items = [
    'Go to the mall together',
    'Have a sleepover one day',
    'Achieve the experience of looking at rings together eventually',
    'Go thrifting together and pick out an outfit for each-other',
    'Teach you how to cook your first meal'
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-[#faf1f4] border border-[#e6c9d3]/30 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.06)]">
      <div className="mb-6">
        <p className="font-mono text-[0.7rem] text-[#6f4d5b] uppercase tracking-[0.28em]">PROTOCOL 04</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#8a4f70]">Hypothesis Testing</h2>
        <p className="text-sm text-[#5e4452] mt-3">projected experimental outcomes</p>
      </div>
      <ol className="space-y-3 list-decimal list-inside text-sm leading-7 text-[#5e4452]">
        {items.map((item, index) => (
          <li key={item} className="font-semibold">{item}</li>
        ))}
      </ol>
    </section>
  );
}
