import WorkTogetherCTA from '../components/cta/WorkTogetherCTA';
import PageContainer from '../components/layout/PageContainer';
import { ProjectGrid } from './components/ProjectGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Nick – MERN Stack Developer',
  description:
    'Explore featured full-stack projects built with React, Node.js, MongoDB, and modern cloud infrastructure.',
};

export const ProjectsPage = () => {
  return (
    <PageContainer
      title="Featured Projects"
      highlight="Projects"
      description="A showcase of my recent work as a MERN stack developer, featuring
                    production-ready full-stack applications, interactive dashboards, and scalable
                    backend architectures."
    >
      <div className="mt-10 space-y-10">
        <ProjectGrid />
      </div>
      <WorkTogetherCTA />
    </PageContainer>
  );
};

export default ProjectsPage;
