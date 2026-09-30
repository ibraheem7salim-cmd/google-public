import React from 'react';

interface PageTransitionProps {
  isTransitioning: boolean;
  type?: 'paper' | 'shutter' | 'film';
  destinationLabel?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  isTransitioning,
  type = 'paper',
  destinationLabel = 'LOADING ARCHIVE',
}) => {
  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {type === 'paper' && (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Sliding Kraft / Paper Sheet */}
          <div
            className="absolute inset-0 bg-[#ebe8dd] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between p-10"
            style={{
              animation: 'paperSlide 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            <div className="flex items-center justify-between font-mono text-xs text-neutral-600 border-b border-neutral-300 pb-3">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                TRANSIT SHEET
              </span>
              <span>INDEX: {destinationLabel.toUpperCase()}</span>
            </div>

            <div className="text-center space-y-3">
              <span className="font-hand text-3xl text-neutral-800 -rotate-2 block">
                turning the page...
              </span>
              <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-neutral-900 uppercase tracking-tight">
                {destinationLabel}
              </h3>
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 border-t border-neutral-300 pt-3">
              <span>IBRAHEEM SALIM · BAGHDAD</span>
              <span>2026 ARCHIVE</span>
            </div>
          </div>
        </div>
      )}

      {type === 'shutter' && (
        <div className="relative w-full h-full">
          {/* Camera shutter blade top */}
          <div
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#121212] z-50"
            style={{
              animation: 'shutterTop 500ms ease-in-out forwards'
            }}
          />
          {/* Camera shutter blade bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#121212] z-50 flex items-center justify-center"
            style={{
              animation: 'shutterBottom 500ms ease-in-out forwards'
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes paperSlide {
          0% { transform: translateY(100%); }
          40% { transform: translateY(0%); }
          70% { transform: translateY(0%); }
          100% { transform: translateY(-100%); }
        }
        @keyframes shutterTop {
          0% { transform: translateY(-100%); }
          45% { transform: translateY(0%); }
          65% { transform: translateY(0%); }
          100% { transform: translateY(-100%); }
        }
        @keyframes shutterBottom {
          0% { transform: translateY(100%); }
          45% { transform: translateY(0%); }
          65% { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};
