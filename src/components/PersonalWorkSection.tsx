import React, { useState } from 'react';
import { Lightbox } from './Lightbox';
import { PhotoItem } from '../types';
import { Eye } from 'lucide-react';

const PERSONAL_ITEMS: PhotoItem[] = [
  {
    id: 'personal-1',
    title: 'Historic Vaults & Afternoon Light',
    category: 'PERSONAL',
    imageUrl: '/src/assets/images/documentary_baghdad_culture_1790756987326.jpg',
    aspect: '16:9',
    year: '2024',
    location: 'Old Rusafa, Baghdad',
    cameraInfo: 'Leica 35mm · f/2.8 · 1/250s',
    caption: 'Observing the stillness of shaded archways amidst the bustling city center.'
  },
  {
    id: 'personal-2',
    title: 'The Director’s Solitude',
    category: 'PERSONAL',
    imageUrl: '/src/assets/images/hero_cinematic_baghdad_1790756937135.jpg',
    aspect: '16:9',
    year: '2025',
    location: 'Tigris Riverbank Rooftop',
    cameraInfo: '28mm · f/4.0 · 1/500s',
    caption: 'Watching golden dust settle over the river before nightfall.'
  },
  {
    id: 'personal-3',
    title: 'Introspective Shadow & Tone',
    category: 'PERSONAL',
    imageUrl: '/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg',
    aspect: '3:4',
    year: '2024',
    location: 'Baghdad Studio',
    cameraInfo: '50mm · f/2.0 · Monochrome',
    caption: 'Human expression without stage directions or artificial studio lighting.'
  },
  {
    id: 'personal-4',
    title: 'Nocturnal Highway Architecture',
    category: 'PERSONAL',
    imageUrl: '/src/assets/images/commercial_automotive_film_1790756964850.jpg',
    aspect: '16:9',
    year: '2024',
    location: 'Al-Sarafiya, Baghdad',
    cameraInfo: '35mm · f/2.0 · 1/50s',
    caption: 'Long exposure reflections and steel infrastructure after midnight.'
  }
];

export const PersonalWorkSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const focusThemes = [
    'People',
    'Places',
    'Architecture',
    'Culture',
    'Everyday Moments',
    'Light & Shadows',
    'Reflections',
    'Street Photography'
  ];

  return (
    <section id="personal" className="w-full py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-6 border-b border-white/10">
        <div className="space-y-3">
          <span className="block text-xs uppercase tracking-widest text-white/50">
            Observational Archive
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
            PERSONAL WORK
          </h2>
          <p className="text-xs md:text-sm text-white/70 max-w-2xl leading-relaxed">
            Personal and travel photography exploring the quiet dignity of people, places, and everyday life. Authentic, observational, and rooted in natural light.
          </p>
        </div>

        {/* Quiet Theme Markers (Rule 1.A zero-pill) */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-white/50 max-w-md">
          {focusThemes.map((theme, idx) => (
            <React.Fragment key={theme}>
              <span className="text-white/60">{theme}</span>
              {idx < focusThemes.length - 1 && <span aria-hidden="true">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Editorial Spread Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        {PERSONAL_ITEMS.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group cursor-pointer space-y-3"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#161616]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover img-cinematic brightness-90 group-hover:brightness-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="flex items-baseline justify-between text-xs text-white/60">
                <span className="font-medium text-white">{item.title}</span>
                <span className="font-mono tabular-nums text-white/40">{item.location} · {item.year}</span>
              </div>

              {item.caption && (
                <p className="text-[11px] text-white/50 font-light leading-relaxed">
                  {item.caption}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      <Lightbox
        item={activePhoto}
        items={PERSONAL_ITEMS}
        onClose={() => setActivePhoto(null)}
        onNavigate={(newItem) => setActivePhoto(newItem)}
      />
    </section>
  );
};
