import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
  layout?: 'standard' | 'wide' | 'tall';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onSelect,
  layout = 'standard'
}) => {
  const formattedIndex = String(index + 1).padStart(2, '0');

  // Aspect ratio styling
  const aspectClass =
    layout === 'wide'
      ? 'aspect-[16/9] md:aspect-[21/9]'
      : layout === 'tall'
      ? 'aspect-[3/4]'
      : 'aspect-[16/10]';

  return (
    <div
      onClick={() => onSelect(project)}
      className="group cursor-pointer flex flex-col justify-between"
    >
      {/* Image Container */}
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#181818] mb-4`}>
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover object-center img-cinematic filter brightness-95 group-hover:brightness-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 pointer-events-none">
          <span className="text-xs uppercase tracking-widest text-white/90">
            View Case Study
          </span>
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Editorial Metadata (Zero-pill compliant) */}
      <div className="flex items-baseline justify-between gap-4 pt-1">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            {project.client && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-white/40">{project.client}</span>
              </>
            )}
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-white/80 transition-colors">
            {project.title}
          </h3>
        </div>

        <span className="font-mono text-xs text-white/30 tabular-nums">
          {formattedIndex}
        </span>
      </div>

      {/* Short description */}
      {project.shortDescription && (
        <p className="mt-2 text-xs md:text-sm text-white/60 line-clamp-2 max-w-2xl leading-relaxed">
          {project.shortDescription}
        </p>
      )}
    </div>
  );
};
