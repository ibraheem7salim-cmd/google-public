import React, { useEffect, useState } from 'react';

export type CursorMode = 'default' | 'view' | 'play' | 'arrow' | 'hidden';

interface CustomCursorProps {
  mode: CursorMode;
  cursorText?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ mode, cursorText }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible || mode === 'hidden') return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      {mode === 'default' && (
        <div className="relative flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#161616]" />
          <div className="absolute w-7 h-7 rounded-full border border-[#161616]/30 animate-ping opacity-25" />
        </div>
      )}

      {mode === 'view' && (
        <div className="w-16 h-16 rounded-full bg-[#161616] text-[#f7f6f0] flex items-center justify-center text-[10px] font-mono font-bold tracking-widest uppercase shadow-xl animate-scale-in">
          {cursorText || 'VIEW'}
        </div>
      )}

      {mode === 'play' && (
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-mono font-bold tracking-widest uppercase shadow-xl animate-scale-in">
          ▶ {cursorText || 'PLAY'}
        </div>
      )}

      {mode === 'arrow' && (
        <div className="w-9 h-9 rounded-full bg-amber-400 text-neutral-900 border border-neutral-900 flex items-center justify-center text-xs font-bold shadow-md">
          ↗
        </div>
      )}
    </div>
  );
};
