import React, { useState, useMemo } from 'react';
import { PhotoCategory, PhotoItem } from '../types';
import { PHOTOGRAPHY_ITEMS } from '../data/photography';
import { Lightbox } from './Lightbox';
import { Eye } from 'lucide-react';

const CATEGORIES: { id: PhotoCategory | 'ALL'; label: string }[] = [
  { id: 'ALL', label: 'ALL STILLS' },
  { id: 'COMMERCIAL', label: 'COMMERCIAL' },
  { id: 'PORTRAITS', label: 'PORTRAITS' },
  { id: 'PRODUCT', label: 'PRODUCT' },
  { id: 'LIFESTYLE', label: 'LIFESTYLE' },
  { id: 'TRAVEL', label: 'TRAVEL' },
  { id: 'PERSONAL', label: 'PERSONAL' },
];

export const PhotographySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory | 'ALL'>('ALL');
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'ALL') return PHOTOGRAPHY_ITEMS;
    return PHOTOGRAPHY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="photography" className="w-full py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto border-t border-white/10">
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-6 border-b border-white/10">
        <div>
          <span className="block text-xs uppercase tracking-widest text-white/50 mb-3">
            Still Photography Archive
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
            PHOTOGRAPHY
          </h2>
          <p className="mt-3 text-xs md:text-sm text-white/60 max-w-xl">
            Selected editorial spreads, still-life commercial studies, and portraits captured on 35mm and medium format systems.
          </p>
        </div>

        {/* Category Controls */}
        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Book-Style Editorial Gallery Sequencing */}
      <div className="space-y-16 md:space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {filteredPhotos.map((photo, index) => {
            // Asymmetrical editorial rhythm: alternate column spans to look like a curated art book
            const isWide = index % 3 === 0;
            const colSpan = isWide ? 'md:col-span-8' : 'md:col-span-4';

            return (
              <div
                key={photo.id}
                className={`${colSpan} group cursor-pointer space-y-3`}
                onClick={() => setActivePhoto(photo)}
              >
                {/* Visual Container */}
                <div className="relative overflow-hidden bg-[#181818]">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-auto max-h-[700px] object-cover img-cinematic brightness-95 group-hover:brightness-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover icon */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Quiet Metadata (Rule 1.A zero-pill) */}
                <div className="flex items-baseline justify-between text-xs text-white/50 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white/80 font-medium">{photo.title}</span>
                    <span>·</span>
                    <span className="uppercase text-[11px]">{photo.category}</span>
                  </div>
                  <span className="font-mono tabular-nums text-white/40">{photo.year}</span>
                </div>
                {photo.caption && (
                  <p className="text-[11px] text-white/40 font-light leading-relaxed">
                    {photo.caption}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <Lightbox
        item={activePhoto}
        items={filteredPhotos}
        onClose={() => setActivePhoto(null)}
        onNavigate={(newItem) => setActivePhoto(newItem)}
      />
    </section>
  );
};
