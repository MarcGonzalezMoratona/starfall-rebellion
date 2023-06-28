'use client';
import FullPost from '@/app/components/full-post';
import { posts } from '@/app/data/posts';
import { usePageHandler } from '@/app/hooks/usePage';
import React, { useEffect } from 'react';

export default function News() {
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('news');
  });

  return (
    <main className="bg-zinc-900 w-full flex flex-col gap-8 items-center justify-center">
      <FullPost data={posts} />
    </main>
  );
}
