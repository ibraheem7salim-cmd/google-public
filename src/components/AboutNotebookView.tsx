import React from 'react';
import { ABOUT_DATA } from '../data/about';
import { CursorMode } from './CustomCursor';
import { MapPin, Mail, Instagram, ArrowUpRight } from 'lucide-react';

interface AboutNotebookViewProps {
  onContactClick: () => void;
  setCursorMode: (mode: CursorMode, text?: string) => void;
}

export const AboutNotebookView: React.FC<AboutNotebookViewProps> = ({
  onContactClick,
  setCursorMode,
}) => {
  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Top Editorial Notebook Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b-2 border-neutral-900/20">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              DIRECTOR DOSSIER // SEC.04
            </span>
            <span className="bg-amber-300 text-neutral-900 font-mono text-[10px] font-bold px-2 py-0.5 border border-black">
              VERIFIED
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-neutral-900 leading-none">
            ABOUT IBRAHEEM
          </h2>
        </div>

        <div className="font-mono text-xs text-neutral-500">
          LOCATION: BAGHDAD, IRAQ // AVAILABLE WORLDWIDE
        </div>
      </div>

      {/* Main Dossier Grid: Polaroid + Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-20 border-b-2 border-neutral-900/20">
        {/* Left Column: Taped Polaroid */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="absolute -top-10 -left-2 z-30 font-hand text-4xl text-red-600 -rotate-12 pointer-events-none select-none">
            <span>that's me. ↴</span>
          </div>

          <div className="relative w-72 sm:w-88 bg-white p-4 pb-8 shadow-2xl border-2 border-neutral-900 -rotate-2">
            <div className="masking-tape masking-tape-yellow -top-3 left-1/2 -translate-x-1/2 w-32 rotate-1" />

            <div className="aspect-[4/5] bg-neutral-950 overflow-hidden mb-4 border border-neutral-800">
              <img
                src={ABOUT_DATA.portraitImage}
                alt="Ibraheem Salim portrait"
                className="w-full h-full object-cover filter contrast-105 brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-1 text-center font-mono">
              <p className="font-bold text-sm text-neutral-900">IBRAHEEM SALIM</p>
              <p className="text-xs text-neutral-500">PHOTOGRAPHER &amp; VIDEOGRAPHER</p>
              <p className="font-hand text-xl text-neutral-700 pt-1">Baghdad, Iraq</p>
            </div>
          </div>
        </div>

        {/* Right Column: Statement, Disciplines & Bio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">
              STATEMENT &amp; PHILOSOPHY
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-neutral-900 leading-tight">
              {ABOUT_DATA.headline}
            </h3>
          </div>

          <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base font-normal">
            {ABOUT_DATA.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Capabilities Grid as Tactile Cards */}
          <div className="pt-6 space-y-3">
            <span className="font-mono text-xs font-bold text-neutral-900 uppercase block tracking-wider">
              CORE CAPABILITIES // WHAT I DO
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ABOUT_DATA.capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="p-3 bg-white border border-neutral-300 shadow-sm space-y-1"
                >
                  <span className={`inline-block px-2 py-0.5 font-mono text-[10px] font-bold border ${cap.color}`}>
                    {cap.title}
                  </span>
                  <p className="text-xs text-neutral-600 leading-normal">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Visual Timeline of Experience (Sagerlabs, Kashida Studio, Cagency, etc.) */}
      <div className="py-20 border-b-2 border-neutral-900/20">
        <div className="flex items-baseline justify-between mb-10 border-b border-neutral-300 pb-3">
          <div className="space-y-1">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block">
              CHRONOLOGY
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-neutral-900">
              STUDIO &amp; PRODUCTION EXPERIENCE
            </h3>
          </div>
          <span className="font-hand text-xl text-neutral-600 -rotate-2 hidden sm:inline">
            selected studio milestones
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ABOUT_DATA.experienceTimeline.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 border border-neutral-300 shadow-sm space-y-2 hover:border-black transition-colors"
            >
              <div className="flex items-center justify-between font-mono text-[10px] text-amber-600 font-bold">
                <span>{item.period}</span>
                <span className="text-neutral-400">{item.location}</span>
              </div>
              <h4 className="font-display font-extrabold text-base text-neutral-900">
                {item.organization}
              </h4>
              <p className="font-mono text-xs text-neutral-700 font-medium">
                {item.role}
              </p>
              <span className="inline-block font-mono text-[10px] text-neutral-400 uppercase">
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Brands: Editorial arrangement */}
      <div className="pt-20">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
          <div className="space-y-1">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block">
              COMMERCIAL EXPOSURE
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-neutral-900">
              BRANDS WORKED WITH &amp; THROUGH
            </h3>
          </div>
          <p className="font-mono text-xs text-neutral-500 max-w-sm">
            {ABOUT_DATA.brandNotice}
          </p>
        </div>

        {/* Editorial Text Arrangement (Anti-corporate logo wall) */}
        <div className="flex flex-wrap gap-2.5">
          {ABOUT_DATA.brandExperience.map((brand, i) => (
            <span
              key={brand}
              className="px-3.5 py-1.5 bg-white border border-neutral-300 font-mono text-xs font-semibold text-neutral-800 shadow-sm hover:bg-neutral-900 hover:text-white transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
