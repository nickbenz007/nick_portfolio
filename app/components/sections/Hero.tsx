'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MongoDBIcon, JSIcon, APIIcon, NodeIcon } from '../../../public/icons';

const TECH_STACK = [
  { label: 'MongoDB', icon: MongoDBIcon, color: 'text-green-500' },
  { label: 'JS', icon: JSIcon, color: 'text-yellow-400' },
  { label: 'API', icon: APIIcon, color: 'text-sky-400' },
  { label: 'Node Js', icon: NodeIcon, color: 'text-emerald-500' },
];

type TypingLine = {
  text: string;
  className?: string;
};

type StableTypingProps = {
  lines: TypingLine[];
  speed?: number;
  pauseBetween?: number;
  pauseAfterDone?: number;
};

const StableTyping = ({
  lines,
  speed = 60,
  pauseBetween = 400,
  pauseAfterDone = 2000,
}: StableTypingProps) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      const reset = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, pauseAfterDone);
      return () => clearTimeout(reset);
    }

    const currentText = lines[lineIndex].text;

    if (charIndex < currentText.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, pauseBetween);

    return () => clearTimeout(t);
  }, [charIndex, lineIndex, lines, speed, pauseBetween, pauseAfterDone]);

  return (
    <>
      {lines.map((line, i) => {
        let content = '';

        if (i < lineIndex) content = line.text;
        if (i === lineIndex) content = line.text.slice(0, charIndex);

        return (
          <div
            key={i}
            className={`${line.className} min-h-[1.15em] sm:min-h-[1.1em]`}
          >
            {content.split(/(Nick\.?)/g).map((part, idx) =>
              part.startsWith('Nick') ? (
                <span key={idx} className="text-primary">
                  {part}
                </span>
              ) : (
                <span key={idx}>{part}</span>
              ),
            )}

            {i === lineIndex && (
              <span className="inline-block w-[2px] ml-1 bg-primary animate-blink" />
            )}
          </div>
        );
      })}
    </>
  );
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 from-emerald-900/20 via-transparent to-blue-900/20" />

      <div className="relative mx-auto max-w-[1200px] px-6 py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-8">
            {/* Availability badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              AVAILABLE FOR NEW PROJECTS
            </div>

            {/* Heading */}
            <h1
              className="font-black tracking-tight text-foreground
               text-[clamp(32px,6vw,56px)]
               leading-[1.05]"
            >
              <div className="min-h-[3.6em] sm:min-h-[3.3em]">
                <StableTyping
                  lines={[
                    { text: "Hi, I'm Nick.", className: 'text-foreground' },
                    { text: 'Full Stack', className: 'text-foreground' },
                    { text: 'Developer', className: 'text-foreground' },
                  ]}
                />
              </div>
            </h1>
            {/* Description */}
            <p className="max-w-[520px] text-lg leading-7 text-muted">
              Designing and building high-performance web applications. Expert
              in the{' '}
              <span className="border-b border-primary text-foreground font-black">
                MERN stack
              </span>{' '}
              for scalable, user-centric solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/projects"
                className="inline-flex h-14 items-center gap-3 rounded-xl bg-primary px-8 text-sm font-semibold text-white transition hover:opacity-90"
              >
                View My Work
                <span className="text-lg">↓</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-14 items-center rounded-xl border border-border bg-background/40 px-8 text-sm font-semibold backdrop-blur transition duration-700 delay-75 hover:bg-emerald-400"
              >
                Contact Me
              </Link>
            </div>

            {/* Tech stack */}
            <div className="mt-8 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-muted">
                THE TECH STACK
              </span>

              <div className="flex gap-4">
                {TECH_STACK.map(({ label, icon: Icon, color }) => (
                  <div
                    key={label}
                    className="flex flex-col h-[72px] w-[72px] items-center justify-center
                       rounded-2xl border border-border
                       bg-background/30 backdrop-blur
                       transition hover:-translate-y-1 cursor-pointer hover:shadow-sm hover:shadow-gray-700"
                  >
                    <Icon className={`h-8 w-8 ${color}`} />
                    <span className="text-[10px] font-semibold antialiased tracking-normal text-foreground/70 mt-2">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (reserved for image / 3D later) */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Glow layer */}
            <div className="absolute h-[520px] w-[520px] rounded-[32px] bg-emerald-500/20 blur-3xl" />

            {/* Tilted border frame */}
            {/* Animated border frame 1 */}
            <motion.div
              className="absolute h-[500px] w-[500px] -rotate-6 rounded-[24px] border animate-border-color"
              animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
              transition={{
                duration: 14,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />

            {/* Animated border frame 2 */}
            <motion.div
              className="absolute h-[500px] w-[500px] rotate-6 rounded-[24px] border animate-border-color"
              animate={{ x: [0, -6, 0], y: [0, 6, 0] }}
              transition={{
                duration: 18,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 2,
              }}
            />

            {/* Image card */}
            <div className="relative h-[480px] w-[480px] overflow-hidden rounded-[24px] bg-background shadow-2xl">
              <Image
                src="/profile/Nick.jpg"
                alt="Developer portrait"
                width={480}
                height={480}
                className="h-full w-full object-cover"
              />

              {/* Code snippet card */}
              {/* CODE CARD */}
              <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-[#0A0F14]/80 p-4 backdrop-blur">
                <pre className="text-xs font-mono leading-relaxed">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-emerald-400">developer</span>{' '}
                  <span className="text-muted">= {'{'}</span>
                  {'\n'}&nbsp;&nbsp;
                  <span className="text-sky-400">name</span>
                  <span className="text-muted">:</span>{' '}
                  <span className="text-amber-300">&quot;Nick&quot;</span>
                  <span className="text-muted">,</span>
                  {'\n'}&nbsp;&nbsp;
                  <span className="text-sky-400">focus</span>
                  <span className="text-muted">:</span>{' '}
                  <span className="text-amber-300">&quot;MERN&quot;</span>
                  {'\n'}
                  <span className="text-muted">{'};'}</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
