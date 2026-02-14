import {
  MongoDB,
  Expressjs,
  JavaScript,
  NodeJs,
  Redux,
  TailwindCSS,
  AWS,
  Docker,
} from '@/public/skills';

export type TechItem = {
  id: string;
  title: string;
  subtitle: string;
  Icon: React.FC<{ className?: string }>;
};

export const TECH_STACK: TechItem[] = [
  {
    id: 'mongodb',
    title: 'MongoDB',
    subtitle: 'NoSQL Database',
    Icon: MongoDB,
  },
  {
    id: 'express',
    title: 'Express.js',
    subtitle: 'Backend Framework',
    Icon: Expressjs,
  },
  {
    id: 'react',
    title: 'React',
    subtitle: 'Frontend UI Library',
    Icon: JavaScript,
  },
  {
    id: 'node',
    title: 'Node.js',
    subtitle: 'Runtime Environment',
    Icon: NodeJs,
  },
  {
    id: 'redux',
    title: 'Redux',
    subtitle: 'State Management',
    Icon: Redux,
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    subtitle: 'Utility-first CSS',
    Icon: TailwindCSS,
  },
  {
    id: 'aws',
    title: 'AWS',
    subtitle: 'Cloud Infrastructure',
    Icon: AWS,
  },
  {
    id: 'docker',
    title: 'Docker',
    subtitle: 'Containerization',
    Icon: Docker,
  },
];
