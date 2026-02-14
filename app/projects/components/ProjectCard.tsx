import Image from 'next/image';
import Link from 'next/link';

export const ProjectCard = () => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl
      border border-border bg-background/40 backdrop-blur
      transition transform duration-400 delay-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
    >
      {/* Image */}
      <div className="relative h-[220px] overflow-hidden cursor-pointer">
        <Image
          src="/projects/project1.png"
          alt="Project preview"
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6">
        {/* TITLE ROW */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-black text-foreground">Project Name</h3>

          <span
            className="shrink-0 rounded-full
            bg-primary/10 px-3 py-1
            text-[10px] font-semibold uppercase tracking-wider
            text-primary"
          >
            Full Stack
          </span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted">
          Short description explaining what the project does and why it matters.
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 text-xs">
          {['React', 'Node', 'MongoDB'].map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border
              px-2 py-0.5 text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-3">
          <Link
            href="#"
            className="inline-flex items-center gap-2
            rounded-md bg-primary px-4 py-2
            text-xs font-medium text-white
            transition hover:opacity-90"
          >
            Live Demo
          </Link>

          <Link
            href="#"
            className="inline-flex items-center gap-2
            rounded-md border border-border px-4 py-2
            text-xs font-medium text-muted
            transition hover:text-foreground"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};
