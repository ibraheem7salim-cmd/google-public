import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-end justify-between overflow-hidden bg-[#0c0c0c]">
      {/* Background Cinematic Visual with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_cinematic_baghdad_1790756937135.jpg"
          alt="Cinematic frame by Ibraheem Salim in Baghdad"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for typographic legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-black/20" />
        <div className="absolute inset-0 bg-black/20 backdrop-brightness-[0.88]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Main Titles */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-white leading-[0.95]">
              IBRAHEEM SALIM
            </h1>
            <p className="font-display text-lg sm:text-2xl md:text-3xl font-semibold uppercase tracking-wider text-white/90">
              PHOTOGRAPHER &amp; VIDEOGRAPHER
            </p>
            <p className="text-sm md:text-base text-white/70 font-normal tracking-wide">
              Visual direction, photography and film.
            </p>
          </div>

          {/* Location & Subtle Scroll Indicator */}
          <div className="flex flex-row md:flex-col items-start md:items-end justify-between md:justify-end gap-6 text-right">
            <div className="text-left md:text-right">
              <span className="block text-[11px] uppercase tracking-widest text-white/50">
                Location
              </span>
              <span className="text-sm font-medium text-white/90">
                Baghdad, Iraq
              </span>
            </div>

            <button
              onClick={onExploreWork}
              className="group flex items-center gap-3 text-xs uppercase tracking-widest text-white/80 hover:text-white cursor-pointer transition-colors"
            >
              <span>Selected Work</span>
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center transition-colors group-hover:border-white">
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Hairline separator */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />
    </section>
  );
};
