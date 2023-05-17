'use client';
import Link from 'next/link';
import { HorizonsWhite } from '../components/logos/horizons-white';
import { useEffect } from 'react';
import { usePageHandler } from '../hooks/usePage';

export default function About() {
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('about');
  });

  return (
    <main className="bg-zinc-900 w-full flex flex-col items-center justify-center">
      <section className="h-screen w-full sm:flex-row flex-col flex sm:gap-8 xl:gap-12 items-center justify-center font-ethnocentric">
        <HorizonsWhite height={280} width={280} />
        <h1 className="text-white text-3xl sm:text-5xl xl:text-7xl text-center">
          HORIZONS GAMES
        </h1>
      </section>
      <div className="hidden text-xl sm:flex items-center text-amber border-2 border-amber px-4 py-1 rounded-full">
        <Link href="https://horizons-games.vercel.app/team">Meet the team</Link>
      </div>
    </main>
  );
}
