import { Project } from '../types/projects';

export const PROJECTS: Project[] = [
  {
    id: 'climajo',
    title: 'Climajo Weather App',
    slug: 'climajo-weather-app',
    category: 'Frontend',
    description:
      'Modern weather application with dynamic UI and responsive design.',
    longDescription:
      'Climajo is a responsive weather application that provides real-time weather updates using a clean and interactive interface. It focuses on performance, accessibility, and elegant UI transitions.',
    techStack: ['React', 'API Integration', 'TailwindCSS'],
    image: [
      '/projects/climajo.png',
      '/projects/climajo2.png',
      '/projects/climajo3.png',
      '/projects/climajo4.png',
    ],
    github: '',
    liveUrl: '',
  },

  {
    id: 'workreel',
    title: 'WorkReel Platform',
    slug: 'workreel-platform',
    category: 'Full Stack',
    description:
      'A professional project showcase and workflow management system.',
    longDescription:
      'WorkReel is a full-stack platform designed to manage tasks, workflows, and project showcases. It integrates structured backend logic with modern frontend design for seamless user experience.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    image: [
      '/projects/workreel.png',
      '/projects/workreel1.png',
      '/projects/workreel3.png',
      '/projects/workreel4.png',
      '/projects/workreel5.png',
      '/projects/workreel6.png',
    ],
    github: '',
    liveUrl: '',
  },

  {
    id: 'devconnect',
    title: 'DevConnect',
    slug: 'devconnect',
    category: 'Full Stack',
    description: 'Developer networking and collaboration platform.',
    longDescription:
      'DevConnect is a social networking platform for developers that allows profile creation, collaboration, and project interaction. It demonstrates authentication flows and database structuring.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    image: ['/projects/DevConnect.png'],
    github: '',
    liveUrl: '',
  },

  {
    id: 'taskmaster',
    title: 'TaskMaster',
    slug: 'taskmaster',
    category: 'Full Stack',
    description: 'Task management system with interactive dashboard.',
    longDescription:
      'TaskMaster is a productivity-focused task management system featuring categorized task views, user tracking, and clean UI components.',
    techStack: ['React', 'Express', 'MongoDB'],
    image: ['/projects/TaskMaster.png'],
    github: '',
    liveUrl: '',
  },

  {
    id: 'shopify-ui',
    title: 'Shopify UI Clone',
    slug: 'shopify-ui-clone',
    category: 'Frontend',
    description: 'Responsive Shopify-inspired eCommerce interface.',
    longDescription:
      'This project replicates a Shopify-style eCommerce interface with a focus on layout precision, responsive design, and component reusability.',
    techStack: ['React', 'TailwindCSS'],
    image: ['/projects/shopify.jpg'],
    github: '',
    liveUrl: '',
  },

  {
    id: 'rv-dashboard',
    title: 'RV Dashboard',
    slug: 'rv-dashboard',
    category: 'Full Stack',
    description:
      'Interactive dashboard for managing structured records and workflows.',
    longDescription:
      'A full-stack dashboard application that enables structured data handling, record management, and scalable architecture patterns.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    image: [
      '/projects/1.png',
      '/projects/1-1.png',
      '/projects/2.png',
      '/projects/2-2.png',
      '/projects/3.png',
      '/projects/3-3.png',
      '/projects/4.png',
      '/projects/5.png',
    ],
    github: '',
    liveUrl: '',
  },

  {
    id: 'portfolio-old',
    title: 'Previous Portfolio Version',
    slug: 'previous-portfolio',
    category: 'Frontend',
    description: 'Earlier version of personal developer portfolio.',
    longDescription:
      'A previous portfolio version built to showcase projects, skills, and design capabilities with a responsive layout.',
    techStack: ['React', 'CSS'],
    image: ['/projects/project1.png'],
    github: '',
    liveUrl: '',
  },
];
