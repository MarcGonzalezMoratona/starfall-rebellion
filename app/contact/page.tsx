'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePageHandler } from '../hooks/usePage';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import SocialNetworks from '../components/social-networks';
import socialNetworks from '../data/social-networks';

export default function Contact() {
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('contact');
  });
  return (
    <main className="bg-zinc-900 w-full flex flex-col gap-32 items-center justify-center">
      <section className="flex flex-col xl:flex-row h-screen items-center justify-center gap-4 bg-zinc-900 w-full">
        <Image src="/characters.png" alt="" width={750} height={500} />
        <div className="flex flex-col gap-4">
          <Link
            className="flex flex-col gap-2"
            href="mailto:horizongamesbarcelona@gmail.com"
          >
            <div className="flex flex-col gap-4 items-center sm:items-stretch sm:w-[400px] mx-4">
              <p className="text-amber text-lg xl:text-4xl font-semibold">
                NEED TO TALK?
              </p>
              <h2 className="text-white text-4xl xl:text-6xl font-bold">
                CONTACT US
              </h2>
              <p className="text-zinc-300 text-center sm:text-left">
                We value your thoughts and feedback!
              </p>
              <p className="text-zinc-300 text-center sm:text-left">
                Your thoughts and ideas matter to us, and we value the
                opportunity to connect with you. Feel free to share any feedback
                or suggestions you have in mind.
              </p>
              <p className="text-zinc-300 text-center sm:text-left">
                {`We're excited to engage in meaningful conversations with you!`}
              </p>
              <div className="flex gap-2 items-center justify-center">
                <EnvelopeClosedIcon className="text-white h-4 w-4 sm:h-6 sm:w-6" />
                <p className="text-white text-sm sm:text-lg hover:text-amber transition-colors duration-300">
                  horizongamesbarcelona@gmail.com
                </p>
              </div>
            </div>
          </Link>
          <SocialNetworks
            networks={socialNetworks}
            className="flex justify-center"
          />
        </div>
      </section>
    </main>
  );
}
