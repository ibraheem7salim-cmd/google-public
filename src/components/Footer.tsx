import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#080808] border-t border-white/10 py-16 md:py-20 px-6 md:px-10 text-white">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        {/* Left Side: Brand, Location, Position */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h4 className="font-display text-xl font-bold tracking-tight text-white uppercase">
              IBRAHEEM SALIM
            </h4>
            <p className="text-xs uppercase tracking-wider text-white/60">
              Photographer &amp; Videographer
            </p>
          </div>
          <p className="text-xs text-white/40">
            Baghdad, Iraq
          </p>
        </div>

        {/* Middle/Right: Direct links & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12 text-xs uppercase tracking-widest text-white/60">
          <a
            href="https://instagram.com/Ibraheem.sa1m"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>

          <a
            href="mailto:ibraheem6salim@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40">
        <span>© {currentYear} Ibraheem Salim. All rights reserved.</span>
        <span className="mt-2 sm:mt-0">Cinematography, Photography &amp; Visual Direction</span>
      </div>
    </footer>
  );
};
