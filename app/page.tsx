'use client';
import React, { useEffect, useState } from 'react';
import CTA from './components/cta';
import SocialNetworks from './components/social-networks';
import socialNetworks from './data/social-networks';
import { usePageHandler } from './hooks/usePage';
import NewsLetterSignUpForm from './components/newsletter-signup-form';
import StarfallRebellion from './components/logos/starfall-rebellion';
import { posts } from './data/posts';
import { songs } from './data/songs';
import MiniPost from './components/mini-post';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';
import Song from './components/song';
import FullScreenSlider from './components/fullscreen-slider';
import { bixImages } from '../app/data/bix-images';
import { alluraImages } from '../app/data/allura-images';

export default function Home() {
  const PageHandler = usePageHandler();
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlider, setCurrentSlider] = useState(-1);

  const openSlider = (index: any, slider: number) => {
    setCurrentImageIndex(index);
    setCurrentSlider(slider);
  };

  const closeSlider = () => {
    setCurrentSlider(-1);
  };

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
          href="https://github.com/Horizons-Games/Axolotl-Engine/releases/download/v0.6.0/Starfall.Rebellion.0.6.0.zip"
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
        className="w-full flex flex-col justify-center items-center gap-8 py-8 bg-royalPurple"
        id="latest-news"
      >
        <h2 className="text-neutral-100 text-4xl font-bold">LATEST NEWS</h2>
        <div className="flex w-full justify-center items-center gap-16">
          {posts.length > 2 && (
            <ChevronLeftIcon
              className="h-12 w-12 cursor-pointer rounded-full my-8
          bg-amber p-2 text-black hidden lg:block
          sm:transition-transform sm:duration-300 sm:hover:translate-y-1"
            />
          )}
          <div className="flex flex-col justify-center items-center w-full sm:grid sm:grid-cols-2 xl:w-2/3">
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
            <li className="text-white">
              Play with your keyboard or controller
            </li>
            <li className="text-white">A feature</li>
            <li className="text-white">A feature</li>
            <li className="text-white">A feature</li>
            <li className="text-white">A feature</li>
            <li className="text-white">A feature</li>
            <li className="text-white">A feature</li>
          </ul>
        </div>
      </section> */}
      <section className="flex flex-col justify-center items-center w-full bg-darkPurple py-8">
        <h2 className="text-neutral-100 text-4xl font-bold my-8">CHARACTERS</h2>
        <div className="grid xl:grid-cols-2 w-full">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-neutral-100 text-4xl font-bold">Bix</h3>
            <p className="text-neutral-100 text-2xl">Main ability: Force</p>
            <p className="text-neutral-100 text-2xl">Combat type: Melee</p>
            <div className="flex flex-col md:flex-row my-4 items-center justify-center gap-4">
              {bixImages.map((image, index) => (
                <span key={image.url.split('.')[0]}>
                  <div className="my-4">
                    <Image
                      onClick={() => openSlider(index, 0)}
                      className="cursor-pointer select-none"
                      src={image.url}
                      width={300}
                      height={300}
                      alt={image.description}
                    />
                  </div>
                  <p className="text-center">{image.description}</p>
                </span>
              ))}
              <FullScreenSlider
                sizes="h-[180px] w-[180px] sm:h-[270px] sm:w-[270px] md:h-[360px] md:w-[360px] lg:h-[540px] lg:w-[540px] xl:h-[720px] xl:w-[720px]"
                images={bixImages}
                isSliderOpen={currentSlider === 0}
                closeSlider={closeSlider}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-neutral-100 text-4xl font-bold">Allura</h3>
            <p className="text-neutral-100 text-2xl">Main ability: Hacking</p>
            <p className="text-neutral-100 text-2xl">Combat type: Ranged</p>
            <div className="flex flex-col md:flex-row my-4 items-center justify-center gap-4">
              {alluraImages.map((image, index) => (
                <span key={image.url.split('.')[0]}>
                  <div className="my-4">
                    <Image
                      onClick={() => openSlider(index, 1)}
                      className="cursor-pointer select-none"
                      src={image.url}
                      width={300}
                      height={300}
                      alt={image.description}
                    />
                  </div>
                  <p className="text-center">{image.description}</p>
                </span>
              ))}
              <FullScreenSlider
                sizes="h-[180px] w-[180px] sm:h-[270px] sm:w-[270px] md:h-[360px] md:w-[360px] lg:h-[540px] lg:w-[540px] xl:h-[720px] xl:w-[720px]"
                images={alluraImages}
                isSliderOpen={currentSlider === 1}
                closeSlider={closeSlider}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center px-4 py-8 w-full bg-royalPurple">
        <h2 className="text-neutral-100 text-4xl font-bold my-8">MUSIC</h2>
        <p className="text-white text-lg">
          Our team is collaborating with Escola Superior de Música de Catalunya
          - ESMUC, that composed Starfall Rebellion OST
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-8 py-8">
          {songs.map((song) => {
            return (
              <React.Fragment key={song.id}>
                <Song title={song.title} filename={song.file} />
              </React.Fragment>
            );
          })}
        </div>
      </section>
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
