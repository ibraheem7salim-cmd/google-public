import React from 'react';
import { ABOUT_DATA } from '../data/about';
import { ArrowUpRight, MapPin, Mail, Instagram } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="w-full py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto border-t border-white/10">
      {/* Editorial Split: Portrait & Biography */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-white/10">
        {/* Left Column: Refined Editorial Portrait of Ibraheem */}
        <div className="lg:col-span-5 space-y-4">
          <div className="w-full aspect-[3/4] overflow-hidden bg-[#161616]">
            <img
              src={ABOUT_DATA.portraitImage}
              alt="Portrait of Ibraheem Salim"
              className="w-full h-full object-cover filter brightness-95 contrast-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center justify-between text-xs text-white/50 pt-1">
            <span className="font-display font-medium text-white/80">Ibraheem Salim</span>
            <span className="flex items-center gap-1 font-mono text-white/50">
              <MapPin className="w-3.5 h-3.5" />
              <span>Baghdad, Iraq</span>
            </span>
          </div>
        </div>

        {/* Right Column: Statement & Biography */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="block text-xs uppercase tracking-widest text-white/50 mb-3">
              About
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              {ABOUT_DATA.headline}
            </h2>
          </div>

          <div className="space-y-5 text-base md:text-lg text-white/80 font-light leading-relaxed">
            {ABOUT_DATA.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Contact & Info Block */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider text-white/70">
            <button
              onClick={onContactClick}
              className="flex items-center gap-1.5 text-white hover:text-white/70 cursor-pointer font-semibold"
            >
              <Mail className="w-4 h-4" />
              <span>{ABOUT_DATA.email}</span>
            </button>
            <a
              href={ABOUT_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white hover:text-white/70"
            >
              <Instagram className="w-4 h-4" />
              <span>{ABOUT_DATA.instagram}</span>
            </a>
          </div>
        </div>
      </div>

      {/* CAPABILITIES SECTION */}
      <div className="py-20 border-b border-white/10">
        <div className="mb-12">
          <span className="block text-xs uppercase tracking-widest text-white/50 mb-2">
            Practice
          </span>
          <h3 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-white">
            CAPABILITIES
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {ABOUT_DATA.capabilities.map((cap, idx) => {
            const indexString = String(idx + 1).padStart(2, '0');
            return (
              <div key={cap.title} className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-display text-base md:text-lg font-bold uppercase tracking-wider text-white">
                    {cap.title}
                  </h4>
                  <span className="font-mono text-xs text-white/30 tabular-nums">
                    {indexString}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* BRANDS & CLIENT EXPERIENCE */}
      <div className="py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="block text-xs uppercase tracking-widest text-white/50 mb-2">
              Collaborations &amp; Productions
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-white">
              SELECTED BRANDS
            </h3>
          </div>
          <p className="text-xs text-white/40 max-w-md font-light leading-relaxed">
            {ABOUT_DATA.brandNotice}
          </p>
        </div>

        {/* Clean Editorial Typographic Grid for Brands (No tacky logos or pill badges) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-6 text-sm font-medium tracking-wide text-white/70">
          {ABOUT_DATA.brandExperience.map((brand) => (
            <div
              key={brand}
              className="py-3 px-3 border border-white/5 hover:border-white/20 bg-white/[0.02] flex items-center justify-center text-center transition-colors text-white/80 hover:text-white"
            >
              <span>{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
