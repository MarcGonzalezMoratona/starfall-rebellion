import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './button';

type FullPostProps = {
  data: {
    id: number;
    title: string;
    subtitle: string;
    caption?: string;
    alt?: string;
    paragraphs: {
      heading?: string;
      content: string;
      image?: string;
      document?: string;
      documentCTA?: string;
      video?: string;
      link?: string;
      linkCaption?: string;
      language?: string;
    }[];
  }[];
};

const FullPost = ({ data }: FullPostProps) => {
  const id = 1;

  return (
    <section className="my-8 flex flex-col w-1/2 xl:gap-8">
      <article className="col-span-2 text-white">
        <h1 className="my-4 text-2xl font-semibold text-center xl:text-4xl">
          {data[id].title}
        </h1>
        <h2 className="text-xl">{data[id].subtitle}</h2>
        {data[id].paragraphs.map((paragraph, index) => {
          return (
            <React.Fragment key={`paragraph ${index}`}>
              {paragraph.heading && (
                <div className="my-4 text-lg font-medium">
                  {paragraph.heading}
                </div>
              )}
              <p className="my-4">{paragraph.content}</p>
              {paragraph.link && (
                <span className="my-4">
                  <Link
                    href={paragraph.link}
                    className="text-primary-400 dark:text-secondary-400"
                  >
                    {paragraph.linkCaption || paragraph.link}
                  </Link>
                </span>
              )}
              {paragraph.image && (
                <div className="relative flex h-96 justify-center lg:my-8">
                  <Image
                    src={`/blog/${paragraph.image}`}
                    alt={data[id].alt || 'horizons logo'}
                    fill
                    className="object-contain select-none"
                    sizes="(min-width: 320px) 640px, (min-width: 640px) 720px (min-width: 768px) 1080px"
                  />
                </div>
              )}
              {paragraph.video && (
                <div className="relative my-6 w-full pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 h-full w-full"
                    src={paragraph.video}
                    allowFullScreen
                  />
                </div>
              )}
              {paragraph.document && (
                <>
                  <div className="hidden h-screen sm:block">
                    <embed
                      className="h-full w-full"
                      src={`/documents/${paragraph.document}`}
                      type="application/pdf"
                    />
                  </div>
                  <div className="my-4 flex justify-center rounded-sm py-3 text-neutral-100 dark:bg-neutral-900 sm:hidden lg:mx-40">
                    <Link
                      href={`/documents/${paragraph.document}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        icon={
                          <FontAwesomeIcon
                            icon={faArrowDown}
                            className="ml-3"
                          />
                        }
                      >
                        {paragraph.documentCTA}
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </React.Fragment>
          );
        })}
      </article>
    </section>
  );
};

export default FullPost;
