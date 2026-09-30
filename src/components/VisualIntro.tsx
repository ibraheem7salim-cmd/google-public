import React from 'react';
import { CursorMode } from './CustomCursor';
import { ArrowUpRight } from 'lucide-react';

interface VisualIntroProps {
  onLearnMore: () => void;
  setCursorMode: (mode: CursorMode, text?: string) => void;
}

export const VisualIntro: React.FC<VisualIntroProps> = ({ onLearnMore, setCursorMode }) => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto border-t-2 border-neutral-800/10">
      {/* Background Section Stamp */}
      <div className="flex items-center justify-between font-mono text-xs text-neutral-400 pb-8 border-b border-dashed border-neutral-300">
        <span>NOTEBOOK ENTRY // SEC.01</span>
        <span>INDEX / BIOGRAPHY &amp; VISION</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-12">
        {/* Left Column: Polaroid Print with Tape and Handwritten Pointer */}
        <div className="lg:col-span-5 relative flex justify-center">
          {/* Handwritten Annotation pointing at the portrait */}
          <div className="absolute -top-10 -left-4 sm:left-4 z-30 font-hand text-3xl sm:text-4xl text-red-600 -rotate-12 pointer-events-none select-none">
            <span>that's me. ↴</span>
          </div>

          {/* Polaroid Frame */}
          <div
            className="relative w-72 sm:w-80 bg-white p-4 pb-8 shadow-2xl border border-neutral-300 -rotate-2 hover:rotate-0 transition-transform duration-300 group cursor-pointer"
            onMouseEnter={() => setCursorMode('view', 'IBRAHEEM')}
            onMouseLeave={() => setCursorMode('default')}
            onClick={onLearnMore}
          >
            {/* Top Washi Tape */}
            <div className="masking-tape masking-tape-yellow -top-3 left-1/2 -translate-x-1/2 w-28 rotate-1" />

            {/* Photo Inside Polaroid */}
            <div className="aspect-[4/5] bg-neutral-900 overflow-hidden mb-4 relative">
              <img
                src="/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg"
                alt="Ibraheem Salim portrait"
                className="w-full h-full object-cover filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 right-2 bg-black/60 font-mono text-[9px] text-white px-2 py-0.5">
                35MM LENS
              </div>
            </div>

            {/* Handwritten Label on bottom border of polaroid */}
            <div className="text-center font-hand text-xl text-neutral-800">
              Ibraheem Salim — Baghdad, 2026
            </div>
          </div>
        </div>

        {/* Right Column: Statement, Physical Stickers, and Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">
              IDENTIFICATION
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 leading-tight">
              WHO'S BEHIND THE CAMERA?
            </h2>
          </div>

          <p className="text-xl sm:text-2xl text-neutral-800 font-light leading-snug">
            I'm <span className="font-bold underline decoration-amber-400 decoration-4">Ibraheem Salim</span>, a photographer and videographer based in <span className="font-semibold text-neutral-900">Baghdad, Iraq</span>.
          </p>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl font-normal">
            I develop visual ideas and translate brands, people, products, and cultural environments into bold, coherent visual stories. Working across commercial campaigns, independent documentaries, and studio lighting design.
          </p>

          {/* Physical Stickers for Capabilities */}
          <div className="pt-2">
            <span className="block font-mono text-[11px] text-neutral-400 uppercase tracking-wider mb-2">
              DISCIPLINES // STICKERS
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 bg-amber-300 text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
                PHOTO
              </span>
              <span className="px-3 py-1 bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] rotate-2">
                FILM
              </span>
              <span className="px-3 py-1 bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] -rotate-2">
                VISUAL DIRECTION
              </span>
              <span className="px-3 py-1 bg-red-500 text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] rotate-1">
                ART DIRECTION
              </span>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={onLearnMore}
              onMouseEnter={() => setCursorMode('arrow')}
              onMouseLeave={() => setCursorMode('default')}
              className="inline-flex items-center gap-2 bg-neutral-900 text-white font-mono text-xs font-bold uppercase px-4 py-2.5 border border-black shadow-[3px_3px_0px_rgba(0,0,0,0.3)] hover:bg-neutral-800 transition-all cursor-pointer"
            >
              <span>Full Biography &amp; Studios</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <span className="font-hand text-lg text-neutral-500 -rotate-3">
              scroll down for projects ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
