import WorkTogetherCTA from './components/cta/WorkTogetherCTA';
import { StatsCard } from './components/RecentAchievements/StatsGrid/StatsCard';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { Hero } from './components/sections/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <StatsCard />
      <WorkTogetherCTA />
    </main>
  );
}
