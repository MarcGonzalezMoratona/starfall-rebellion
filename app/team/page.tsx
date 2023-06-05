'use client';
import { useEffect } from 'react';
import { usePageHandler } from '../hooks/usePage';
import ProfilePicture from '../components/profile-picture';
import { team } from '../data/team';

export default function Team() {
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('team');
  });

  return (
    <main className="bg-zinc-900 w-full flex flex-col items-center justify-center">
      <h1 className="mt-8 mb-4  text-2xl sm:text-4xl text-white font-semibold">
        THE TEAM
      </h1>
      <ul className="mx-2 my-8 grid grid-cols-2 gap-4 sm:mx-8 sm:grid-cols-3 sm:gap-8 md:gap-12 xl:grid-cols-4">
        {team.partners.map((partner, index) => {
          return (
            <ProfilePicture
              partner={partner}
              index={index}
              key={partner.name}
            />
          );
        })}
      </ul>
    </main>
  );
}
