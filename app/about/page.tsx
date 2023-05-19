'use client';
import { HorizonsWhite } from '../components/logos/horizons-white';
import { useEffect } from 'react';
import { usePageHandler } from '../hooks/usePage';
import SocialNetworks from '../components/social-networks';
import { useDevice } from '../hooks/useDevice';
import socialNetworks from '../data/social-networks';
import CTA from '../components/cta';
import Image from 'next/image';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function About() {
  const PageHandler = usePageHandler();
  const device = useDevice();
  const isMobile = device === 'mobile';
  const isTablet = device === 'tablet';

  useEffect(() => {
    PageHandler('about');
  });

  return (
    <main className="bg-zinc-900 w-full flex flex-col items-center justify-center">
      <section className=" w-full md:w-2/3">
        <div className="sm:flex-row flex-col flex gap-4 sm:gap-8 xl:gap-12 items-center justify-center font-ethnocentric h-48">
          <HorizonsWhite height={140} width={140} />
          <p className="text-white text-2xl sm:text-4xl text-center">
            HORIZONS GAMES
          </p>
        </div>
        <div className="flex xl:flex-row flex-col xl:my-8 gap-16">
          <div className="flex flex-col flex-1">
            <h1 className="text-white text-2xl sm:text-3xl text-center my-4 font-medium">
              ABOUT
            </h1>
            <p className="text-white my-4 mx-4">
              Established in 1984, Naughty Dog is one of the most successful and
              prolific game development studios in the world and a flagship
              first-party studio within PlayStation Studios. From creating the
              iconic Crash Bandicoot and Jak and Daxter series to modern
              franchises like Uncharted and The Last of Us, Naughty Dog is
              responsible for some of the most critically acclaimed and
              commercially successful games on Sony’s PlayStation platforms.
              Through its use of cutting-edge technology and evocative,
              character-driven storytelling, Naughty Dog has received hundreds
              of industry and media awards, while developing a passionate fan
              base of millions of players around the globe.
            </p>
            <p className="text-white my-4 mx-4">
              Naughty Dog’s recent releases include 2016’s Uncharted 4: A
              Thief’s End, winner of numerous Game of the Year awards, and
              2017’s Uncharted: The Lost Legacy—a new standalone adventure in
              the Uncharted series. By December 2017, total global sales for the
              Uncharted franchise surpassed 41.7 million copies sold.
            </p>
            <p className="text-white my-4 mx-4">
              Naughty Dog's latest title is The Last of Us Part II, the
              much-anticipated sequel to 2013’s The Last of Us, which is
              available now for PlayStation 4. Naughty Dog is a wholly-owned
              subsidiary of Sony Interactive Entertainment located in Santa
              Monica, California. For more information, follow us on Twitter,
              Facebook, or Instagram.
            </p>
          </div>
          <div className="flex justify-center xl:flex-1 xl:relative mx-4 flex-col items-center xl:items-stretch xl:flex-row">
            <Image
              src="/horizons-team.jpg"
              alt=""
              width={600}
              height={350}
              className="xl:absolute xl:top-0 xl:bottom-0 xl:my-auto rounded-xl"
            />
            <div className="xl:flex xl:items-end my-4 xl:my-16">
              <CTA
                label="MEET THE TEAM"
                href="https://horizons-games.vercel.app/team"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="my-8 hidden lg:block">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="horizons_games"
          theme="dark"
          options={{
            width: 1000,
            height: 1200,
          }}
        />
      </section>
      <section className="my-8 lg:hidden">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="horizons_games"
          theme="dark"
          options={{
            width: 300,
            height: 600,
          }}
        />
      </section>
      <section className="bg-black w-full flex items-center justify-center gap-4 h-16 sm:h-32">
        <SocialNetworks
          networks={socialNetworks}
          size={isMobile ? 'sm' : isTablet ? 'md' : 'lg'}
        />
      </section>
    </main>
  );
}
