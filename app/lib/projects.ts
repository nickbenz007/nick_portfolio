// app/lib/projects.ts
export const PROJECTS = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  type: 'Full Stack',
  description:
    'Short description explaining what the project does and why it matters.',
  tech: ['React', 'Node', 'MongoDB'],
  image: '/projects/placeholder.jpg',
}));
