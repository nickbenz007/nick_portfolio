import { Send } from '@/public/contact';

export const ContactForm = () => {
  return (
    <div className="rounded-2xl border border-border bg-primary/10 md:px-10 px-6 py-10">
      <h2 className="mb-8 text-xl font-semibold text-foreground">
        Send a Message
      </h2>

      <form className="space-y-8">
        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="h-14 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">
              Email
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="h-14 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-muted">
            Subject
          </label>
          <input
            type="text"
            placeholder="Project inquiry"
            className="h-14 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-muted">
            Message
          </label>
          <textarea
            placeholder="How can I help you?"
            className="min-h-[180px] w-full resize-none rounded-md border border-border bg-background px-4 py-4 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 flex h-14 w-full items-center justify-center rounded-md bg-primary text-md font-black text-primary-foreground transition hover:opacity-90 cursor-pointer shadow-xl shadow-primary/30"
        >
          <div className="flex items-center justify-center gap-2">
            <Send className="text-white h-auto w-6 mb-1" />
            <span className="flex items-center justify-center gap-2 uppercase">
              Send Message
            </span>
          </div>
        </button>
      </form>
    </div>
  );
};
