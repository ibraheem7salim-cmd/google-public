import React, { useEffect } from 'react';
import { PhotoItem } from '../types';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar } from 'lucide-react';

interface LightboxProps {
  item: PhotoItem | null;
  items: PhotoItem[];
  onClose: () => void;
  onNavigate: (newItem: PhotoItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onNavigate(items[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % items.length;
        onNavigate(items[nextIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items, onClose, onNavigate]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 md:p-8 animate-fade-in select-none backdrop-blur-sm"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto text-white/70">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
          <span className="text-white font-medium">{item.title}</span>
          <span>·</span>
          <span>{item.category}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center max-h-[82vh] my-auto">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-6 z-20 w-12 h-12 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/80 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={item.imageUrl}
          alt={item.title}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full object-contain filter drop-shadow-2xl"
          referrerPolicy="no-referrer"
        />

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-6 z-20 w-12 h-12 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/80 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Editorial Caption & Metadata */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-white/60"
      >
        <p className="italic text-white/80 max-w-xl">
          {item.caption || item.title}
        </p>

        <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
          {item.cameraInfo && (
            <span className="flex items-center gap-1.5 text-white/70">
              <Camera className="w-3.5 h-3.5" />
              <span>{item.cameraInfo}</span>
            </span>
          )}
          <span className="flex items-center gap-1 text-white/70">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
          </span>
          <span className="flex items-center gap-1 text-white/70">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.year}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
