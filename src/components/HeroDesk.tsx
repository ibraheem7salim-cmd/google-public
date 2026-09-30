import React, { useState } from 'react';
import { CursorMode } from './CustomCursor';
import { ArrowDownRight, Compass } from 'lucide-react';

interface HeroDeskProps {
  onExploreWork: () => void;
  setCursorMode: (mode: CursorMode, text?: string) => void;
}

export const HeroDesk: React.FC<HeroDeskProps> = ({ onExploreWork, setCursorMode }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width - 0.5) * 20; // max 10px shift
    const y = (clientY / height - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[92vh] pt-24 pb-16 px-4 sm:px-8 md:px-12 flex flex-col justify-center overflow-hidden bg-notebook-grid select-none"
    >
      {/* Background Notebook Elements & Grid Notes */}
      <div className="absolute top-6 left-8 font-mono text-[11px] text-neutral-400 tracking-wider hidden sm:block">
        REF: ARCHIVE_2026 // CONTACT SHEET VOL.04
      </div>
      <div className="absolute top-6 right-8 font-mono text-[11px] text-neutral-400 tracking-wider hidden sm:block">
        LOC: 33.3152° N, 44.3661° E
      </div>

      {/* Main Physical Composition Desk Container */}
      <div className="relative max-w-6xl mx-auto w-full">
        {/* Central Dominant Visual Frame with Tape & Viewfinder Elements */}
        <div
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#141414] shadow-2xl transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          }}
          onMouseEnter={() => setCursorMode('view', 'FOCUS')}
          onMouseLeave={() => setCursorMode('default')}
        >
          {/* Masking tape on top and bottom corners */}
          <div className="masking-tape masking-tape-yellow -top-3 left-10 w-24 -rotate-2" />
          <div className="masking-tape masking-tape-blue -bottom-3 right-12 w-28 rotate-1" />

          {/* Main Hero Photograph */}
          <img
            src="/src/assets/images/ibraheem_studio_hero_1790758994886.jpg"
            alt="Ibraheem Salim — Photographer & Videographer"
            className="w-full h-full object-cover brightness-95 filter contrast-105"
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Darkroom / Viewfinder HUD Overlay */}
          <div className="absolute inset-0 pointer-events-none p-4 sm:p-8 flex flex-col justify-between text-white/80 font-mono text-[10px] sm:text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-rec" />
                <span className="font-bold text-white">REC</span>
                <span className="text-white/40">|</span>
                <span>RAW 4K</span>
              </div>
              <div className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-amber-300">
                FRAME 024 / 120
              </div>
            </div>

            {/* Viewfinder crosshairs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-t border-b border-white/30 flex items-center justify-center">
              <div className="w-full h-[1px] bg-white/40" />
              <div className="h-full w-[1px] bg-white/40 absolute" />
            </div>

            <div className="flex items-end justify-between">
              <div className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                SHUTTER: 1/48 · ISO 400 · T2.1
              </div>
              <div className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-white/70">
                BAGHDAD SKYLINE · TIGRIS
              </div>
            </div>
          </div>

          {/* OVERSIZED EDITORIAL TYPOGRAPHY (Overlapping the image) */}
          <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 left-4 sm:left-8 z-30 pointer-events-none">
            <div className="space-y-0 text-left">
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-none drop-shadow-xl"
                style={{
                  textShadow: '0 4px 18px rgba(0,0,0,0.6)'
                }}
              >
                IBRAHEEM
              </h1>
              <div className="flex items-baseline gap-4">
                <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-amber-300 leading-none drop-shadow-xl"
                  style={{
                    textShadow: '0 4px 18px rgba(0,0,0,0.6)'
                  }}
                >
                  SALIM
                </h2>
                <span className="hidden sm:inline-block font-mono text-xs sm:text-sm text-neutral-900 bg-white px-2.5 py-1 shadow-md font-bold tracking-widest border border-black rotate-2">
                  DIRECTOR &amp; DP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* OVERLAPPING TAPED POLAROID 1 (Right Side: Automotive Film Frame) */}
        <div
          className="absolute -right-4 sm:-right-8 -top-8 sm:-top-12 z-20 w-44 sm:w-60 bg-white p-2.5 sm:p-3 shadow-xl border border-neutral-300 transition-transform duration-300 ease-out hidden md:block"
          style={{
            transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px) rotate(4deg)`,
          }}
          onMouseEnter={() => setCursorMode('view', 'POLAROID')}
          onMouseLeave={() => setCursorMode('default')}
        >
          {/* Masking tape on top */}
          <div className="masking-tape masking-tape-yellow -top-3 left-1/2 -translate-x-1/2 w-20 rotate-3" />
          <div className="aspect-[4/3] bg-neutral-900 overflow-hidden mb-2">
            <img
              src="/src/assets/images/commercial_automotive_film_1790756964850.jpg"
              alt="Test print"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="font-hand text-base text-neutral-800 text-center leading-tight">
            night expressway / roll 02
          </div>
        </div>

        {/* OVERLAPPING TAPED TEST STRIP 2 (Left Bottom: Portrait / Studio) */}
        <div
          className="absolute -left-4 sm:-left-8 -bottom-16 sm:-bottom-20 z-20 w-40 sm:w-52 bg-[#fdfcf7] p-2.5 shadow-xl border border-neutral-300 transition-transform duration-300 ease-out hidden sm:block"
          style={{
            transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px) rotate(-5deg)`,
          }}
          onMouseEnter={() => setCursorMode('view', 'PORTRAIT')}
          onMouseLeave={() => setCursorMode('default')}
        >
          <div className="masking-tape masking-tape-blue -top-3 left-6 w-16 -rotate-6" />
          <div className="aspect-[3/4] bg-neutral-900 overflow-hidden mb-2">
            <img
              src="/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg"
              alt="Ibraheem portrait test"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center justify-between font-mono text-[9px] text-neutral-500 uppercase">
            <span>SELF PORTRAIT</span>
            <span className="font-bold text-red-600">PASSED ✓</span>
          </div>
        </div>

        {/* HANDWRITTEN ANNOTATIONS & PHYSICAL STICKERS AROUND THE HERO */}
        {/* Annotation 1: Location */}
        <div
          className="absolute top-4 -left-6 sm:-left-12 z-30 font-hand text-2xl sm:text-3xl text-blue-700 -rotate-12 pointer-events-none"
          style={{
            transform: `rotate(${mousePos.x * 0.1 - 12}deg)`,
          }}
        >
          <span>baghdad / iraq 📍</span>
        </div>

        {/* Annotation 2: Visual Direction */}
        <div
          className="absolute top-28 right-4 sm:right-16 z-30 font-hand text-2xl text-emerald-700 rotate-6 pointer-events-none"
          style={{
            transform: `rotate(${mousePos.y * 0.1 + 6}deg)`,
          }}
        >
          <span>visual direction ✦</span>
        </div>

        {/* Annotation 3: Film + Photo sticker */}
        <div className="absolute -bottom-4 right-10 sm:right-28 z-30 flex items-center gap-2">
          <div className="bg-red-500 text-white font-mono text-xs font-bold uppercase px-3 py-1 shadow-md -rotate-3 border border-black">
            FILM + PHOTO
          </div>
          <div className="bg-amber-300 text-neutral-900 font-mono text-xs font-bold uppercase px-2.5 py-1 shadow-md rotate-2 border border-black">
            COMMERCIAL &amp; BRAND
          </div>
        </div>

        {/* Handwritten CTA: "selected work →" */}
        <div
          onClick={onExploreWork}
          className="absolute -bottom-24 sm:-bottom-28 right-4 sm:right-12 z-30 flex items-center gap-3 cursor-pointer group"
          onMouseEnter={() => setCursorMode('arrow')}
          onMouseLeave={() => setCursorMode('default')}
        >
          <div className="text-right">
            <span className="font-hand text-2xl sm:text-3xl text-neutral-900 block group-hover:text-blue-600 transition-colors">
              selected work ↓
            </span>
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              SCROLL OR CLICK TO EXPLORE
            </span>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-neutral-900 border border-black shadow-lg">
            <ArrowDownRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};
