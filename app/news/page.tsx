'use client';
import React, { useEffect } from 'react';
import { usePageHandler } from '../hooks/usePage';
import Post from '../components/post';
import { posts } from '../../app/data/posts';

export default function News() {
  const PageHandler = usePageHandler();
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  useEffect(() => {
    PageHandler('news');
  });

  return (
    <main className="bg-zinc-900 w-full flex flex-col gap-8 items-center justify-center">
      <h1 className="mt-8 mb-4 text-2xl sm:text-4xl text-white font-semibold">
        LATEST NEWS
      </h1>
      <section className="flex flex-col gap-8 sm:grid sm:grid-cols-3 lg:w-5/6">
        {sortedPosts.map((post) => {
          return (
            <React.Fragment key={post.id}>
              <Post data={post} />
            </React.Fragment>
          );
        })}
      </section>
    </main>
  );
}
