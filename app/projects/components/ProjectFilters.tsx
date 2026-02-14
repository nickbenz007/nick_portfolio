const FILTERS = ['All', 'Frontend', 'Backend', 'Full Stack'];

export const ProjectFilters = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {FILTERS.map((filter, index) => (
        <button
          key={filter}
          className={`rounded-full px-4 py-1.5 text-xs font-medium transition
            ${
              index === 0
                ? 'bg-primary text-white'
                : 'border border-border text-muted hover:text-foreground'
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
