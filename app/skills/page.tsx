import PageContainer from '../components/layout/PageContainer';
import { TechnicalStack } from './components/TechnicalStack/TechnicalStack';
import { ProfessionalJourney } from './components/ProfessionalJourney/ProfessionalJourney';
import WorkTogetherCTA from '../components/cta/WorkTogetherCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills & Experience | Nick – Full Stack Developer',
  description:
    'Technical stack including React, Node.js, MongoDB, AWS, Docker, and scalable backend architecture experience.',
};

export default function SkillsPage() {
  return (
    <PageContainer
      title="Skills & Experience"
      highlight="Experience"
      description="A specialized full-stack developer focusing on the MERN ecosystem. Building scalable, performant web applications with modern engineering practices."
    >
      <TechnicalStack />
      <ProfessionalJourney />
      <WorkTogetherCTA />
    </PageContainer>
  );
}
