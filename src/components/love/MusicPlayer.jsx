import React from 'react';

const basePath = import.meta.env.BASE_URL;
const extensions = ['svg', 'jpg', 'png', 'webp'];

const specimens = [
  {
    id: 'SPEC-001',
    label: 'First visual observation',
    name: 'specimen-001'
  },
  {
    id: 'SPEC-002',
    label: 'Second visual observation',
    name: 'specimen-002'
  },
  {
    id: 'SPEC-003',
    label: 'Third visual observation',
    name: 'specimen-003'
  }
];

function buildImageSrc(name, ext) {
  return `${basePath}images/${name}.${ext}`;
}

function handleImageFallback(event) {
  const img = event.currentTarget;
  const name = img.dataset.name;
  const current = img.src;

  const next = extensions.find((ext) => current.endsWith(`.${ext}`));
  if (!next) {
    img.onerror = null;
    img.src = 'https://via.placeholder.com/600x420?text=Image+not+found';
    return;
  }

  const nextIndex = extensions.indexOf(next) + 1;
  if (nextIndex < extensions.length) {
    img.src = buildImageSrc(name, extensions[nextIndex]);
  } else {
    img.onerror = null;
    img.src = 'https://via.placeholder.com/600x420?text=Image+not+found';
  }
}

export default function MusicPlayer() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-[#faf1f4] border border-[#e6c9d3]/30 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.06)]">
      <div className="mb-6">
        <p className="font-mono text-[0.7rem] text-[#6f4d5b] uppercase tracking-[0.28em]">FIG. 01</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#8a4f70]">Specimen Archive</h2>
        <p className="text-sm text-[#5e4452] mt-3">cataloged visual observations</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {specimens.map((specimen) => (
          <div key={specimen.id} className="rounded-3xl overflow-hidden border border-[#e9d0d8]/70 bg-white shadow-sm">
            <img
              src={buildImageSrc(specimen.name, extensions[0])}
              data-name={specimen.name}
              alt={`${specimen.id} ${specimen.label}`}
              onError={handleImageFallback}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 bg-[#f9f2f5]">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[#9f5e7f] mb-2">{specimen.id}</p>
              <p className="text-sm font-semibold text-[#6f4d5b]">{specimen.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
