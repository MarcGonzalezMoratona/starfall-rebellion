'use client';
import React, { useEffect } from 'react';
import CTA from './components/cta';
import SocialNetworks from './components/social-networks';
import socialNetworks from './data/social-networks';
import { usePageHandler } from './hooks/usePage';
import NewsLetterSignUpForm from './components/newsletter-signup-form';
import StarfallRebellion from './components/logos/starfall-rebellion';
import { posts } from './data/posts';
import MiniPost from './components/mini-post';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Home() {
  const PageHandler = usePageHandler();
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
  useEffect(() => {
    PageHandler('home');
  });

  return (
    <main className="bg-zinc-900 w-full flex flex-col items-center justify-center scroll-smooth">
      <section className="flex flex-col justify-center gap-6 items-center h-screen">
        <StarfallRebellion width={800} height={800} />
        {/* <h1 className="text-white text-3xl sm:text-7xl font-semibold">
          LEGO STAR WARS:
        </h1>
        <h2 className="text-white text-2xl sm:text-5xl font-semibold">
          STARFALL REBELLION
        </h2> */}
        <p className="text-white sm:text-2xl">
          ACTION-ADVENTURE · FREE TO PLAY
        </p>
        <CTA
          label="DOWNLOAD"
          href="https://github.com/Horizons-Games/Axolotl-Engine/releases/download/v0.5.0/Starfall.Rebellion.0.5.0.zip"
          className="hidden sm:block"
          size="lg"
        />
        <Link href="#latest-news">
          <ChevronDownIcon
            className="h-12 w-12 cursor-pointer rounded-full my-8
          bg-royalPurple p-2 text-neutral-100 
          sm:transition-transform sm:duration-300 sm:hover:translate-y-1"
          />
        </Link>
      </section>
      <section
        className="lg:h-screen w-full flex flex-col justify-center items-center bg-royalPurple gap-8"
        id="latest-news"
      >
        <h2 className="text-neutral-100 text-4xl font-bold my-8">
          LATEST NEWS
        </h2>
        <div className="flex w-full justify-center items-center gap-16">
          {posts.length > 2 && (
            <ChevronLeftIcon
              className="h-12 w-12 cursor-pointer rounded-full my-8
          bg-amber p-2 text-black hidden lg:block
          sm:transition-transform sm:duration-300 sm:hover:translate-y-1"
            />
          )}
          <div className="flex flex-col justify-center items-center w-full sm:grid sm:grid-cols-2 lg:w-2/3">
            {sortedPosts.map((post) => {
              return (
                <React.Fragment key={post.id}>
                  <MiniPost data={post} />
                </React.Fragment>
              );
            })}
          </div>
          {posts.length > 2 && (
            <ChevronRightIcon
              className="h-12 w-12 cursor-pointer rounded-full my-8
          bg-amber p-2 text-black hidden lg:block
          sm:transition-transform sm:duration-300 sm:hover:translate-y-1"
            />
          )}
        </div>
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
      <section className="flex justify-center items-center h-96 sm:w-2/3 xl:w-1/3 px-4 w-full">
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
