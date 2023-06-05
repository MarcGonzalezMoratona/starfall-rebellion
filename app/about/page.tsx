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
        <a
          href="https://horizons-games.vercel.app"
          className="sm:flex-row flex-col flex gap-4 sm:gap-8 xl:gap-12 items-center justify-center font-ethnocentric h-48"
        >
          <HorizonsWhite height={140} width={140} />
          <p className="text-white text-2xl sm:text-4xl text-center">
            HORIZONS GAMES
          </p>
        </a>
        <div className="flex xl:flex-row flex-col xl:my-8 gap-16">
          <div className="flex flex-col flex-1">
            <h1 className="text-white text-2xl sm:text-3xl text-center my-4 font-medium">
              ABOUT
            </h1>
            <p className="text-white my-4 mx-4">
              {`Horizons Games is an ambitious video game studio established in 2023 by a group of students 
              at the UPC School in Barcelona that are making their debut on the games industry.`}
            </p>
            <p className="text-white my-4 mx-4">
              {`Our team consists of passionate software engineers and talented designers dedicated to explore 
              new technologies and techniques to deliver a revolutionary gaming platform. 
              Our goal is to create a flexible and powerful game engine that allows developers to bring 
              their visions to life without restrictions. We have set ourselves the challenge of 
              building a game engine completely from scratch, which we called Axolotl Engine.`}
            </p>
            <p className="text-white my-4 mx-4">
              {`Horizons Games' latest title is Lego Star Wars: Starfall Rebellion, 
              a two-player hack and slash game insipired by Lego Star Wars. Join us on this exciting journey 
              as we build the future of games from the ground up! For more information, follow us on 
              Twitter, YouTube, Tik Tok or Instagram.`}
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
            <div className="xl:bottom-0 xl:absolute xl:flex xl:items-end my-4 xl:my-0">
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
