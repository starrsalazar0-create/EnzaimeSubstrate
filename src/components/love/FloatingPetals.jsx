import React from 'react';

export default function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-10 top-14 h-16 w-16 rounded-full bg-pink-200/20 blur-2xl" />
      <div className="absolute right-14 top-32 h-20 w-20 rounded-full bg-violet-200/20 blur-2xl" />
      <div className="absolute left-1/4 bottom-20 h-24 w-24 rounded-full bg-rose-200/20 blur-2xl" />
      <div className="absolute right-1/3 bottom-28 h-16 w-16 rounded-full bg-amber-200/20 blur-2xl" />
    </div>
  );
}
