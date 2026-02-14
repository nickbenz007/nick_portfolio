'use client';

import { useState } from 'react';
import { JOURNEY } from './journey.data';
import { JourneyCard } from './JourneyCard';
import { JourneyFilters } from './JourneyFilters';
import { Degree, Experience, ProJourney } from '@/public/skills';
import { JourneyMeta } from './JourneyMeta';

export const ProfessionalJourney = () => {
  const [filter, setFilter] = useState<'all' | 'work' | 'education'>('all');

  const items =
    filter === 'all' ? JOURNEY : JOURNEY.filter((i) => i.type === filter);

  return (
    <section className="mt-24">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-3 items-start">
          <ProJourney className="h-10 w-8 text-primary" />
          <div>
            <h2 className="text-2xl font-black text-foreground">
              Professional Journey
            </h2>
            <p className="mt-1 text-sm text-muted">
              Work experience and academic background
            </p>
          </div>
        </div>
        <JourneyFilters active={filter} onChange={setFilter} />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary/90" />

        <div className="space-y-20">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="grid grid-cols-[1fr_auto_1fr] md:gap-12 gap-4 items-center"
              >
                {/* LEFT COLUMN */}
                <div className="hidden md:block">
                  {isLeft && (
                    <JourneyMeta
                      period={item.period}
                      title={item.title}
                      organization={item.organization}
                      align="left"
                    />
                  )}
                  {!isLeft && <JourneyCard item={item} />}
                </div>

                {/* CENTER DOT */}
                <div className="relative flex">
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/50 border border-primary/80">
                    {item.type === 'education' ? (
                      <Degree className="h-7 w-6 text-primary" />
                    ) : (
                      <Experience className="h-7 w-6 text-primary" />
                    )}
                  </div>
                </div>

                <div className="md:block">
                  <div className="md:hidden">
                    {/* MOBILE STACK */}
                    <JourneyMeta
                      period={item.period}
                      title={item.title}
                      organization={item.organization}
                      align="left"
                    />
                    <JourneyCard item={item} />
                  </div>

                  <div className="hidden md:block">
                    {!isLeft && (
                      <JourneyMeta
                        period={item.period}
                        title={item.title}
                        organization={item.organization}
                        align="right"
                      />
                    )}
                    {isLeft && <JourneyCard item={item} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
