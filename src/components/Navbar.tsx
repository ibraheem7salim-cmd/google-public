import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenProject?: (projectId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'WORK' },
    { id: 'film', label: 'FILM' },
    { id: 'photography', label: 'PHOTOGRAPHY' },
    { id: 'personal', label: 'PERSONAL' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 py-3.5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left group cursor-pointer focus-visible:outline-none"
          >
            <span className="font-display text-base md:text-lg font-bold tracking-tight text-white transition-opacity group-hover:opacity-75">
              IBRAHEEM SALIM
            </span>
          </button>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wider text-white/70">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative cursor-pointer py-1 transition-colors hover:text-white uppercase ${
                    isActive ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary action / Inquiry */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 px-4 py-2 transition-all duration-200 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/90 hover:text-white p-2 focus-visible:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0c0c0c] flex flex-col justify-between p-8 md:hidden animate-fade-in">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="font-display text-lg font-bold text-white tracking-tight">
              IBRAHEEM SALIM
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/70 hover:text-white p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 my-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left font-display text-3xl font-bold tracking-tight text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="text-xs text-white/50 uppercase tracking-widest">
              Baghdad, Iraq
            </div>
            <a
              href="mailto:ibraheem6salim@gmail.com"
              className="block text-sm text-white/80 hover:text-white underline underline-offset-4"
            >
              ibraheem6salim@gmail.com
            </a>
            <a
              href="https://instagram.com/Ibraheem.sa1m"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
            >
              <span>@Ibraheem.sa1m</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
