import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'ALL', label: 'ALL' },
  { id: 'FILM', label: 'FILM' },
  { id: 'PHOTOGRAPHY', label: 'PHOTOGRAPHY' },
  { id: 'BRANDING', label: 'BRANDING' },
  { id: 'COMMERCIAL', label: 'COMMERCIAL' },
  { id: 'PERSONAL', label: 'PERSONAL' },
];

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'ALL') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section id="work" className="w-full py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
      {/* Header and Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-6 border-b border-white/10">
        <div>
          <span className="block text-xs uppercase tracking-widest text-white/50 mb-3">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
            SELECTED WORK
          </h2>
        </div>

        {/* Clean Filter Segmented Control */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial Grid Layout */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center text-white/50 text-sm">
          No projects found in this category.
        </div>
      ) : (
        <div className="space-y-16 md:space-y-24">
          {/* If on ALL view, feature the lead project in full-width cinematic format */}
          {selectedCategory === 'ALL' && filteredProjects.length > 0 && (
            <div className="w-full">
              <ProjectCard
                project={filteredProjects[0]}
                index={0}
                onSelect={onSelectProject}
                layout="wide"
              />
            </div>
          )}

          {/* Subsequent grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-24">
            {(selectedCategory === 'ALL' ? filteredProjects.slice(1) : filteredProjects).map(
              (project, idx) => {
                const actualIndex = selectedCategory === 'ALL' ? idx + 1 : idx;
                // Asymmetric rhythm: every 5th item can have a tall or wide aspect
                const isTall = actualIndex % 3 === 1;

                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={actualIndex}
                    onSelect={onSelectProject}
                    layout={isTall ? 'tall' : 'standard'}
                  />
                );
              }
            )}
          </div>
        </div>
      )}
    </section>
  );
};
