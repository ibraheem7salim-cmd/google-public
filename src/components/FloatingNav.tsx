import React, { useState, useEffect } from 'react';
import { Camera, Film, Image as ImageIcon, User, Mail, Compass } from 'lucide-react';
import { CursorMode } from './CustomCursor';

interface FloatingNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  setCursorMode: (mode: CursorMode, text?: string) => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  currentTab,
  onTabChange,
  setCursorMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'WORK', icon: Compass, note: 'selected projects' },
    { id: 'photo', label: 'PHOTO', icon: ImageIcon, note: 'contact sheet' },
    { id: 'video', label: 'VIDEO', icon: Film, note: 'motion reels' },
    { id: 'personal', label: 'PERSONAL', icon: Camera, note: 'archive' },
    { id: 'about', label: 'ABOUT', icon: User, note: 'director bio' },
    { id: 'contact', label: 'CONTACT', icon: Mail, note: "let's talk" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none transition-all duration-300">
      <div className="relative pointer-events-auto">
        {/* Playful Handwritten Annotation pointing to the nav */}
        <div className="hidden lg:flex items-center gap-1.5 absolute -left-28 top-3 text-neutral-600 font-hand text-lg -rotate-6 select-none pointer-events-none">
          <span>look around</span>
          <span className="text-xl">➔</span>
        </div>

        {/* Floating Nav Container (Styled like a taped desk label / retro gear badge) */}
        <nav
          className={`flex items-center gap-1 sm:gap-2 px-3 py-2 bg-[#161616] text-[#f7f6f0] border-2 border-[#161616] shadow-2xl transition-all duration-300 ${
            isScrolled ? 'scale-95 py-1.5 px-2.5 bg-[#161616]/95 backdrop-blur-md' : 'py-2 px-3.5'
          }`}
          style={{
            boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Masking tape on top center */}
          <div className="masking-tape masking-tape-yellow -top-3 left-1/2 -translate-x-1/2 w-16 -rotate-1 hidden sm:block" />

          {/* Left Brand Badge */}
          <button
            onClick={() => onTabChange('work')}
            onMouseEnter={() => setCursorMode('arrow')}
            onMouseLeave={() => setCursorMode('default')}
            className="flex items-center gap-2 pr-2 sm:pr-3 border-r border-white/20 text-left group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-rec shrink-0" />
            <span className="font-display font-extrabold text-xs sm:text-sm tracking-tight text-white group-hover:text-amber-300 transition-colors uppercase whitespace-nowrap">
              IBRAHEEM
            </span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  onMouseEnter={() => setCursorMode('arrow')}
                  onMouseLeave={() => setCursorMode('default')}
                  className={`relative px-2.5 py-1 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer flex items-center gap-1 ${
                    isActive
                      ? 'bg-amber-300 text-neutral-900 shadow-sm font-black -translate-y-0.5'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    transform: isActive ? 'rotate(-1deg)' : 'none',
                  }}
                >
                  <Icon className="w-3 h-3 sm:hidden" />
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">{item.id === 'video' ? 'VIDEO' : item.label.slice(0, 4)}</span>

                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-red-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick REC / Frame Stamp */}
          <div className="hidden md:flex items-center pl-2 border-l border-white/20 font-mono text-[10px] text-amber-300/80">
            <span>24FPS</span>
          </div>
        </nav>

        {/* Right Handwritten sticker */}
        <div className="hidden lg:block absolute -right-24 top-2 font-hand text-base text-blue-600 rotate-6 select-none pointer-events-none">
          <span className="bg-blue-100 border border-blue-300 px-2 py-0.5 shadow-sm">
            Baghdad 📍
          </span>
        </div>
      </div>
    </header>
  );
};
