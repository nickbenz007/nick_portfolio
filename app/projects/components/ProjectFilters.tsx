'use client';

interface Props {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const FILTERS = ['All', 'Frontend', 'Backend', 'Full Stack'];

export const ProjectFilters = ({ activeFilter, setActiveFilter }: Props) => {
  return (
    <div className="flex flex-wrap gap-3">
      {FILTERS.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition cursor-pointer
              ${
                isActive
                  ? 'bg-primary text-white'
                  : 'border border-border text-muted hover:text-foreground'
              }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};
