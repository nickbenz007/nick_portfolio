'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/app/types/projects';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: Props) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % project.image.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? project.image.length - 1 : prev - 1));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-sm text-muted hover:text-foreground"
        >
          Close
        </button>

        {/* Slider */}
        <div className="relative mb-8 h-[450px] w-full overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={project.image[index]}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          {project.image.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white text-xl cursor-pointer"
              >
                ‹
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white text-xl cursor-pointer"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Title */}
        <h2 className="mb-4 text-3xl font-bold text-foreground">
          {project.title}
        </h2>

        {/* Long Description */}
        <p className="mb-6 text-muted leading-relaxed">
          {project.longDescription}
        </p>

        {/* Tech Stack */}
        <div className="mb-6 flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-3 py-1 text-sm text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="rounded-md bg-primary px-5 py-2 text-sm text-white"
            >
              View Live
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="rounded-md border border-border px-5 py-2 text-sm text-muted"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
