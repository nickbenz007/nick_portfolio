import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/app/types/projects';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl
      border border-border bg-background/40 backdrop-blur
      transition transform duration-400 delay-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
    >
      <div className="relative h-[220px] overflow-hidden cursor-pointer">
        <Image
          src={project.image[0]}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-black text-foreground">
            {project.title}
          </h3>

          <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
            {project.category}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 text-xs">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-2 py-0.5 text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-medium text-white transition hover:opacity-90"
            >
              Live Demo
            </Link>
          )}

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-xs font-medium text-muted transition hover:text-foreground"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
