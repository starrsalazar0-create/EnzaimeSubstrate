import React from 'react';

export default function OpeningLetter() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-white/90 border border-[#d9b0ba]/30 rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.08)] backdrop-blur-sm">
      <div className="mb-8">
        <p className="font-mono text-[0.7rem] text-[#6f4d5b] uppercase tracking-[0.28em] mb-3">LOG 001</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#8a4f70]">Observation Log</h2>
      </div>

      <div className="space-y-6 text-[#5e4452]">
        <div className="rounded-3xl bg-[#f7eef1] p-6 border border-[#e9d0d8]/70">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#7b5364] mb-4">Field Note 001 — Observation Log</p>
          <div className="grid gap-3 sm:grid-cols-2 text-sm text-[#5e4452]">
            <div><span className="font-semibold">Subject:</span> Enzaime</div>
            <div><span className="font-semibold">Observer:</span> Substrate</div>
            <div className="sm:col-span-2"><span className="font-semibold">Date of Initial Contact:</span> January 13, 2026</div>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-7">
          <p>It all started in biology class.</p>
          <p>What started as a glance, by now has compounded into something much more. You are my favorite variable, you're the constant in my every equation. You give me reason in the things that make me feel hopeless.</p>
          <p>Thank you for being the Enzaime to my Substrate, for lowering the activation energy of my happiness, thank you for making every reaction faster. :3</p>
          <p>The data is clear: this bond is irreversible.</p>
          <p>Here's to a lifetime of sillies.</p>
          <p className="font-semibold">Yours forever,<br />Substrate</p>
        </div>
      </div>
    </section>
  );
}
