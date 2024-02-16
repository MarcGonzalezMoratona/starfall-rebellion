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
import { topManImages } from '../app/data/topman-images';
import { venomiteImages } from '../app/data/venomite-images';

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
        <p className="text-white sm:text-2xl">
          ACTION-ADVENTURE · FREE TO PLAY
        </p>
        <CTA
          label="DOWNLOAD"
          href="https://github.com/Horizons-Games/Axolotl-Engine/releases/download/v1.0/Starfall.Rebellion.1.0.zip"
          className="hidden sm:block"
          size="xl"
          external
        />
        <Link href="#about">
          <Image
            src="/arrow.png"
            width={120}
            height={68}
            alt="Arrow down to the next section"
            className="animate-pulse"
          />
        </Link>
      </section>
      <div
        className="flex w-5/6 h-8 bg-no-repeat bg-center bg-[length:315px_14px] sm:bg-[length:1062px_27px]
      bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnYAAAAbBAMAAAADj99nAAAAG1BMVEUP9fUP+fkR+fkO+/lHcEwM/PwP+PcR+vkR+filiOImAAAACHRSTlMKGyVAABIuunN9bjEAAAIASURBVGje7VmxjtswDH0DCXSlAH+ADdQ/UOBmDuxOF2DROYfmGzp2KdrPvkGWz9fcGQcnaVggb3BigRKfnijbImF37AXuEty1y6od7Rxcbzy5S/mnTe0UGyDshOIcLArgNv635r/STi/l5pLQutz7l+56IHrWrtJzwFcGzLUNzgB43ZfrxZdWbz25/meA6wBYLE7xYkw4/2WlZmaqr9j+E/8b86/ioYYdcySDO0BmBqSjFjFTMzMlRMgVMJ3TORxqBuWYbuJ/mxpojjtw9VJk9VNEpBcp0rcuRaQ0m1WbSLVc38orpiKlrFrL2rCc+pcAQGCW2/g/nb+I9PWuq+tqZooQKUMuiHRMBGBKR20QCaBqB/7wJyF+O4DP/CMjt18t7oBvObVzVURK7X56i7sIGcZjLgy9OAAOKUMyaodh2bOqPCXVjgghZcynXRfUnndZtdOUcTcO0s17VhFfj5/y4eCAIsbHfNSO37k97/DlmI7gw8PBoQCP+db18fixvWeJ833f9SIdAFWfRIZ03Hx5z8KvdXo5A507EYEjHzUJb2cyVXhM+aQDzAhXOmufwUzCnWjJo8Az5lFmaum48XMeZcmRZUww2hu5t5uBmefU4pw3TigezUn3vCntVq9IR5BaoUazcaO6Y1/UyfS9tSV6Z21K24XeHkL/Y//3+ux+PAGpfrq6uTAleAAAAABJRU5ErkJggg==)]"
      />
      <section
        className="w-full flex flex-col justify-center items-center py-8 scroll-mt-12"
        id="about"
      >
        <h2 className="text-neutral-100 text-3xl sm:text-4xl font-semibold my-8">
          ABOUT THE GAME
        </h2>
        <div className="flex w-full justify-center items-center">
          <div className="flex flex-col w-5/6 xl:w-1/2 py-4 xl:py-8 gap-8">
            <p className="text-neutral-100 text-lg sm:text-2xl text-center sm:text-left">
              {`Starfall Rebellion is an action-adventure game, set in the Star Wars universe, inspired by the Lego Star Wars games.
            Players can control two characters with unique abilities, 
            navigating two immersive levels with Star Wars-inspired challenges.`}
            </p>
            <p className="text-neutral-100 text-lg sm:text-2xl text-center sm:text-left">
              {`The grand finale features a formidable final boss with three challenging phases.
            Join Bix, a force-sensitive pirate, as she turns against a sinister galactic organization which she used to work for.
            Her quest for change leads to an unlikely alliance with Allura, a dedicated rebel.`}
            </p>
          </div>
        </div>
      </section>
      <div
        className="flex w-5/6 h-8 bg-no-repeat bg-center bg-[length:315px_14px] sm:bg-[length:1062px_27px]
      bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnYAAAAbBAMAAAADj99nAAAAG1BMVEUP9fUP+fkR+fkO+/lHcEwM/PwP+PcR+vkR+filiOImAAAACHRSTlMKGyVAABIuunN9bjEAAAIASURBVGje7VmxjtswDH0DCXSlAH+ADdQ/UOBmDuxOF2DROYfmGzp2KdrPvkGWz9fcGQcnaVggb3BigRKfnijbImF37AXuEty1y6od7Rxcbzy5S/mnTe0UGyDshOIcLArgNv635r/STi/l5pLQutz7l+56IHrWrtJzwFcGzLUNzgB43ZfrxZdWbz25/meA6wBYLE7xYkw4/2WlZmaqr9j+E/8b86/ioYYdcySDO0BmBqSjFjFTMzMlRMgVMJ3TORxqBuWYbuJ/mxpojjtw9VJk9VNEpBcp0rcuRaQ0m1WbSLVc38orpiKlrFrL2rCc+pcAQGCW2/g/nb+I9PWuq+tqZooQKUMuiHRMBGBKR20QCaBqB/7wJyF+O4DP/CMjt18t7oBvObVzVURK7X56i7sIGcZjLgy9OAAOKUMyaodh2bOqPCXVjgghZcynXRfUnndZtdOUcTcO0s17VhFfj5/y4eCAIsbHfNSO37k97/DlmI7gw8PBoQCP+db18fixvWeJ833f9SIdAFWfRIZ03Hx5z8KvdXo5A507EYEjHzUJb2cyVXhM+aQDzAhXOmufwUzCnWjJo8Az5lFmaum48XMeZcmRZUww2hu5t5uBmefU4pw3TigezUn3vCntVq9IR5BaoUazcaO6Y1/UyfS9tSV6Z21K24XeHkL/Y//3+ux+PAGpfrq6uTAleAAAAABJRU5ErkJggg==)]"
      />
      <section className="w-full flex flex-col justify-center items-center py-8">
        <h2 className="text-neutral-100 text-3xl sm:text-4xl font-semibold my-8">
          LATEST NEWS
        </h2>
        <div className="flex w-full justify-center items-center gap-16">
          <div className="flex flex-col justify-center items-center sm:grid xl:grid-cols-3 w-5/6">
            {sortedPosts.slice(0, 3).map((post) => {
              return (
                <React.Fragment key={post.id}>
                  <MiniPost data={post} />
                </React.Fragment>
              );
            })}
          </div>
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
      <div
        className="flex w-full h-8 bg-no-repeat bg-center bg-[length:315px_14px] sm:bg-[length:1062px_27px]
      bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnYAAAAbBAMAAAADj99nAAAAG1BMVEUP9fUP+fkR+fkO+/lHcEwM/PwP+PcR+vkR+filiOImAAAACHRSTlMKGyVAABIuunN9bjEAAAIASURBVGje7VmxjtswDH0DCXSlAH+ADdQ/UOBmDuxOF2DROYfmGzp2KdrPvkGWz9fcGQcnaVggb3BigRKfnijbImF37AXuEty1y6od7Rxcbzy5S/mnTe0UGyDshOIcLArgNv635r/STi/l5pLQutz7l+56IHrWrtJzwFcGzLUNzgB43ZfrxZdWbz25/meA6wBYLE7xYkw4/2WlZmaqr9j+E/8b86/ioYYdcySDO0BmBqSjFjFTMzMlRMgVMJ3TORxqBuWYbuJ/mxpojjtw9VJk9VNEpBcp0rcuRaQ0m1WbSLVc38orpiKlrFrL2rCc+pcAQGCW2/g/nb+I9PWuq+tqZooQKUMuiHRMBGBKR20QCaBqB/7wJyF+O4DP/CMjt18t7oBvObVzVURK7X56i7sIGcZjLgy9OAAOKUMyaodh2bOqPCXVjgghZcynXRfUnndZtdOUcTcO0s17VhFfj5/y4eCAIsbHfNSO37k97/DlmI7gw8PBoQCP+db18fixvWeJ833f9SIdAFWfRIZ03Hx5z8KvdXo5A507EYEjHzUJb2cyVXhM+aQDzAhXOmufwUzCnWjJo8Az5lFmaum48XMeZcmRZUww2hu5t5uBmefU4pw3TigezUn3vCntVq9IR5BaoUazcaO6Y1/UyfS9tSV6Z21K24XeHkL/Y//3+ux+PAGpfrq6uTAleAAAAABJRU5ErkJggg==)]"
      />
      <section className="flex flex-col justify-center items-center w-full py-8">
        <h2 className="text-neutral-100 text-3xl sm:text-4xl font-semibold my-8">
          CHARACTERS
        </h2>
        <div className="grid xl:grid-cols-2 w-full">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-neutral-100 text-3xl sm:text-4xl font-semibold">
              Bix
            </h3>
            <p className="text-neutral-100 text-xl">Main ability: Force</p>
            <p className="text-neutral-100 text-xl">Combat type: Melee</p>
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
            <h3 className="text-neutral-100 text-3xl sm:text-4xl font-semibold">
              Allura
            </h3>
            <p className="text-neutral-100 text-xl">Main ability: Hacking</p>
            <p className="text-neutral-100 text-xl">Combat type: Ranged</p>
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
      <div
        className="flex w-full h-8 bg-no-repeat bg-center bg-[length:315px_14px] sm:bg-[length:1062px_27px]
      bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnYAAAAbBAMAAAADj99nAAAAG1BMVEUP9fUP+fkR+fkO+/lHcEwM/PwP+PcR+vkR+filiOImAAAACHRSTlMKGyVAABIuunN9bjEAAAIASURBVGje7VmxjtswDH0DCXSlAH+ADdQ/UOBmDuxOF2DROYfmGzp2KdrPvkGWz9fcGQcnaVggb3BigRKfnijbImF37AXuEty1y6od7Rxcbzy5S/mnTe0UGyDshOIcLArgNv635r/STi/l5pLQutz7l+56IHrWrtJzwFcGzLUNzgB43ZfrxZdWbz25/meA6wBYLE7xYkw4/2WlZmaqr9j+E/8b86/ioYYdcySDO0BmBqSjFjFTMzMlRMgVMJ3TORxqBuWYbuJ/mxpojjtw9VJk9VNEpBcp0rcuRaQ0m1WbSLVc38orpiKlrFrL2rCc+pcAQGCW2/g/nb+I9PWuq+tqZooQKUMuiHRMBGBKR20QCaBqB/7wJyF+O4DP/CMjt18t7oBvObVzVURK7X56i7sIGcZjLgy9OAAOKUMyaodh2bOqPCXVjgghZcynXRfUnndZtdOUcTcO0s17VhFfj5/y4eCAIsbHfNSO37k97/DlmI7gw8PBoQCP+db18fixvWeJ833f9SIdAFWfRIZ03Hx5z8KvdXo5A507EYEjHzUJb2cyVXhM+aQDzAhXOmufwUzCnWjJo8Az5lFmaum48XMeZcmRZUww2hu5t5uBmefU4pw3TigezUn3vCntVq9IR5BaoUazcaO6Y1/UyfS9tSV6Z21K24XeHkL/Y//3+ux+PAGpfrq6uTAleAAAAABJRU5ErkJggg==)]"
      />
      <section className="flex flex-col justify-center items-center w-full py-8">
        <h2 className="text-neutral-100 text-3xl sm:text-4xl font-semibold my-8">
          ENEMIES
        </h2>
        <div className="grid xl:grid-cols-2 w-full">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-neutral-100 text-3xl sm:text-4xl font-semibold">
              Top Man
            </h3>
            <p className="text-neutral-100 text-xl">Combat type: Melee</p>
            <div className="flex flex-col md:flex-row my-4 items-center justify-center gap-4">
              {topManImages.map((image, index) => (
                <span key={image.url.split('.')[0]}>
                  <div className="my-4">
                    <Image
                      onClick={() => openSlider(index, 2)}
                      className="cursor-pointer select-none"
                      src={image.url}
                      width={300}
                      height={300}
                      alt={image.description}
                    />
                  </div>
                </span>
              ))}
              <FullScreenSlider
                sizes="h-[180px] w-[180px] sm:h-[270px] sm:w-[270px] md:h-[360px] md:w-[360px] lg:h-[540px] lg:w-[540px] xl:h-[720px] xl:w-[720px]"
                images={topManImages}
                isSliderOpen={currentSlider === 2}
                closeSlider={closeSlider}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-neutral-100 text-3xl sm:text-4xl font-semibold">
              Venomites
            </h3>
            <p className="text-neutral-100 text-xl">Combat type: Ranged</p>
            <div className="flex flex-col md:flex-row my-4 items-center justify-center gap-4">
              {venomiteImages.map((image, index) => (
                <span key={image.url.split('.')[0]}>
                  <div className="my-4">
                    <Image
                      onClick={() => openSlider(index, 3)}
                      className="cursor-pointer select-none"
                      src={image.url}
                      width={300}
                      height={300}
                      alt={image.description}
                    />
                  </div>
                </span>
              ))}
              <FullScreenSlider
                sizes="h-[180px] w-[180px] sm:h-[270px] sm:w-[270px] md:h-[360px] md:w-[360px] lg:h-[540px] lg:w-[540px] xl:h-[720px] xl:w-[720px]"
                images={venomiteImages}
                isSliderOpen={currentSlider === 3}
                closeSlider={closeSlider}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center xl:gap-8 py-8 bg-[#0A343C]">
        <h2 className="text-neutral-100 text-3xl sm:text-4xl font-semibold my-8">
          HAND OF DOMINION
        </h2>
        <div className="flex flex-col xl:flex-row justify-around items-center w-5/6 xl:w-2/3 py-4 xl:py-16">
          <div className="text-neutral-100 text-lg sm:text-2xl font-medium">
            <p className="xl:w-2/3 mb-4 text-center sm:text-left">
              {`Hand of dominion is a massive fortress led by TopMan, the Evil Corporation's leader,
               that looms ominously over Coltran landscape.`}
            </p>
            <p className="xl:w-2/3 mt-4 mb-8 text-center sm:text-left">
              {`It is guarded by the Venomites, the Corporation's soldiers, 
               responsible for protecting its assets and enforcing its interests throughout the galaxy.`}
            </p>
          </div>
          <Image
            src="/hand-of-dominion.png"
            alt="Hand of dominion logo"
            height={300}
            width={300}
            className="animate-pulse"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center px-4 py-8 w-full">
        <h2 className="text-neutral-100 text-3xl sm:text-4xl font-semibold my-8">
          MUSIC
        </h2>
        <p className="text-white text-lg sm:text-2xl font-medium text-center sm:text-left">
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
      <div
        className="flex w-full h-8 bg-no-repeat bg-center bg-[length:315px_14px] sm:bg-[length:1062px_27px]
      bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnYAAAAbBAMAAAADj99nAAAAG1BMVEUP9fUP+fkR+fkO+/lHcEwM/PwP+PcR+vkR+filiOImAAAACHRSTlMKGyVAABIuunN9bjEAAAIASURBVGje7VmxjtswDH0DCXSlAH+ADdQ/UOBmDuxOF2DROYfmGzp2KdrPvkGWz9fcGQcnaVggb3BigRKfnijbImF37AXuEty1y6od7Rxcbzy5S/mnTe0UGyDshOIcLArgNv635r/STi/l5pLQutz7l+56IHrWrtJzwFcGzLUNzgB43ZfrxZdWbz25/meA6wBYLE7xYkw4/2WlZmaqr9j+E/8b86/ioYYdcySDO0BmBqSjFjFTMzMlRMgVMJ3TORxqBuWYbuJ/mxpojjtw9VJk9VNEpBcp0rcuRaQ0m1WbSLVc38orpiKlrFrL2rCc+pcAQGCW2/g/nb+I9PWuq+tqZooQKUMuiHRMBGBKR20QCaBqB/7wJyF+O4DP/CMjt18t7oBvObVzVURK7X56i7sIGcZjLgy9OAAOKUMyaodh2bOqPCXVjgghZcynXRfUnndZtdOUcTcO0s17VhFfj5/y4eCAIsbHfNSO37k97/DlmI7gw8PBoQCP+db18fixvWeJ833f9SIdAFWfRIZ03Hx5z8KvdXo5A507EYEjHzUJb2cyVXhM+aQDzAhXOmufwUzCnWjJo8Az5lFmaum48XMeZcmRZUww2hu5t5uBmefU4pw3TigezUn3vCntVq9IR5BaoUazcaO6Y1/UyfS9tSV6Z21K24XeHkL/Y//3+ux+PAGpfrq6uTAleAAAAABJRU5ErkJggg==)]"
      />
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
