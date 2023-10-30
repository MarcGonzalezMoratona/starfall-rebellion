// 'use client';
// import FullPost from '@/app/components/full-post';
import { posts } from '@/app/data/posts';
// import { usePageHandler } from '@/app/hooks/usePage';
import React /*, { useEffect } */ from 'react';
import { join } from 'path';
import markdownToHtml from '@/app/lib/markdownToHtml';
import fs from 'fs';
import { Metadata } from 'next';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((post) => post.slug === params.slug);
  if (!post)
    return {
      title: 'LEGO Star Wars: Starfall Rebellion',
    };

  return {
    title: post?.title,
  };
}

export default async function News({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) return notFound();

  // const PageHandler = usePageHandler();
  const postsDirectory = join(process.cwd(), `app/data/${params.slug}.md`);
  const fileContents = fs.readFileSync(postsDirectory, 'utf8');
  const { data, content } = matter(fileContents);
  const postContent = await markdownToHtml(content);

  // useEffect(() => {
  //   PageHandler('news');
  // });

  return (
    <main className="min-h-screen bg-zinc-900 w-full flex flex-col gap-8 items-center justify-center">
      {/* <FullPost data={posts} /> */}
      <div
        className="markdown w-5/6 md:w-2/3"
        dangerouslySetInnerHTML={{ __html: postContent }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  return posts.map(({ slug }) => ({
    slug,
  }));
}
