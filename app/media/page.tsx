'use client';
import { useEffect } from 'react';
import { usePageHandler } from '../hooks/usePage';

export default function Media() {
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('media');
  });

  return (
    <main className="bg-zinc-900 w-full h-screen flex flex-col gap-32 items-center justify-center"></main>
  );
}
