import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './button';

type PostProps = {
  data: {
    id: number;
    title: string;
    alt?: string;
    caption?: string;
    paragraphs: {
      heading?: string;
      content: string;
      image?: string;
    }[];
  };
  locale?: string;
};

export default function Post({ data, locale }: PostProps) {
  return (
    <Link href={`/news/${data.id}`} locale={locale}>
      <article
        className="mx-4 my-4 flex flex-col overflow-hidden rounded-md pt-4 
      shadow-md hover:shadow-lg bg-zinc-950 hover:outline-amber hover:outline transition-all duration-150"
      >
        <div className="relative h-48 w-full sm:h-64">
          <Image
            src={`${data.caption ? `/blog/${data.caption}` : '/horizons.svg'}`}
            alt={data.alt || 'horizons logo'}
            fill
            className="object-contain"
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
            <div className="my-4">
              <p className="text-white">{data.paragraphs[0].content}</p>
            </div>
          </div>
          <Button
            icon={<FontAwesomeIcon icon={faArrowRight} className="ml-3" />}
          >
            READ MORE
          </Button>
        </section>
      </article>
    </Link>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { locale },
  };
};
