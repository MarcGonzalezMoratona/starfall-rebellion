'use client';
import { useEffect } from 'react';
import { usePageHandler } from '../hooks/usePage';

export default function Media() {
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('media');
  });

  return (
    <main className="bg-zinc-900 w-full h-screen flex flex-col gap-32 items-center justify-center">
      <h1 className="text-5xl text-white font-semibold">MEDIA</h1>
      <section>
        <h2 className="text-3xl text-white font-semibold">VIDEOS</h2>
      </section>
      <section>
        <h2 className="text-3xl text-white font-semibold">WALLPAPERS</h2>
      </section>
      <section>
        <h2 className="text-3xl text-white font-semibold">CONCEPT ART</h2>
      </section>
    </main>
  );
}
