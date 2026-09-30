import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { CursorMode } from './CustomCursor';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorkWallProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  setCursorMode: (mode: CursorMode, text?: string) => void;
}

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'ALL', label: 'ALL FILES' },
  { id: 'FILM', label: 'FILM' },
  { id: 'PHOTOGRAPHY', label: 'PHOTO' },
  { id: 'BRANDING', label: 'BRANDING' },
  { id: 'COMMERCIAL', label: 'COMMERCIAL' },
  { id: 'PERSONAL', label: 'PERSONAL' },
];

export const SelectedWorkWall: React.FC<SelectedWorkWallProps> = ({
  projects,
  onSelectProject,
  setCursorMode,
}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('ALL');

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-t-2 border-neutral-900/10">
      {/* Wall Header with Handwritten Note & Sticky Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b-2 border-neutral-900/20">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              CASE ARCHIVE // SEC.02
            </span>
            <span className="bg-amber-300 text-neutral-900 font-mono text-[10px] font-bold px-2 py-0.5 border border-black rotate-1">
              CURATED
            </span>
          </div>

          <div className="flex items-baseline gap-4 flex-wrap">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-neutral-900 leading-none">
              SELECTED WORK
            </h2>
            <span className="font-hand text-2xl sm:text-3xl text-blue-600 -rotate-3 block">
              "some things I've made." ✦
            </span>
          </div>
        </div>

        {/* Filter Tabs as Tape Labels / Retro Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                onMouseEnter={() => setCursorMode('arrow')}
                onMouseLeave={() => setCursorMode('default')}
                className={`px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer border ${
                  isActive
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-[2px_2px_0px_#000] -translate-y-0.5'
                    : 'bg-white/80 text-neutral-700 border-neutral-300 hover:bg-neutral-100 hover:border-neutral-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Irregular Editorial Project Wall */}
      <div className="space-y-20 md:space-y-28">
        {/* Project 1 & 2: Large Lead (Kashida Studio) with overlapping Hanoot */}
        {filteredProjects.length >= 2 && activeFilter === 'ALL' && (
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Project 1: Big Kashida Hero Project (Col 1-8) */}
            <div
              onClick={() => onSelectProject(filteredProjects[0])}
              onMouseEnter={() => setCursorMode('view', 'PROJECT')}
              onMouseLeave={() => setCursorMode('default')}
              className="lg:col-span-8 group relative bg-white p-3 sm:p-5 shadow-2xl border-2 border-neutral-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Masking tape strip */}
              <div className="masking-tape masking-tape-yellow -top-3 left-12 w-28 -rotate-2" />

              <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden mb-4">
                <img
                  src={filteredProjects[0].coverImage}
                  alt={filteredProjects[0].title}
                  className="w-full h-full object-cover filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-neutral-900/80 font-mono text-[10px] text-amber-300 px-2.5 py-1">
                  {filteredProjects[0].projectNumber || 'PROJECT 001'}
                </div>
                {/* Hover reveal label */}
                <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white text-neutral-950 font-mono text-xs font-bold uppercase px-4 py-2 border-2 border-black shadow-[3px_3px_0px_#000] flex items-center gap-1.5">
                    <span>OPEN PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-t border-neutral-200 pt-3">
                <div>
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">
                    {filteredProjects[0].client} · {filteredProjects[0].year} · {filteredProjects[0].category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
                    {filteredProjects[0].title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm">
                  {filteredProjects[0].shortDescription}
                </p>
              </div>
            </div>

            {/* Project 2: Overlapping Hanoot Project (Col 9-12 or floating) */}
            <div
              onClick={() => onSelectProject(filteredProjects[1])}
              onMouseEnter={() => setCursorMode('view', 'HANOOT')}
              onMouseLeave={() => setCursorMode('default')}
              className="lg:col-span-4 lg:-ml-10 lg:mt-16 z-20 group relative bg-[#fdfcf7] p-3 sm:p-4 shadow-2xl border-2 border-neutral-900 cursor-pointer transition-transform duration-300 hover:rotate-0 rotate-1"
            >
              <div className="masking-tape masking-tape-blue -top-3 right-8 w-24 rotate-3" />

              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden mb-3">
                <img
                  src={filteredProjects[1].coverImage}
                  alt={filteredProjects[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-blue-600 font-mono text-[9px] text-white px-2 py-0.5 font-bold">
                  {filteredProjects[1].projectNumber || 'PROJECT 002'}
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] text-neutral-500 uppercase">
                  {filteredProjects[1].client} · {filteredProjects[1].year}
                </span>
                <h4 className="font-display text-xl font-bold uppercase tracking-tight text-neutral-900">
                  {filteredProjects[1].title}
                </h4>
                <p className="text-xs text-neutral-600 line-clamp-2">
                  {filteredProjects[1].shortDescription}
                </p>
              </div>

              {/* Hand-drawn arrow note */}
              <div className="mt-3 pt-2 border-t border-neutral-200 flex items-center justify-between text-xs font-hand text-red-600 text-lg">
                <span>kinetic city commercial</span>
                <span className="font-mono text-[10px] text-neutral-400">OPEN ➔</span>
              </div>
            </div>
          </div>
        )}

        {/* Subsequent Projects Wall: Asymmetrical Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
          {(activeFilter === 'ALL' ? filteredProjects.slice(2) : filteredProjects).map((project, idx) => {
            const actualIndex = activeFilter === 'ALL' ? idx + 2 : idx;
            // Alternating rotation for tactile physical desk feel
            const rotationClass = actualIndex % 3 === 0 ? '-rotate-1' : actualIndex % 3 === 1 ? 'rotate-1' : 'rotate-0';
            const tapeType = actualIndex % 3 === 0 ? 'masking-tape-yellow' : actualIndex % 3 === 1 ? 'masking-tape-blue' : '';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                onMouseEnter={() => setCursorMode('view', project.title.toUpperCase())}
                onMouseLeave={() => setCursorMode('default')}
                className={`group relative bg-white p-3 sm:p-4 shadow-xl border-2 border-neutral-900 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${rotationClass}`}
              >
                {/* Masking tape on top */}
                <div className={`masking-tape ${tapeType} -top-3 left-8 w-20 rotate-1`} />

                {/* Cover Image */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-neutral-900 overflow-hidden mb-3">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-neutral-900 font-mono text-[9px] text-amber-300 px-2 py-0.5 border border-neutral-700">
                    {project.projectNumber || `REF ${String(actualIndex + 1).padStart(3, '0')}`}
                  </div>
                  <div className="absolute top-2 right-2 bg-white font-mono text-[9px] text-neutral-900 font-bold px-1.5 py-0.5 uppercase border border-black">
                    {project.category}
                  </div>
                </div>

                {/* Metadata */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 uppercase">
                    <span>{project.client}</span>
                    <span className="tabular-nums">{project.year}</span>
                  </div>

                  <h4 className="font-display text-xl font-bold uppercase tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed font-light">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Bottom Card Tape Note */}
                <div className="mt-3 pt-2 border-t border-neutral-200 flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] text-neutral-400">
                    LOC: {project.location || 'BAGHDAD'}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-neutral-900 group-hover:text-blue-600 uppercase flex items-center gap-1">
                    OPEN PROJECT <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
