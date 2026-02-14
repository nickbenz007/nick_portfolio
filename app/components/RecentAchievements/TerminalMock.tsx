export const TerminalMock = () => {
  return (
    <div className="relative rounded-2xl border border-border bg-[#0B1020]/80 backdrop-blur shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-auto text-xs text-muted">zsh — 80×24</span>
      </div>

      {/* Body */}
      <div className="p-6 font-mono text-sm">
        <p className="text-emerald-400">
          ➜ <span className="text-sky-400">~/portfolio</span>{' '}
          <span className="text-muted">git:(main)</span>
        </p>

        <p className="mt-2 text-foreground">
          $ npm install{' '}
          <span className="text-sky-400">production-ready-code</span>
        </p>

        <p className="mt-4 text-muted">Installing dependencies...</p>

        {/* Progress bar */}
        <div className="mt-4 h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[74%] bg-primary" />
        </div>

        <p className="mt-2 text-right text-xs text-muted">74%</p>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 border-t border-white/10 text-center">
        <span className="text-xs tracking-widest text-muted">
          REAL-TIME BUILD STATUS:{' '}
          <span className="text-emerald-400">ACTIVE</span>
        </span>
      </div>
    </div>
  );
};
