import React from 'react';

export default function PhotoCollage({ editMode }) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-white/85 border border-[#d9b0ba]/25 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.06)]">
      <p className="font-mono text-[0.72rem] text-[#6f4d5b] uppercase tracking-[0.28em] mb-4">Memory Collage</p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="h-40 rounded-3xl bg-[#f0d6dc]" />
        <div className="h-40 rounded-3xl bg-[#d9c3d2] md:col-span-2" />
      </div>
      {editMode && <p className="mt-4 text-xs text-[#6f4d5b]">Edit mode: drag to rearrange memories.</p>}
    </section>
  );
}
