import { TechStack } from '@/public/skills';
import { TECH_STACK } from './tech-stack.data';
import { TechCard } from './TechCard';

export const TechnicalStack = () => {
  return (
    <section className="mt-20">
      {/* Header */}
      <div className="mb-10 flex md:flex-row flex-col md:items-center items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-primary">
            {/* ◆ */}
            <TechStack className="h-10 w-8" />
          </span>
          <h2 className="text-2xl font-black text-foreground">
            Technical Stack
          </h2>
        </div>

        <span className="text-xs uppercase tracking-widest text-muted">
          Core Technologies
        </span>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TECH_STACK.map((item) => (
          <TechCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
