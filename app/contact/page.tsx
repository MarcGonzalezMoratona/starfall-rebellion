'use client';
import Link from 'next/link';
import SocialNetworks from '../components/social-networks';
import socialNetworks from '../data/social-networks';
import { useEffect } from 'react';
import { usePageHandler } from '../hooks/usePage';

export default function Contact() {
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('contact');
  });
  return (
    <main className="bg-zinc-900 w-full h-screen flex flex-col gap-32 items-center justify-center">
      <Link href="mailto:horizongamesbarcelona@gmail.com">
        <p className="text-white text-3xl font-bold">CONTACT US</p>
      </Link>
      <section>
        <SocialNetworks networks={socialNetworks} size="lg" />
      </section>
    </main>
  );
}
