import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { ArrowLeft, ArrowRight, X, Play, Camera, MapPin, Calendar, Film } from 'lucide-react';
import { CursorMode } from './CustomCursor';

interface ProjectDetailViewProps {
  project: Project;
  onClose: () => void;
  onNextProject: (next: Project) => void;
  allProjects: Project[];
  setCursorMode: (mode: CursorMode, text?: string) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onClose,
  onNextProject,
  allProjects,
  setCursorMode,
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsPlayingVideo(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNextProject(nextProject);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project.id, nextProject, onClose, onNextProject]);

  return (
    <article className="fixed inset-0 z-50 overflow-y-auto bg-[#f6f5ee] text-[#161616] animate-fade-in select-none">
      {/* Top Sticky Retro Bar */}
      <div className="sticky top-0 z-40 bg-[#f6f5ee]/95 backdrop-blur-md border-b-2 border-neutral-900 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm">
        <button
          onClick={onClose}
          onMouseEnter={() => setCursorMode('arrow')}
          onMouseLeave={() => setCursorMode('default')}
          className="group flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>[ RETURN TO DESK ]</span>
        </button>

        <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 uppercase">
          <span className="font-bold text-neutral-900">{project.projectNumber || 'FILE 001'}</span>
          <span>//</span>
          <span>{project.category}</span>
          <span>//</span>
          <span>{project.year}</span>
        </div>

        <button
          onClick={onClose}
          onMouseEnter={() => setCursorMode('arrow')}
          onMouseLeave={() => setCursorMode('default')}
          className="w-8 h-8 rounded-full border-2 border-neutral-900 flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
          aria-label="Close project"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 md:py-16">
        {/* Project Header (Oversized Editorial) */}
        <div className="space-y-4 mb-10 pb-8 border-b-2 border-neutral-900">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-neutral-500 uppercase">
            <span className="bg-amber-300 text-neutral-900 font-bold px-2 py-0.5 border border-black">
              {project.projectNumber || 'PROJECT 001'}
            </span>
            <span>CLIENT: {project.client}</span>
            <span>YEAR: {project.year}</span>
            <span className="text-blue-600 font-bold">{project.categoryLabel || project.category}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-neutral-900 leading-none">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] text-neutral-700 bg-white border border-neutral-300 px-2 py-0.5"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Huge Hero Image / Video Container (With Taped Corners) */}
        <div className="relative w-full aspect-[16/9] bg-neutral-950 shadow-2xl mb-14 border-2 border-neutral-900 overflow-hidden">
          <div className="masking-tape masking-tape-yellow -top-3 left-10 w-32 -rotate-2" />
          <div className="masking-tape masking-tape-blue -bottom-3 right-12 w-28 rotate-1" />

          {isPlayingVideo && project.vimeoId ? (
            <iframe
              src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&color=ffffff&title=0&byline=0&portrait=0`}
              title={project.title}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover filter contrast-105 brightness-95"
                referrerPolicy="no-referrer"
              />

              {/* If project has a video, show PLAY FILM custom button */}
              {project.vimeoId && (
                <div
                  onClick={() => setIsPlayingVideo(true)}
                  onMouseEnter={() => setCursorMode('play', 'FILM')}
                  onMouseLeave={() => setCursorMode('default')}
                  className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors flex items-center justify-center cursor-pointer group"
                >
                  <div className="bg-amber-300 text-neutral-950 font-mono text-sm font-bold uppercase tracking-wider px-6 py-3 border-2 border-black shadow-[4px_4px_0px_#000] flex items-center gap-2.5 transition-transform group-hover:scale-105">
                    <Play className="w-5 h-5 fill-current" />
                    <span>▶ PLAY FILM</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Editorial Project Overview & Technical Stamps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-16 border-b-2 border-neutral-900/20">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">
              SYNOPSIS &amp; TREATMENT
            </span>
            <p className="text-xl sm:text-2xl text-neutral-900 font-light leading-relaxed">
              {project.shortDescription}
            </p>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              {project.fullDescription.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>
          </div>

          {/* Technical Metadata Box (Notebook Stamp Style) */}
          <div className="lg:col-span-4 bg-white p-6 border-2 border-neutral-900 shadow-[4px_4px_0px_#000] space-y-5">
            <div className="font-mono text-xs font-bold uppercase text-neutral-900 border-b border-neutral-200 pb-2 flex items-center justify-between">
              <span>METADATA SLATE</span>
              <span className="text-red-500 font-bold">● REC</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <span className="text-neutral-400 block text-[10px]">CLIENT</span>
                <span className="font-bold text-neutral-900">{project.client}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px]">LOCATION</span>
                <span className="text-neutral-900">{project.location || 'Baghdad, Iraq'}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px]">DISCIPLINE</span>
                <span className="text-neutral-900">{project.categoryLabel || project.category}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px]">YEAR</span>
                <span className="text-neutral-900">{project.year}</span>
              </div>
            </div>

            {project.credits && project.credits.length > 0 && (
              <div className="pt-3 border-t border-neutral-200 space-y-2">
                <span className="font-mono text-[10px] text-neutral-400 uppercase block">CREDITS</span>
                {project.credits.map((c, idx) => (
                  <div key={idx} className="flex justify-between font-mono text-xs">
                    <span className="text-neutral-500">{c.role}</span>
                    <span className="font-bold text-neutral-900">{c.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Editorial Sequences & Taped Stills */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <section className="my-16 space-y-16">
            <div className="flex items-baseline justify-between border-b-2 border-neutral-900 pb-4">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-neutral-900">
                VISUAL SEQUENCES &amp; STILLS
              </h3>
              <span className="font-hand text-xl text-neutral-600 -rotate-2">
                production documentation
              </span>
            </div>

            <div className="space-y-14">
              {project.galleryImages.map((img, idx) => {
                const isWide = idx % 2 === 0;

                return (
                  <div key={idx} className="relative group space-y-3">
                    <div className="relative bg-white p-3 sm:p-4 border-2 border-neutral-900 shadow-xl">
                      {/* Random corner tape */}
                      <div className="masking-tape masking-tape-yellow -top-3 left-10 w-24 -rotate-1" />

                      <div className={`overflow-hidden bg-neutral-950 ${isWide ? 'aspect-[16/9]' : 'aspect-[4/3] max-w-3xl mx-auto'}`}>
                        <img
                          src={img.url}
                          alt={img.caption || `Production frame ${idx + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    {img.caption && (
                      <p className="font-hand text-xl text-neutral-800 text-center">
                        "{img.caption}"
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Next Project Footer Bar */}
        <div className="mt-20 pt-12 border-t-2 border-neutral-900">
          <div
            onClick={() => onNextProject(nextProject)}
            onMouseEnter={() => setCursorMode('arrow')}
            onMouseLeave={() => setCursorMode('default')}
            className="group cursor-pointer bg-white p-6 sm:p-8 border-2 border-neutral-900 shadow-[6px_6px_0px_#000] hover:bg-amber-300 transition-colors duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase block tracking-wider">
                NEXT FILE ➔ {nextProject.projectNumber || 'NEXT'}
              </span>
              <h3 className="font-display text-3xl sm:text-5xl font-black uppercase text-neutral-950">
                {nextProject.title}
              </h3>
              <span className="font-mono text-xs text-neutral-600 uppercase">
                {nextProject.category} · {nextProject.year}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider bg-neutral-900 text-white px-4 py-2.5 border border-black shadow-[2px_2px_0px_rgba(0,0,0,0.4)] group-hover:bg-neutral-950">
              <span>OPEN NEXT PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
