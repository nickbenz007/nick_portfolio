export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  image: string[];
  techStack: string[];
  features?: string[];
  github?: string;
  liveUrl?: string;
}
