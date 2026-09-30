import React from 'react';
import { ArrowUp, Camera } from 'lucide-react';
import { CursorMode } from './CustomCursor';

interface TactileFooterProps {
  onBackToTop: () => void;
  setCursorMode: (mode: CursorMode, text?: string) => void;
}

export const TactileFooter: React.FC<TactileFooterProps> = ({ onBackToTop, setCursorMode }) => {
  return (
    <footer className="w-full bg-[#141414] text-[#f7f6f0] border-t-4 border-black py-16 px-4 sm:px-8 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-rec" />
            <span className="font-mono text-xs text-amber-300 font-bold uppercase">
              PRODUCTION ARCHIVE // CLOSED
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              IBRAHEEM SALIM
            </h3>
            <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              PHOTOGRAPHER / VIDEOGRAPHER · BAGHDAD / IRAQ
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-500">
            © 2026 IBRAHEEM SALIM. ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* Playful Handwritten Note requested in the prompt */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
          <div className="font-hand text-3xl sm:text-4xl text-amber-300 -rotate-3">
            "thanks for stopping by." ✦
          </div>

          <button
            onClick={onBackToTop}
            onMouseEnter={() => setCursorMode('arrow')}
            onMouseLeave={() => setCursorMode('default')}
            className="flex items-center gap-2 bg-white text-neutral-950 font-mono text-xs font-bold uppercase px-4 py-2 border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-amber-300 transition-colors cursor-pointer"
          >
            <span>BACK TO DESK</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
