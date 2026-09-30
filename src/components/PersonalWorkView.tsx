import React, { useState } from 'react';
import { CursorMode } from './CustomCursor';
import { Eye, X } from 'lucide-react';

interface PersonalWorkItem {
  id: string;
  title: string;
  location: string;
  year: string;
  note: string;
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
  tapeColor?: 'yellow' | 'blue' | 'kraft';
}

const PERSONAL_ENTRIES: PersonalWorkItem[] = [
  {
    id: 'pw-1',
    title: 'Historic Vaults & Afternoon Light',
    location: 'Old Rusafa, Baghdad',
    year: '2024',
    note: 'found this on the way — quiet archways before twilight',
    image: '/src/assets/images/documentary_baghdad_culture_1790756987326.jpg',
    aspect: 'landscape',
    tapeColor: 'yellow',
  },
  {
    id: 'pw-2',
    title: 'The Director’s Solitude',
    location: 'Tigris Rooftop',
    year: '2025',
    note: 'late afternoon — watching the golden dust settle over the river',
    image: '/src/assets/images/hero_cinematic_baghdad_1790756937135.jpg',
    aspect: 'landscape',
    tapeColor: 'blue',
  },
  {
    id: 'pw-3',
    title: 'Self & Shadow Study',
    location: 'Baghdad Studio',
    year: '2024',
    note: 'just natural light falloff from the alley window',
    image: '/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg',
    aspect: 'portrait',
    tapeColor: 'kraft',
  },
  {
    id: 'pw-4',
    title: 'Nocturnal Highway Geometry',
    location: 'Al-Jadriya Bridge',
    year: '2024',
    note: '3am long exposure / cold sodium reflections on steel',
    image: '/src/assets/images/commercial_automotive_film_1790756964850.jpg',
    aspect: 'landscape',
    tapeColor: 'yellow',
  }
];

interface PersonalWorkViewProps {
  setCursorMode: (mode: CursorMode, text?: string) => void;
}

export const PersonalWorkView: React.FC<PersonalWorkViewProps> = ({ setCursorMode }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<PersonalWorkItem | null>(null);

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Header with Tape Label */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b-2 border-neutral-900/20">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              OBSERVATIONAL ARCHIVE // VOL.03
            </span>
            <span className="bg-red-500 text-white font-mono text-[10px] font-bold px-2 py-0.5 border border-black -rotate-1">
              NON-COMMERCIAL
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-neutral-900 leading-none">
            PERSONAL WORK
          </h2>

          <p className="font-hand text-2xl text-emerald-700 -rotate-1">
            "people, architecture, everyday moments &amp; light"
          </p>
        </div>

        <p className="font-mono text-xs text-neutral-500 max-w-sm">
          A personal diary of streets, light, shadows, and regional journeys without commercial briefs.
        </p>
      </div>

      {/* Physical Scrapbook Wall Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
        {PERSONAL_ENTRIES.map((entry, idx) => {
          const rotation = idx % 2 === 0 ? '-rotate-1' : 'rotate-1';
          const tapeClass = entry.tapeColor === 'yellow' ? 'masking-tape-yellow' : entry.tapeColor === 'blue' ? 'masking-tape-blue' : '';

          return (
            <div
              key={entry.id}
              onClick={() => setSelectedPhoto(entry)}
              onMouseEnter={() => setCursorMode('view', 'VIEW')}
              onMouseLeave={() => setCursorMode('default')}
              className={`group relative bg-white p-4 sm:p-5 border-2 border-neutral-900 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${rotation}`}
            >
              {/* Tape */}
              <div className={`masking-tape ${tapeClass} -top-3 left-10 w-24 rotate-1`} />

              {/* Photo Frame */}
              <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden mb-4 border border-neutral-800">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full h-full object-cover filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Handwritten Note (The prompt specifically requested notes like "found this on the way", "late afternoon") */}
              <div className="space-y-2">
                <p className="font-hand text-2xl text-neutral-800 leading-tight">
                  "{entry.note}"
                </p>

                <div className="flex items-center justify-between font-mono text-xs text-neutral-500 pt-2 border-t border-neutral-200">
                  <span className="font-bold text-neutral-900">{entry.title}</span>
                  <span>{entry.location} · {entry.year}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox for Personal Work */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-fade-in backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="flex items-center justify-between text-white font-mono text-xs max-w-5xl mx-auto w-full border-b border-white/20 pb-3">
            <span>{selectedPhoto.title} // {selectedPhoto.location}</span>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center max-h-[80vh] my-auto">
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[75vh] max-w-[85vw] object-contain shadow-2xl border-2 border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="max-w-5xl mx-auto w-full pt-4 border-t border-white/20 text-center">
            <p className="font-hand text-2xl sm:text-3xl text-amber-300">
              "{selectedPhoto.note}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
