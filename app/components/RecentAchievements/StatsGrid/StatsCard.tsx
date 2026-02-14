import { TerminalMock } from '../TerminalMock';

const STATS = [
  {
    value: '50+',
    label: 'PROJECTS COMPLETED',
    color: 'text-blue-400',
  },
  {
    value: '5+',
    label: 'YEARS EXPERIENCE',
    color: 'text-emerald-400',
  },
  {
    value: '10k+',
    label: 'HOURS OF CODING',
    color: 'text-cyan-400',
  },
  {
    value: '20+',
    label: 'GLOBAL CLIENTS',
    color: 'text-green-400',
  },
];

export const StatsCard = () => {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 from-black via-transparent to-black/60" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              Recent Achievements
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Measured growth through consistent high-quality delivery.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-background/40 p-6 backdrop-blur"
                >
                  <div className={`text-4xl font-extrabold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs tracking-widest text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Terminal */}
          <TerminalMock />
        </div>
      </div>
    </section>
  );
};
