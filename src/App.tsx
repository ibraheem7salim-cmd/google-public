/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CustomCursor, CursorMode } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { PageTransition } from './components/PageTransition';
import { FloatingNav } from './components/FloatingNav';
import { HeroDesk } from './components/HeroDesk';
import { VisualIntro } from './components/VisualIntro';
import { SelectedWorkWall } from './components/SelectedWorkWall';
import { ContactSheetView } from './components/ContactSheetView';
import { FilmArchiveView } from './components/FilmArchiveView';
import { PersonalWorkView } from './components/PersonalWorkView';
import { AboutNotebookView } from './components/AboutNotebookView';
import { ContactNotebookView } from './components/ContactNotebookView';
import { ProjectDetailView } from './components/ProjectDetailView';
import { TactileFooter } from './components/TactileFooter';
import { PROJECTS } from './data/projects';
import { Project } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState<string>('work');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTarget, setTransitionTarget] = useState<string>('WORK');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [cursorText, setCursorText] = useState<string>('');

  const updateCursor = (mode: CursorMode, text?: string) => {
    setCursorMode(mode);
    setCursorText(text || '');
  };

  const handleTabChange = (tabId: string) => {
    if (tabId === currentTab) return;
    setIsTransitioning(true);
    setTransitionTarget(tabId.toUpperCase());

    setTimeout(() => {
      setCurrentTab(tabId);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleNextProject = (next: Project) => {
    setIsTransitioning(true);
    setTransitionTarget(next.title.toUpperCase());

    setTimeout(() => {
      setSelectedProject(next);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 250);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 550);
  };

  return (
    <div className="min-h-screen bg-[#f7f6f0] text-[#161616] selection:bg-amber-300 selection:text-neutral-900 relative">
      {/* Custom Desktop Cursor */}
      <CustomCursor mode={cursorMode} cursorText={cursorText} />

      {/* Initial Film Shutter Loading Experience */}
      {loading && (
        <LoadingScreen onComplete={() => setLoading(false)} />
      )}

      {/* Page Sliding Paper / Camera Shutter Transition */}
      <PageTransition
        isTransitioning={isTransitioning}
        type="paper"
        destinationLabel={transitionTarget}
      />

      {/* Floating Retro Desk Nav */}
      <FloatingNav
        currentTab={currentTab}
        onTabChange={handleTabChange}
        setCursorMode={updateCursor}
      />

      {/* Main View Router */}
      <main className="relative z-10">
        {currentTab === 'work' && (
          <>
            {/* Tactile Editorial Hero Desk */}
            <HeroDesk
              onExploreWork={() => {
                const el = document.getElementById('work');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              setCursorMode={updateCursor}
            />

            {/* Visual Introduction & Taped Polaroid */}
            <VisualIntro
              onLearnMore={() => handleTabChange('about')}
              setCursorMode={updateCursor}
            />

            {/* Selected Work Editorial Project Wall */}
            <SelectedWorkWall
              projects={PROJECTS}
              onSelectProject={handleOpenProject}
              setCursorMode={updateCursor}
            />
          </>
        )}

        {currentTab === 'photo' && (
          <ContactSheetView setCursorMode={updateCursor} />
        )}

        {(currentTab === 'video' || currentTab === 'film') && (
          <FilmArchiveView setCursorMode={updateCursor} />
        )}

        {currentTab === 'personal' && (
          <PersonalWorkView setCursorMode={updateCursor} />
        )}

        {currentTab === 'about' && (
          <AboutNotebookView
            onContactClick={() => handleTabChange('contact')}
            setCursorMode={updateCursor}
          />
        )}

        {currentTab === 'contact' && (
          <ContactNotebookView setCursorMode={updateCursor} />
        )}
      </main>

      {/* Playful Tactile Footer */}
      <TactileFooter
        onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        setCursorMode={updateCursor}
      />

      {/* Full-Screen Physical Print Project Modal View */}
      {selectedProject && (
        <ProjectDetailView
          project={selectedProject}
          onClose={handleCloseProject}
          onNextProject={handleNextProject}
          allProjects={PROJECTS}
          setCursorMode={updateCursor}
        />
      )}
    </div>
  );
}
