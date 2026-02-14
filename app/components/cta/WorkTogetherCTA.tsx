'use client';

import Link from 'next/link';

type WorkTogetherCTAProps = {
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export const WorkTogetherCTA = ({
  title = 'Interested in working together?',
  subtitle = 'Available for freelance and full-time roles.',
  primaryCtaLabel = 'Contact Me',
  primaryCtaHref = '/contact',
  secondaryCtaLabel = 'Download CV',
  secondaryCtaHref = '/resume.pdf',
}: WorkTogetherCTAProps) => {
  return (
    <section className="relative mt-24">
      {/* INNER CONTAINER — THIS WAS MISSING */}
      <div className="mx-auto max-w-[1200px] md:px-2 px-0">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background/40 backdrop-blur">
          {/* subtle top divider glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="flex flex-col gap-6 px-8 py-12 md:flex-row md:items-center md:justify-between">
            {/* Text */}
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted md:text-base">{subtitle}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={primaryCtaHref}
                className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white transition hover:opacity-90"
              >
                {primaryCtaLabel}
              </Link>

              <Link
                href={secondaryCtaHref}
                className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background/40 px-6 text-sm font-semibold text-foreground transition hover:bg-emerald-500"
              >
                {secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogetherCTA;
