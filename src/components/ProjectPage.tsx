import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

interface ProjectPageProps {
  project: Project;
  onClose: () => void;
  onNextProject: (nextProject: Project) => void;
  allProjects: Project[];
}

export const ProjectPage: React.FC<ProjectPageProps> = ({
  project,
  onClose,
  onNextProject,
  allProjects,
}) => {
  // Find next project in array
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextIndex = (currentIndex + 1) % allProjects.length;
  const nextProject = allProjects[nextIndex];

  // Scroll to top on load or project switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project.id, onClose]);

  return (
    <article className="fixed inset-0 z-50 overflow-y-auto bg-[#0c0c0c] text-[#f4f4f0] animate-fade-in">
      {/* Sticky Editorial Bar */}
      <div className="sticky top-0 z-40 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 px-6 md:px-10 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="group flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Selected Work</span>
        </button>

        <div className="hidden md:flex items-center gap-3 text-xs tracking-widest text-white/40 uppercase">
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>

        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
          aria-label="Close project view"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 md:py-16">
        {/* 1. Large Hero Visual */}
        <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#161616] mb-12 md:mb-16">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* 2 - 6: Project Info & Editorial Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 pb-16 border-b border-white/10">
          {/* Main Title & Description */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="block text-xs uppercase tracking-widest text-white/50">
                {project.categoryLabel || project.category}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {project.title}
              </h1>
            </div>

            <p className="text-base md:text-xl text-white/90 leading-relaxed font-light">
              {project.shortDescription}
            </p>

            <div className="space-y-4 pt-4 text-sm md:text-base text-white/70 leading-relaxed">
              {project.fullDescription.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Metadata Sidebar (Client, Year, Category, Credits) */}
          <div className="lg:col-span-4 space-y-8 lg:border-l lg:border-white/10 lg:pl-10">
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-white/40 mb-1">
                Client / Brand
              </span>
              <span className="text-sm md:text-base font-medium text-white">
                {project.client}
              </span>
            </div>

            <div>
              <span className="block text-[11px] uppercase tracking-widest text-white/40 mb-1">
                Year
              </span>
              <span className="text-sm md:text-base font-medium text-white font-mono tabular-nums">
                {project.year}
              </span>
            </div>

            {project.location && (
              <div>
                <span className="block text-[11px] uppercase tracking-widest text-white/40 mb-1">
                  Location
                </span>
                <span className="text-sm md:text-base font-medium text-white">
                  {project.location}
                </span>
              </div>
            )}

            {project.credits && project.credits.length > 0 && (
              <div className="pt-2 border-t border-white/10 space-y-3">
                <span className="block text-[11px] uppercase tracking-widest text-white/40">
                  Credits
                </span>
                <div className="space-y-2">
                  {project.credits.map((credit, idx) => (
                    <div key={idx} className="flex justify-between items-baseline text-xs">
                      <span className="text-white/50">{credit.role}</span>
                      <span className="text-white font-medium">{credit.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 8. Video Embed Section (Where applicable) */}
        {project.vimeoId && (
          <section className="my-16 md:my-24">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-white/40">
                Motion Piece
              </span>
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white mt-1">
                Project Film
              </h2>
            </div>
            <VideoPlayer
              vimeoId={project.vimeoId}
              vimeoUrl={project.vimeoUrl}
              posterImage={project.coverImage}
              title={project.title}
            />
          </section>
        )}

        {/* 7 & 9. Large Visual Gallery & Photography Sequence */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <section className="my-16 md:my-24 space-y-16">
            <div className="border-t border-white/10 pt-10 mb-10">
              <span className="text-xs uppercase tracking-widest text-white/40">
                Visual Documentation
              </span>
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white mt-1">
                Visual Sequences &amp; Stills
              </h2>
            </div>

            <div className="space-y-12">
              {project.galleryImages.map((img, idx) => {
                const isDiptych = idx % 3 === 1 && idx + 1 < project.galleryImages.length;

                return (
                  <div key={idx} className="space-y-3">
                    <div className="w-full overflow-hidden bg-[#161616]">
                      <img
                        src={img.url}
                        alt={img.caption || `${project.title} sequence ${idx + 1}`}
                        className="w-full h-auto object-cover max-h-[85vh]"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {img.caption && (
                      <p className="text-xs text-white/50 font-light tracking-wide max-w-xl">
                        {img.caption}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 10. Closing Image */}
        {project.closingImage && (
          <div className="my-16 md:my-24">
            <div className="w-full aspect-[16/9] overflow-hidden bg-[#161616]">
              <img
                src={project.closingImage}
                alt="Closing frame"
                className="w-full h-full object-cover filter brightness-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}

        {/* 11. Next Project Navigation */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <span className="block text-xs uppercase tracking-widest text-white/40 mb-4">
            Next Project
          </span>
          <div
            onClick={() => onNextProject(nextProject)}
            className="group cursor-pointer flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="text-xs uppercase tracking-wider text-white/50">
                {nextProject.category} · {nextProject.year}
              </span>
              <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white group-hover:text-white/70 transition-colors">
                {nextProject.title}
              </h3>
            </div>

            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white font-medium">
              <span>View Next Case Study</span>
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transition-transform group-hover:translate-x-2 group-hover:border-white">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
