type Props = {
  active: 'all' | 'work' | 'education';
  onChange: (value: 'all' | 'work' | 'education') => void;
};

const FILTERS = ['all', 'work', 'education'] as const;

export const JourneyFilters = ({ active, onChange }: Props) => {
  return (
    <div className="flex gap-2 bg-gray-800 p-3 rounded-lg">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`
            rounded-lg px-4 py-2 text-xs font-medium capitalize
            transition cursor-pointer
            ${
              active === filter
                ? 'bg-primary/20 text-primary'
                : 'bg-white/5 text-muted hover:bg-white/10'
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
