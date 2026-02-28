'use client';

import { useState } from 'react';
import { PROJECTS } from '@/app/lib/projects';
import { Project } from '@/app/types/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from '@/app/components/projectmodal/ProjectModal';
import { ProjectFilters } from './ProjectFilters';

const PAGE_SIZE = 6;

export const ProjectsGrid = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <>
      {/* Filters */}
      <ProjectFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Load More */}
      {hasMore && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            className="group inline-flex items-center gap-3
              rounded-xl border border-primary/20
              bg-primary/5 px-10 py-4
              text-sm font-semibold tracking-[0.2em]
              text-primary uppercase
              transition hover:bg-primary/10 cursor-pointer"
          >
            Load More Projects
            <span className="transition group-hover:animate-bounce">↓</span>
          </button>
        </div>
      )}
    </>
  );
};

export { ProjectsGrid as ProjectGrid };
