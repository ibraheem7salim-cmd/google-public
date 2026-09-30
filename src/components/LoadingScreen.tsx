import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(1);
  const [frameCode, setFrameCode] = useState('001');
  const [isFinishing, setIsFinishing] = useState(false);

  useEffect(() => {
    const steps = [
      { p: 1, f: '001', delay: 100 },
      { p: 27, f: '027', delay: 280 },
      { p: 64, f: '064', delay: 320 },
      { p: 89, f: '089', delay: 240 },
      { p: 100, f: '120', delay: 220 },
    ];

    let current = 0;

    const runStep = () => {
      if (current < steps.length) {
        setPercent(steps[current].p);
        setFrameCode(steps[current].f);
        const nextDelay = steps[current].delay;
        current++;
        setTimeout(runStep, nextDelay);
      } else {
        setIsFinishing(true);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };

    const timer = setTimeout(runStep, 150);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#141414] text-[#f7f6f0] flex flex-col justify-between p-8 md:p-14 transition-all duration-700 ease-in-out ${
        isFinishing ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Top Film Frame Info */}
      <div className="flex items-center justify-between text-xs font-mono tracking-wider text-white/50 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-rec" />
          <span className="text-white/80 font-bold">REC</span>
          <span className="text-white/40">·</span>
          <span>BAGHDAD / PRODUCTION DESK</span>
        </div>
        <div>
          <span>FRAME {frameCode} / 120</span>
        </div>
      </div>

      {/* Center Cinematic Shutter Count & Identity */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Retro Projector crosshair */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/20 animate-spin" style={{ animationDuration: '6s' }} />
          <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center font-mono text-xs text-white/80">
            {percent === 100 ? '●' : percent < 30 ? '3' : percent < 70 ? '2' : '1'}
          </div>
          <div className="absolute w-full h-[1px] bg-white/20" />
          <div className="absolute h-full w-[1px] bg-white/20" />
        </div>

        <div className="space-y-2">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-none">
            IBRAHEEM SALIM
          </h1>
          <p className="font-mono text-xs sm:text-sm tracking-widest text-amber-300 uppercase">
            PHOTOGRAPHER / VIDEOGRAPHER
          </p>
        </div>

        {/* Big percentage counter */}
        <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tighter text-white/90 tabular-nums">
          {String(percent).padStart(2, '0')}%
        </div>

        {/* Progress Bar styled as film negative strip */}
        <div className="w-48 sm:w-64 mx-auto h-2 bg-white/10 rounded-full overflow-hidden p-0.5">
          <div
            className="h-full bg-amber-400 rounded-full transition-all duration-200 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="font-hand text-xl text-white/60 -rotate-2">
          loading visual archive...
        </p>
      </div>

      {/* Bottom Film Slate Note */}
      <div className="flex items-center justify-between text-[11px] font-mono text-white/40 border-t border-white/10 pt-4">
        <span>35MM PRIME · 24FPS · ISO 400</span>
        <button
          onClick={onComplete}
          className="text-white/60 hover:text-white underline underline-offset-4 cursor-pointer"
        >
          SKIP [ESC]
        </button>
      </div>
    </div>
  );
};
