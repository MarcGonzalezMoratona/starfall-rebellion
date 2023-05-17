'use client';
import { useEffect } from 'react';
import DownloadCTA from './components/download-cta';
import SocialNetworks from './components/social-networks';
import socialNetworks from './data/social-networks';
import { usePageHandler } from './hooks/usePage';

export default function Home() {
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('home');
  });

  return (
    <main className="bg-zinc-900 w-full flex flex-col items-center justify-center">
      {/* <video playsInline autoPlay muted loop>
        <source src="/cosmos.mp4" type="video/mp4" />
      </video> */}
      <section className="h-screen flex flex-col justify-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-white text-3xl sm:text-7xl font-semibold">
            LEGO STAR WARS:
          </h1>
          <h2 className="text-white text-2xl sm:text-5xl font-semibold">
            STARFALL REBELLION
          </h2>
          <p className="text-white sm:text-xl">
            ACTION-ADVENTURE · FREE TO PLAY
          </p>
          <DownloadCTA />
          <div className="flex flex-col items-center gap-4">
            <p className="text-white text-xl sm:text-3xl">STAY TUNED</p>
            <SocialNetworks networks={socialNetworks} size="md" />
          </div>
        </div>
      </section>
    </main>
  );
}
