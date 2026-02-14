import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
};

const PROJECTS: Project[] = [
  {
    id: 'devconnect',
    title: 'DevConnect',
    category: 'SOCIAL',
    description:
      'A real-time social network built with MongoDB and Socket.io for instant developer collaboration.',
    image: '/projects/DevConnect.png',
    tech: ['MongoDB', 'Express', 'Socket.io'],
  },
  {
    id: 'shopify',
    title: 'Shopify Clone',
    category: 'E-COMMERCE',
    description:
      'High-performance e-commerce platform using React/Redux with custom state management and Stripe.',
    image: '/projects/shopify.jpg',
    tech: ['React', 'Redux', 'Node.js'],
  },
  {
    id: 'taskmaster',
    title: 'TaskMaster',
    category: 'PRODUCTIVITY',
    description:
      'Enterprise-grade project management tool built with Node.js featuring complex Gantt chart visualizations.',
    image: '/projects/TaskMaster.png',
    tech: ['Node.js', 'Express', 'PostgreSQL'],
  },
];

const TECH_STYLES: Record<
  string,
  { text: string; bg: string; border: string }
> = {
  MongoDB: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  Express: {
    text: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
  'Socket.io': {
    text: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  React: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  Redux: {
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  'Node.js': {
    text: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  PostgreSQL: {
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
};

export const FeaturedProjects = () => {
  return (
    <section className="relative py-32">
      {/* Background gradient – FULL WIDTH */}
      <div className="absolute inset-0 from-blue-900/20 via-transparent to-emerald-900/20" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <div className="mb-16 max-w-xl flex items-start justify-center gap-6">
          <div className="h-[4px] rounded w-16 bg-primary mt-3" />
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-foreground">
              Featured Projects
            </h2>
            <p className="mt-4 text-muted">
              Deep dive into some of my core developments using the latest MERN
              technologies.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-border bg-background/40 backdrop-blur transition hover:shadow-sm shadow-gray-700 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-primary/80 px-3 py-1 text-xs font-medium text-white">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const style = TECH_STYLES[tech];

                    return (
                      <span
                        key={tech}
                        className={[
                          'rounded-md border px-2 py-1 text-xs font-medium backdrop-blur',
                          style?.text,
                          style?.bg,
                          style?.border,
                        ].join(' ')}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
