import React from 'react';
import FloatingPetals from '@/components/love/FloatingPetals';
import Hero from '@/components/love/Hero';
import LeafDivider from '@/components/love/LeafDivider';
import OpeningLetter from '@/components/love/OpeningLetter';
import LoveNotes from '@/components/love/LoveNotes';
import BucketList from '@/components/love/BucketList';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f3ece9] via-[#f6d6da]/20 to-[#f6ece6] overflow-x-hidden">
      <div className="absolute inset-0 grid grid-cols-[repeat(12,minmax(0,1fr))] gap-4 opacity-10 pointer-events-none">
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={idx} className="border-r border-[#c3b2b5]/20" />
        ))}
      </div>
      <FloatingPetals />
      <div className="relative z-10">
        <Hero />
        <LeafDivider />
        <OpeningLetter />
        <LeafDivider />
        <LoveNotes />
        <LeafDivider />
        <BucketList />
        <footer className="text-center py-12 px-6 border-t border-[#a0668b]/15">
          <p className="font-mono text-[0.6rem] text-[#6f4d5b] uppercase tracking-[0.3em] mb-2">END OF REPORT</p>
          <p className="font-display text-2xl text-[#9f5673]">Enzaime & Substrate</p>
          <p className="font-mono text-xs text-[#7a5c6f] mt-2">bond status: stable · observation period: indefinite 🧬</p>
        </footer>
      </div>
    </div>
  );
}
