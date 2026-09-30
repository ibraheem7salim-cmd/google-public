import React, { useState } from 'react';
import { FILM_ITEMS } from '../data/films';
import { FilmItem } from '../types';
import { CursorMode } from './CustomCursor';
import { Play, X, ExternalLink, Clapperboard } from 'lucide-react';

interface FilmArchiveViewProps {
  setCursorMode: (mode: CursorMode, text?: string) => void;
}

export const FilmArchiveView: React.FC<FilmArchiveViewProps> = ({ setCursorMode }) => {
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Film Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b-2 border-neutral-900/20">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 uppercase tracking-widest">
            <Clapperboard className="w-4 h-4 text-red-600" />
            <span>CINEMATIC ARCHIVE // 24FPS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-neutral-900 leading-none">
            FILM &amp; VIDEO
          </h2>

          <p className="font-hand text-2xl text-blue-600 -rotate-1">
            "brand films, commercial stories &amp; documentary shorts"
          </p>
        </div>

        <div className="font-mono text-xs text-neutral-500 max-w-xs text-left md:text-right">
          CAMERA REEL ARCHIVE // SHOT ON CINEMA PRIMES &amp; ANAMORPHIC GLASS
        </div>
      </div>

      {/* Cinematic Horizontal Frames */}
      <div className="space-y-16">
        {FILM_ITEMS.map((film, index) => {
          const frameIndex = String(index + 1).padStart(2, '0');

          return (
            <div
              key={film.id}
              onClick={() => setActiveFilm(film)}
              onMouseEnter={() => setCursorMode('play', 'FILM')}
              onMouseLeave={() => setCursorMode('default')}
              className="group relative bg-white p-4 sm:p-6 border-2 border-neutral-900 shadow-[6px_6px_0px_#000] cursor-pointer hover:-translate-y-1 transition-all duration-300"
            >
              {/* Slate Header */}
              <div className="flex items-center justify-between font-mono text-xs text-neutral-500 border-b border-neutral-200 pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-black text-neutral-950 bg-amber-300 px-2 py-0.5 border border-black">
                    SCENE {frameIndex}
                  </span>
                  <span className="font-bold text-neutral-900">{film.client}</span>
                  <span className="text-neutral-400">·</span>
                  <span>{film.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">● REC</span>
                  <span>{film.duration || '02:00'}</span>
                </div>
              </div>

              {/* Huge Movie Frame */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-neutral-950 overflow-hidden mb-5 border border-neutral-800">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover filter contrast-105 brightness-90 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="bg-amber-300 text-neutral-950 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-black shadow-[4px_4px_0px_#000] flex items-center gap-2 transition-transform group-hover:scale-110">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    <span>▶ PLAY FILM</span>
                  </div>
                </div>

                {/* Anamorphic Scope HUD overlay */}
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm font-mono text-[10px] text-white px-2.5 py-1">
                  2.39:1 CINEMASCOPE
                </div>
              </div>

              {/* Title & Technical Role */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-wider block">
                    {film.type}
                  </span>
                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {film.title}
                  </h3>
                </div>

                <div className="sm:text-right space-y-1">
                  <span className="font-mono text-[11px] text-neutral-400 uppercase block">
                    DIRECTOR OF PHOTOGRAPHY &amp; EDIT
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
                    {film.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Vimeo Cinema Lightbox Player */}
      {activeFilm && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-10 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveFilm(null)}
        >
          <div
            className="w-full max-w-5xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-white font-mono text-xs border-b border-white/20 pb-3">
              <div>
                <span className="text-amber-300 font-bold">{activeFilm.title}</span>
                <span className="mx-2 text-white/40">//</span>
                <span>{activeFilm.type}</span>
              </div>
              <button
                onClick={() => setActiveFilm(null)}
                className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Vimeo Embed */}
            <div className="w-full aspect-video bg-black shadow-2xl border-2 border-white/20 overflow-hidden">
              <iframe
                src={`https://player.vimeo.com/video/${activeFilm.vimeoId || '76979871'}?autoplay=1&color=ffffff&title=0&byline=0&portrait=0`}
                title={activeFilm.title}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Bottom Info */}
            <div className="flex items-center justify-between text-xs font-mono text-white/60 pt-2">
              <p>{activeFilm.description}</p>
              {activeFilm.vimeoUrl && (
                <a
                  href={activeFilm.vimeoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-amber-300 hover:underline"
                >
                  <span>OPEN ON VIMEO</span>
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
