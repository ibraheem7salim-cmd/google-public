import React, { useState } from 'react';
import { FILM_ITEMS } from '../data/films';
import { FilmItem } from '../types';
import { Play, X, ExternalLink } from 'lucide-react';

export const FilmSection: React.FC = () => {
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);

  return (
    <section id="film" className="w-full py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
        <div>
          <span className="block text-xs uppercase tracking-widest text-white/50 mb-3">
            Cinematography &amp; Direction
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
            FILM &amp; VIDEO
          </h2>
        </div>

        <p className="text-xs md:text-sm text-white/60 max-w-md">
          Commercial films, visual direction, documentary shorts, and high-velocity social campaigns shot on high-end digital cinema cameras.
        </p>
      </div>

      {/* Cinematic Widescreen Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
        {FILM_ITEMS.map((film, index) => {
          return (
            <div
              key={film.id}
              className="group cursor-pointer flex flex-col justify-between"
              onClick={() => setActiveFilm(film)}
            >
              {/* Large Cinematic Thumbnail */}
              <div className="relative w-full aspect-video overflow-hidden bg-[#161616] mb-5">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover img-cinematic brightness-90 group-hover:brightness-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim & play button */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                {film.duration && (
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-2.5 py-1 text-[11px] font-mono tabular-nums text-white/80">
                    {film.duration}
                  </div>
                )}
              </div>

              {/* Metadata */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
                  <span>{film.type}</span>
                  <span>·</span>
                  <span className="font-mono tabular-nums">{film.year}</span>
                  <span>·</span>
                  <span className="text-white/40">{film.client}</span>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-white/80 transition-colors">
                  {film.title}
                </h3>

                <p className="text-xs md:text-sm text-white/60 leading-relaxed max-w-xl">
                  {film.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Immersive Video Modal */}
      {activeFilm && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveFilm(null)}
        >
          <div
            className="w-full max-w-5xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top info and close */}
            <div className="flex items-center justify-between text-white/80">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-white/50">
                  {activeFilm.type} · {activeFilm.year}
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {activeFilm.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveFilm(null)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Responsive Vimeo Embed */}
            <div className="w-full aspect-video bg-black overflow-hidden relative shadow-2xl">
              <iframe
                src={`https://player.vimeo.com/video/${activeFilm.vimeoId || '76979871'}?autoplay=1&color=ffffff&title=0&byline=0&portrait=0&dnt=1`}
                title={activeFilm.title}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Bottom Credits & Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/60 pt-2">
              <p>{activeFilm.description}</p>
              {activeFilm.vimeoUrl && (
                <a
                  href={activeFilm.vimeoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/80 hover:text-white uppercase tracking-wider text-[11px] whitespace-nowrap"
                >
                  <span>Watch on Vimeo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
