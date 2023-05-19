'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePageHandler } from '../hooks/usePage';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';

export default function Contact() {
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('contact');
  });
  return (
    <main className="bg-zinc-900 w-full h-screen flex flex-col gap-32 items-center justify-center">
      <Link
        className="flex flex-col gap-2 items-center"
        href="mailto:horizongamesbarcelona@gmail.com"
      >
        <p className="text-white text-3xl font-bold">CONTACT US</p>
        <div className="flex gap-2 items-center">
          <EnvelopeClosedIcon className="text-white h-4 w-4 sm:h-6 sm:w-6" />
          <p className="text-white text-sm sm:text-lg hover:text-amber transition-colors duration-300">
            horizongamesbarcelona@gmail.com
          </p>
        </div>
      </Link>
    </main>
  );
}
