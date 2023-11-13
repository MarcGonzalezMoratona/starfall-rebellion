import { posts } from './data/posts';

const URL = 'https://starfall-rebellion.vercel.app';

export default async function sitemap() {
  const postRoutes = posts.map(({ slug }) => ({
    url: `${URL}/news/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const routes = [
    '',
    '/about',
    '/team',
    '/media',
    '/press',
    '/news',
    '/contact',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...postRoutes];
}
