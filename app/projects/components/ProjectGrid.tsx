'use client';

import { useState } from 'react';
import { PROJECTS } from '@/app/lib/projects';
import { ProjectCard } from './ProjectCard';

const PAGE_SIZE = 6;

export const ProjectsGrid = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleProjects = PROJECTS.slice(0, visibleCount);
  const hasMore = visibleCount < PROJECTS.length;

  return (
    <>
      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} />
        ))}
      </div>

      {/* Load more */}
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
