import React from 'react';

export default function MusicPlayer() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-[#faf1f4] border border-[#e6c9d3]/30 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.06)]">
      <div className="mb-6">
        <p className="font-mono text-[0.7rem] text-[#6f4d5b] uppercase tracking-[0.28em]">FIG. 01</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#8a4f70]">Specimen Archive</h2>
        <p className="text-sm text-[#5e4452] mt-3">cataloged visual observations</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl bg-[#f3dee4] p-6 text-center text-sm font-semibold text-[#7b5364]">SPEC-001</div>
        <div className="rounded-3xl bg-[#f3dee4] p-6 text-center text-sm font-semibold text-[#7b5364]">SPEC-002</div>
        <div className="rounded-3xl bg-[#f3dee4] p-6 text-center text-sm font-semibold text-[#7b5364]">SPEC-003</div>
      </div>
      <p className="mt-7 text-xs uppercase tracking-[0.28em] font-mono text-[#6f4d5b]">FIG. 03</p>
    </section>
  );
}
