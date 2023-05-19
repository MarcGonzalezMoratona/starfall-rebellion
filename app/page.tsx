'use client';
import { useEffect } from 'react';
import CTA from './components/cta';
import SocialNetworks from './components/social-networks';
import socialNetworks from './data/social-networks';
import { usePageHandler } from './hooks/usePage';
import NewsLetterSignUpForm from './components/newsletter-signup-form';

export default function Home() {
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('home');
  });

  return (
    <main className="bg-zinc-900 w-full flex flex-col items-center justify-center">
      <section className="flex flex-col justify-center gap-4 items-center h-96">
        <h1 className="text-white text-3xl sm:text-7xl font-semibold">
          LEGO STAR WARS:
        </h1>
        <h2 className="text-white text-2xl sm:text-5xl font-semibold">
          STARFALL REBELLION
        </h2>
        <p className="text-white sm:text-xl">ACTION-ADVENTURE · FREE TO PLAY</p>
        <CTA
          label="DOWNLOAD"
          href="https://github.com/Horizons-Games/Axolotl-Engine/releases"
          className="hidden sm:block"
        />
      </section>
      {/* <section className="flex justify-center items-center h-96 px-4 w-full bg-royalPurple gap-16">
        <div className="flex flex-col w-1/3 h-64">
          <h2 className="text-white text-2xl font-semibold">
            ABOUT STARFALL REBELLION
          </h2>
          <p className="text-white">
            A lot of placeholder text that does not need to make sense because
            it just fills the container with words to know how to style the page
          </p>
        </div>
        <div className="flex flex-col w-1/3 h-64">
          <h2 className="text-white text-2xl font-semibold">FEATURES</h2>
          <ul>
            <li className="text-white">A feature</li>
            <li className="text-white">A feature</li>
            <li className="text-white">A feature</li>
            <li className="text-white">A feature</li>
            <li className="text-white">A feature</li>
            <li className="text-white">A feature</li>
            <li className="text-white">A feature</li>
          </ul>
        </div>
      </section> */}
      <section className="flex items-center h-96 sm:w-2/3 xl:w-1/3 px-4 w-full">
        <NewsLetterSignUpForm />
      </section>
      {/* <section className="w-1/3">
        <div className="flex flex-col items-center gap-4">
          <p className="text-white text-xl sm:text-3xl">STAY TUNED</p>
          <SocialNetworks networks={socialNetworks} size="md" />
        </div>
      </section> */}
    </main>
  );
}
