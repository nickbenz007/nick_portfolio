import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Nick – Full Stack MERN Developer',
    template: '%s | Nick',
  },
  description:
    'Full stack MERN developer building scalable, high-performance web applications with modern engineering practices.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* GLOBAL BACKGROUND (FIGMA CANVAS) */}
        {/* GLOBAL BACKGROUND — FIGMA MATCH */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          {/* Base dark canvas */}
          <div className="absolute inset-0 bg-[#070B10]" />

          {/* Left emerald wash */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(60% 80% at 0% 50%, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.06) 35%, transparent 70%)',
            }}
          />

          {/* Right blue wash */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(60% 80% at 100% 50%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.06) 35%, transparent 70%)',
            }}
          />

          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
