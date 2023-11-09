import Image from 'next/image';
import Link from 'next/link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './button';

type PostProps = {
  data: {
    slug: string;
    id: number;
    title: string;
    subtitle: string;
    alt?: string;
    caption?: string;
  };
};

export default function Post({ data }: PostProps) {
  return (
    <Link href={`/news/${data.slug}`}>
      <article
        className="mx-4 my-4 flex flex-col overflow-hidden rounded-md pt-4 max-h-[500px]
     bg-zinc-950 hover:outline-amber hover:outline transition-all duration-300"
      >
        <div className="relative h-48 w-full sm:h-64">
          <Image
            src={`${data.caption ? `/${data.caption}` : '/horizons.svg'}`}
            alt={data.alt || 'horizons logo'}
            fill
            className="object-contain select-none"
            sizes="(min-width: 320px) 720px"
          />
        </div>
        <section
          className="m-8 flex flex-col justify-between border-t-4 
        border-amber pt-4 h-auto"
        >
          <div>
            <h1 className="my-6 text-xl font-medium text-white">
              {data.title}
            </h1>
            <div className="my-4 text-lg">
              <h2 className="text-white">{data.subtitle}</h2>
            </div>
          </div>
          <Button
            icon={
              <FontAwesomeIcon icon={faArrowRight} className="ml-3 h-5 w-5" />
            }
          >
            READ MORE
          </Button>
        </section>
      </article>
    </Link>
  );
}
