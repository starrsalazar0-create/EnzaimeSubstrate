import React from 'react';

const basePath = import.meta.env.BASE_URL;
const extensions = ['svg', 'jpg', 'png', 'webp'];

const specimens = [
  {
    id: 'SPEC-001',
    title: 'Uploaded visual observation',
    note: 'Fresh capture from the current collection.',
    name: 'IMG_2824'
  },
  {
    id: 'SPEC-002',
    title: 'Second visual observation',
    note: 'Archived specimen with subtle textures.',
    name: 'specimen-002'
  },
  {
    id: 'SPEC-003',
    title: 'Third visual observation',
    note: 'Observation marked for future study.',
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
  const currentExt = extensions.find((ext) => current.endsWith(`.${ext}`));

  if (!currentExt) {
    img.onerror = null;
    img.src = 'https://via.placeholder.com/600x420?text=Image+not+found';
    return;
  }

  const nextIndex = extensions.indexOf(currentExt) + 1;
  if (nextIndex < extensions.length) {
    img.src = buildImageSrc(name, extensions[nextIndex]);
  } else {
    img.onerror = null;
    img.src = 'https://via.placeholder.com/600x420?text=Image+not+found';
  }
}

export default function MusicPlayer() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-[#faf1f4] border border-[#e9d0d8]/40 rounded-[2rem] shadow-[0_30px_90px_rgba(0,0,0,0.04)]">
      <div className="mb-6">
        <p className="font-mono text-[0.7rem] text-[#6f4d5b] uppercase tracking-[0.28em]">FIG. 01</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#8a4f70]">Specimen Archive</h2>
        <p className="text-sm text-[#5e4452] mt-3">cataloged visual observations</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {specimens.map((specimen) => (
          <div key={specimen.id} className="rounded-[2rem] overflow-hidden border border-[#e9d0d8]/70 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.05)]">
            <div className="relative h-48 overflow-hidden">
              <img
                src={buildImageSrc(specimen.name, extensions[0])}
                data-name={specimen.name}
                alt={`${specimen.id} ${specimen.title}`}
                onError={handleImageFallback}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent px-4 py-3">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white">{specimen.id}</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-base font-semibold text-[#6f4d5b]">{specimen.title}</p>
              <p className="mt-2 text-sm leading-6 text-[#7a5c70]">{specimen.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
