import React, { useState } from 'react';
import { PHOTOGRAPHY_ITEMS } from '../data/photography';
import { PhotoItem, PhotoCategory } from '../types';
import { CursorMode } from './CustomCursor';
import { X, ChevronLeft, ChevronRight, Camera, Film, Eye } from 'lucide-react';

interface ContactSheetViewProps {
  setCursorMode: (mode: CursorMode, text?: string) => void;
}

const CATEGORIES: { id: PhotoCategory | 'ALL'; label: string }[] = [
  { id: 'ALL', label: 'ALL SHEETS' },
  { id: 'COMMERCIAL', label: 'COMMERCIAL' },
  { id: 'PORTRAITS', label: 'PORTRAITS' },
  { id: 'PRODUCT', label: 'PRODUCT' },
  { id: 'LIFESTYLE', label: 'LIFESTYLE' },
  { id: 'TRAVEL', label: 'TRAVEL' },
  { id: 'PERSONAL', label: 'PERSONAL' },
];

export const ContactSheetView: React.FC<ContactSheetViewProps> = ({ setCursorMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory | 'ALL'>('ALL');
  const [lightboxPhoto, setLightboxPhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = selectedCategory === 'ALL'
    ? PHOTOGRAPHY_ITEMS
    : PHOTOGRAPHY_ITEMS.filter((p) => p.category === selectedCategory);

  const currentIndex = lightboxPhoto
    ? filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setLightboxPhoto(filteredPhotos[currentIndex - 1]);
    } else {
      setLightboxPhoto(filteredPhotos[filteredPhotos.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredPhotos.length - 1) {
      setLightboxPhoto(filteredPhotos[currentIndex + 1]);
    } else {
      setLightboxPhoto(filteredPhotos[0]);
    }
  };

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Contact Sheet Darkroom Header */}
      <div className="bg-[#121212] text-[#f7f6f0] p-6 sm:p-8 border-2 border-black shadow-2xl mb-12 relative overflow-hidden">
        {/* Film sprocket top border */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-black flex items-center justify-around opacity-60">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-2.5 h-2 rounded-sm bg-neutral-800" />
          ))}
        </div>

        <div className="pt-4 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3 font-mono text-xs text-amber-400">
              <span>CONTACT SHEET // ROLL 001</span>
              <span>·</span>
              <span>KODAK VISION3 500T EMULSION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
              STILL ARCHIVE
            </h2>
            <p className="font-hand text-xl text-neutral-400 -rotate-1">
              "raw negatives, lighting tests &amp; editorial commissions"
            </p>
          </div>

          {/* Sheet Category Selectors */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  onMouseEnter={() => setCursorMode('arrow')}
                  onMouseLeave={() => setCursorMode('default')}
                  className={`px-3 py-1 font-mono text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer border ${
                    isActive
                      ? 'bg-amber-300 text-neutral-950 border-black'
                      : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-3 flex items-center justify-between font-mono text-[11px] text-white/40">
          <span>DEVELOPED: BAGHDAD DARKROOM // 2026</span>
          <span className="text-amber-400">GREASE PENCIL SELECTION: ACTIVE</span>
        </div>
      </div>

      {/* Darkroom Contact Sheet Grid */}
      <div className="bg-[#181818] p-4 sm:p-8 border-4 border-black shadow-2xl space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredPhotos.map((item, index) => {
            const frameNum = String(index + 1).padStart(2, '0');

            return (
              <div
                key={item.id}
                onClick={() => setLightboxPhoto(item)}
                onMouseEnter={() => setCursorMode('view', `FRAME ${frameNum}`)}
                onMouseLeave={() => setCursorMode('default')}
                className="group relative bg-[#0e0e0e] p-3 border-2 border-neutral-800 hover:border-amber-400 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1"
              >
                {/* Film Frame Header */}
                <div className="flex items-center justify-between font-mono text-[10px] text-amber-300/80 pb-2 border-b border-neutral-800">
                  <span>IMG_{frameNum}</span>
                  <span className="text-white/50">{item.location.split(',')[0]}</span>
                  <span>{item.year}</span>
                </div>

                {/* Photo Negative Container */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden my-2.5">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover filter contrast-105 brightness-90 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Red Grease Pencil Mark simulation (darkroom selection mark) */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <svg className="w-16 h-16 text-red-500 stroke-current fill-none stroke-[2.5]" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="38" strokeDasharray="6 3" />
                    </svg>
                  </div>
                </div>

                {/* Photo Caption & Specs */}
                <div className="space-y-1 pt-1">
                  <h4 className="font-mono text-xs font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between font-mono text-[10px] text-white/40">
                    <span>{item.category}</span>
                    <span>{item.cameraInfo || '35MM'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Film Lightbox Viewer */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-fade-in backdrop-blur-md select-none"
          onClick={() => setLightboxPhoto(null)}
        >
          {/* Top Lightbox Bar */}
          <div className="flex items-center justify-between text-white font-mono text-xs max-w-6xl mx-auto w-full border-b border-white/20 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-amber-300 font-bold">CONTACT VIEWER</span>
              <span>//</span>
              <span>{lightboxPhoto.title}</span>
              <span>//</span>
              <span className="text-neutral-400">{lightboxPhoto.category}</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-neutral-400">USE ARROWS ← → TO BROWSE</span>
              <button
                onClick={() => setLightboxPhoto(null)}
                className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Central Film Negative Stage */}
          <div
            className="relative flex-1 flex items-center justify-center max-h-[80vh] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-neutral-900/80 border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Picture with Film Border */}
            <div className="relative p-2 bg-[#121212] border-2 border-neutral-700 shadow-2xl max-h-full">
              <img
                src={lightboxPhoto.imageUrl}
                alt={lightboxPhoto.title}
                className="max-h-[72vh] max-w-[85vw] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-neutral-900/80 border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Metadata & Navigation Info */}
          <div
            className="max-w-6xl mx-auto w-full pt-4 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-white/70"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="font-hand text-2xl text-amber-300">
                "{lightboxPhoto.caption || lightboxPhoto.title}"
              </p>
            </div>

            <div className="flex items-center gap-6">
              <span>LOC: {lightboxPhoto.location}</span>
              <span>EXIF: {lightboxPhoto.cameraInfo || '35mm Film'}</span>
              <button
                onClick={() => setLightboxPhoto(null)}
                className="text-white underline underline-offset-4 hover:text-amber-300"
              >
                [ CLOSE ]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
