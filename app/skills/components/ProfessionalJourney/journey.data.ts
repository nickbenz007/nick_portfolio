export type JourneyType = 'work' | 'education';

export type JourneyItem = {
  id: string;
  type: JourneyType;
  title: string;
  organization: string;
  period: string;
  points: string[];
};

export const JOURNEY: JourneyItem[] = [
  {
    id: 'senior-mern',
    type: 'work',
    title: 'Senior MERN Developer',
    organization: 'Fiverr Freelancer',
    period: 'Jan 2026 – Present',
    points: [
      'Working on a monolithic architecture to microservices using Node.js and Docker and some modern technologies.',
      'Improved application response time by 40% through MongoDB query optimization and Redis caching.',
      'Improved application performance by 30% through code refactoring and implementing best practices.',
    ],
  },
  {
    id: 'fullstack',
    type: 'work',
    title: 'Frontend Developer',
    organization: 'Linkiat IT Company',
    period: 'Sept 2025 – Jan 2026',
    points: [
      'Developed responsive UI components using React and Tailwind CSS.',
      'Integrated Stripe API for subscription-based payment workflows.',
    ],
  },
  {
    id: 'MERN-freelancer',
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'Fiverr Freelancer',
    period: 'Aug 2022 – Sept 2025',
    points: [
      'Developed responsive UI components using React and Tailwind CSS.',
      'Developed fully fledged MERN stack applications with user authentication, role-based access control, and RESTful APIs.',
      'Integrated APIs for for over all Dashboard all CRUD Operations.',
    ],
  },
  {
    id: 'frontend',
    type: 'work',
    title: 'Frontend Developer',
    organization: 'aartec ltd',
    period: 'Aug 2021 – Aug 2022',
    points: [
      'Developed responsive UI ( Web/Mobile ) components using React and Tailwind CSS.',
      'Integrated API for subscription-based payment workflows and SEO optimizations',
    ],
  },
  {
    id: 'bsc',
    type: 'education',
    title: 'B.Sc. in Computer Science',
    organization: 'KUST',
    period: '2006 – 2010',
    points: [
      'Graduated with Honors.',
      'Specialized in Software Engineering and Distributed Systems.',
      'Active member of the Competitive Programming Club.',
    ],
  },
];
