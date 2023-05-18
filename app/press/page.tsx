'use client';
import Link from 'next/link';
import { team } from '../data/team';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePageHandler } from '../hooks/usePage';
import { useDevice } from '../hooks/useDevice';
import FullScreenSlider from '../components/fullscreen-slider';
import { conceptArt } from '../data/concept-art';

export default function Press() {
  const [selected, setSelected] = useState('');
  const PageHandler = usePageHandler();
  const device = useDevice();
  const isMobile = device === 'mobile';
  const isTablet = device === 'tablet';

  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openSlider = (index: any) => {
    setCurrentImageIndex(index);
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  useEffect(() => {
    PageHandler('press');
  });

  return (
    <main className="bg-zinc-900 w-full flex flex-col gap-4 items-center justify-center scroll-smooth">
      <section className="relative">
        <Image src="/presskit-header.jpg" alt="" width={1920} height={600} />
        <Image
          src="/temtem.png"
          alt=""
          width={isMobile ? 140 : isTablet ? 280 : 560}
          height={isMobile ? 59 : isTablet ? 118 : 236}
          className="absolute inset-0 m-auto"
        />
      </section>
      <div className="flex w-5/6 sm:w-2/3 py-12">
        <nav className="shrink-0 sticky py-4 mr-16 top-0 self-start lg:block hidden">
          <ul>
            <li
              className={`text-lg hover:text-amber ${
                selected === 'factsheet'
                  ? 'bg-amber text-black font-semibold hover:text-black'
                  : 'text-white'
              }`}
              onClick={() => setSelected('factsheet')}
            >
              <a className="w-full block px-4 py-1" href="#factsheet">
                Factsheet
              </a>
            </li>
            <li
              className={`text-lg hover:text-amber ${
                selected === 'description'
                  ? 'bg-amber text-black font-semibold hover:text-black'
                  : 'text-white'
              }`}
              onClick={() => setSelected('description')}
            >
              <a className="w-full block px-4 py-1" href="#description">
                Description
              </a>
            </li>
            <li
              className={`text-lg hover:text-amber ${
                selected === 'history'
                  ? 'bg-amber text-black font-semibold hover:text-black'
                  : 'text-white'
              }`}
              onClick={() => setSelected('history')}
            >
              <a className="w-full block px-4 py-1" href="#history">
                History
              </a>
            </li>
            <li
              className={` text-lg hover:text-amber ${
                selected === 'features'
                  ? 'bg-amber text-black font-semibold hover:text-black'
                  : 'text-white'
              }`}
              onClick={() => setSelected('features')}
            >
              <a className="w-full block px-4 py-1" href="#features">
                Features
              </a>
            </li>
            <li
              className={`text-lg hover:text-amber ${
                selected === 'videos'
                  ? 'bg-amber text-black font-semibold hover:text-black'
                  : 'text-white'
              }`}
              onClick={() => setSelected('videos')}
            >
              <a className="w-full block px-4 py-1" href="#videos">
                Videos
              </a>
            </li>
            <li
              className={`text-lg hover:text-amber ${
                selected === 'images'
                  ? 'bg-amber text-black font-semibold hover:text-black'
                  : 'text-white'
              }`}
              onClick={() => setSelected('images')}
            >
              <a className="w-full block px-4 py-1" href="#images">
                Images
              </a>
            </li>
            <li
              className={`text-lg hover:text-amber ${
                selected === 'logos-icons'
                  ? 'bg-amber text-black font-semibold hover:text-black'
                  : 'text-white'
              }`}
              onClick={() => setSelected('logos-icons')}
            >
              <a className="w-full block px-4 py-1" href="#logos-icons">
                Logos & Icons
              </a>
            </li>
            <li
              className={`text-lg hover:text-amber ${
                selected === 'about'
                  ? 'bg-amber text-black font-semibold hover:text-black'
                  : 'text-white'
              }`}
              onClick={() => setSelected('about')}
            >
              <a className="w-full block px-4 py-1" href="#about">
                About Horizons
              </a>
            </li>
            <li
              className={`text-lg hover:text-amber ${
                selected === 'credits'
                  ? 'bg-amber text-black font-semibold hover:text-black'
                  : 'text-white'
              }`}
              onClick={() => setSelected('credits')}
            >
              <a className="w-full block px-4 py-1" href="#credits">
                Credits
              </a>
            </li>
            <li
              className={`text-lg hover:text-amber ${
                selected === 'contact'
                  ? 'bg-amber text-black font-semibold hover:text-black'
                  : 'text-white'
              }`}
              onClick={() => setSelected('contact')}
            >
              <a className="w-full block px-4 py-1" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <section className="w-full my-4">
            <article className="text-white mx-auto ">
              <h1 className="font-extrabold text-3xl sm:text-5xl my-4">
                STARFALL REBELLION PRESSKIT
              </h1>
              <h2 className="text-xl font-semibold sm:text-2xl" id="factsheet">
                FACTSHEET:
              </h2>
              <ul className="flex flex-col gap-2">
                <li className="border-b border-white py-2">
                  <p className="font-semibold">Developer:</p>
                  <p>Horizons Games</p>
                </li>
                <li className="border-b border-white py-2">
                  <p className="font-semibold">Location:</p>
                  <p>Barcelona, Spain</p>
                </li>
                <li className="border-b border-white py-2">
                  <p className="font-semibold">Website:</p>
                  <Link
                    href="https://starfall-rebellion.vercel.app"
                    className="underline text-amber font-semibold hover:text-white"
                  >
                    starfall-rebellion.vercel.app
                  </Link>
                </li>
                <li className="border-b border-white py-2">
                  <p className="font-semibold">Regular price:</p>
                  <p>Free</p>
                </li>
                <li className="border-b border-white py-2">
                  <p className="font-semibold">Platforms:</p>
                  <p>PC (Windows)</p>
                </li>
                <li className="border-b border-white py-2">
                  <p className="font-semibold">Release date:</p>
                  <p>November 10th, 2023</p>
                </li>
              </ul>
            </article>
          </section>
          <section className="w-full my-4">
            <article className="text-white mx-auto ">
              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl font-semibold sm:text-2xl scroll-mt-12 mt-4"
                  id="description"
                >
                  DESCRIPTION:
                </h2>
                <div className="flex flex-col gap-4">
                  <p>
                    Placeholder description with a lot of text and many
                    paragraphs
                  </p>
                  <p>
                    Placeholder description with a lot of text and many
                    paragraphs Placeholder description with a lot of text and
                    many paragraphs Placeholder description with a lot of text
                    and many paragraphs Placeholder description with a lot of
                    text and many paragraphs Placeholder description with a lot
                    of text and many paragraphs
                  </p>
                  <p>
                    Placeholder description with a lot of text and many
                    paragraphs Placeholder description with a lot of text and
                    many paragraphs Placeholder description with a lot of text
                    and many paragraphs Placeholder description with a lot of
                    text and many paragraphs Placeholder description with a lot
                    of text and many paragraphs
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section className="w-full my-4">
            <article className="text-white mx-auto ">
              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl font-semibold sm:text-2xl scroll-mt-12 mt-4"
                  id="history"
                >
                  HISTORY:
                </h2>
                <div className="flex flex-col gap-4">
                  <p>Placeholder with a lot of text and many paragraphs</p>
                  <p>
                    Placeholder with a lot of text and many paragraphs
                    Placeholder with a lot of text and many paragraphs
                    Placeholder with a lot of text and many paragraphs
                    Placeholder with a lot of text and many paragraphs
                    Placeholder with a lot of text and many paragraphs
                  </p>
                  <p>
                    Placeholder with a lot of text and many paragraphs
                    Placeholder with a lot of text and many paragraphs
                    Placeholder with a lot of text and many paragraphs
                    Placeholder with a lot of text and many paragraphs
                    Placeholder with a lot of text and many paragraphs
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section className="w-full my-4">
            <article className="text-white mx-auto ">
              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl font-semibold sm:text-2xl scroll-mt-12 mt-4"
                  id="features"
                >
                  FEATURES:
                </h2>
                <ul className="flex flex-col gap-4 ml-8">
                  <li
                    className="relative before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:block before:rounded-3xl
              before:bg-amber pl-8"
                  >
                    <p>
                      <strong>A feature: </strong>
                      Description of the feature with some text Description of
                      the feature with some text Description of the feature with
                      some text Description of the feature with some text
                      Description of the feature with some text
                    </p>
                  </li>
                  <li
                    className="relative before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:block before:rounded-3xl
              before:bg-amber pl-8"
                  >
                    <p>
                      <strong>A feature: </strong>
                      Description of the feature with some text Description of
                      the feature with some text Description of the feature with
                      some text Description of the feature with some text
                      Description of the feature with some text
                    </p>
                  </li>
                  <li
                    className="relative before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:block before:rounded-3xl
              before:bg-amber pl-8"
                  >
                    <p>
                      <strong>A feature: </strong>
                      Description of the feature with some text Description of
                      the feature with some text Description of the feature with
                      some text Description of the feature with some text
                      Description of the feature with some text
                    </p>
                  </li>
                </ul>
              </div>
            </article>
          </section>
          <section className="w-full my-4">
            <article className="text-white mx-auto ">
              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl font-semibold sm:text-2xl scroll-mt-12 mt-4"
                  id="videos"
                >
                  VIDEOS:
                </h2>
                {/* <iframe
                  className="absolute top-0 left-0 h-full w-full"
                  src={'https://www.youtube.com/embed/8dXB4pETtzI'}
                  allowFullScreen
                />
                <iframe
                  className="absolute top-0 left-0 h-full w-full"
                  src={'https://www.youtube.com/embed/pNHbeZiWuIc'}
                  allowFullScreen
                /> */}
              </div>
            </article>
          </section>
          <section className="w-full my-4">
            <article className="text-white mx-auto ">
              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl font-semibold sm:text-2xl scroll-mt-12 mt-4"
                  id="images"
                >
                  IMAGES:
                </h2>
                <div className="my-8 mx-8 flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-2 md:w-2/3 xl:grid-cols-3">
                  {conceptArt.map((image, index) => (
                    <span key={image.url.split('.')[0]}>
                      <div className="my-4">
                        <Image
                          onClick={() => openSlider(index)}
                          className="cursor-pointer"
                          src={image.url}
                          width={1920}
                          height={1080}
                          alt={image.description}
                        />
                      </div>
                      <p className="text-center">{image.description}</p>
                    </span>
                  ))}
                  <FullScreenSlider
                    images={conceptArt}
                    isSliderOpen={isSliderOpen}
                    closeSlider={closeSlider}
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                  />
                </div>
              </div>
            </article>
          </section>
          <section className="w-full my-4">
            <article className="text-white mx-auto ">
              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl font-semibold sm:text-2xl scroll-mt-12 mt-4"
                  id="logos-icons"
                >
                  LOGOS & ICONS:
                </h2>
                <Image src="/temtem.png" alt="" width={280} height={118} />
              </div>
            </article>
          </section>
          <section className="w-full my-4">
            <article className="text-white mx-auto ">
              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl font-semibold sm:text-2xl scroll-mt-12 mt-4"
                  id="about"
                >
                  ABOUT HORIZONS GAMES:
                </h2>
                <p>
                  Horizons Games was founded in 2023 by a group of students at
                  UPC School in Barcelona.
                </p>
              </div>
            </article>
          </section>
          <section className="w-full my-4">
            <article className="text-white mx-auto ">
              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl font-semibold sm:text-2xl scroll-mt-12 mt-4"
                  id="credits"
                >
                  CREDITS:
                </h2>
                <ul className="flex flex-col sm:grid sm:grid-cols-3">
                  {team.partners.map((partner, index) => {
                    return (
                      <li className="my-2" key={index}>
                        <p className="font-semibold">{partner.name}</p>
                        <p>{partner.primaryRole}</p>
                        {partner.secondaryRole && (
                          <p>{partner.secondaryRole}</p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          </section>
          <section className="w-full my-4">
            <article className="text-white mx-auto ">
              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl font-semibold sm:text-2xl scroll-mt-12 mt-4"
                  id="contact"
                >
                  CONTACT:
                </h2>
                <ul className="flex flex-col gap-2">
                  <li className="py-2">
                    <p className="font-semibold">Enquiries</p>
                    <Link
                      className="underline text-amber font-semibold hover:text-white"
                      href="mailto:horizongamesbarcelona@gmail.com"
                    >
                      horizongamesbarcelona@gmail.com
                    </Link>
                  </li>
                  <li className="py-2">
                    <p className="font-semibold">Twitter</p>
                    <Link
                      href="https://twitter.com/horizons_games"
                      className="underline text-amber font-semibold hover:text-white"
                    >
                      twitter.com/horizons_games
                    </Link>
                  </li>
                  <li className="py-2">
                    <p className="font-semibold">Instagram</p>
                    <Link
                      href="https://instagram.com/horizons.games"
                      className="underline text-amber font-semibold hover:text-white"
                    >
                      instagram.com/horizons.games
                    </Link>
                  </li>
                  {/* <li className="py-2">
                <p className="font-semibold">YouTube</p>
                <Link
                  href="https://youtube.com/@horizonsgames"
                  className="underline text-amber font-semibold hover:text-white"
                >
                  youtube.com/@horizonsgames
                </Link>
              </li> */}
                  {/* <li className="py-2">
                <p className="font-semibold">Tik Tok</p>
                <Link
                  href="https://tiktok.com/@horizonsgames"
                  className="underline text-amber font-semibold hover:text-white"
                >
                  tiktok.com/@horizonsgames
                </Link>
              </li> */}
                  <li className="py-2">
                    <p className="font-semibold">Website</p>
                    <Link
                      href="https://horizons-games.vercel.app"
                      className="underline text-amber font-semibold hover:text-white"
                    >
                      horizons-games.vercel.app
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}
