'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
];

const LOGO_MAP: Record<string, string> = {
  '/': '/logos/logo2.svg',
  '/projects': '/logos/logo2.svg',
  '/skills': '/logos/logo1.svg',
  '/contact': '/logos/logo3.svg',
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const logoSrc = LOGO_MAP[pathname] ?? '/logos/home.png';

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur">
              <Image
                key={logoSrc}
                src={logoSrc}
                alt="Logo"
                width={28}
                height={28}
                className="animate-logo-spin"
              />
            </div>

            <span className="tracking-tighter text-2xl font-black text-foreground transition">
              MERN
              <span className="tracking-tighter text-2xl font-black text-primary hover:text-foreground transition">
                DEV
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-wide transition ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium transition hover:bg-primary-hover"
          >
            Hire Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-muted text-2xl hover:text-foreground active:scale-95 transition transform"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur transition-opacity ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-background border-l border-white/10 p-6 transition-transform ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setOpen(false)}
              className="text-muted text-2xl hover:text-foreground border border-white/50 active:border-white active:scale-95 hover:border-foreground rounded-xl px-2 py-0.5 transition transform"
            >
              ✕
            </button>
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur">
              <Image
                key={logoSrc}
                src={logoSrc}
                alt="Logo"
                width={28}
                height={28}
                className="animate-logo-spin"
              />
            </div>
          </div>
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
