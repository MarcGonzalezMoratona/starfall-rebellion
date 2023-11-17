'use client';
import { useEffect, useState } from 'react';
import { usePageHandler } from '../hooks/usePage';
import { useDevice } from '../hooks/useDevice';
import FullScreenSlider from '../components/fullscreen-slider';
import Image from 'next/image';
import { conceptArt } from '../data/concept-art';
import { gameImages } from '../data/game';
import { wallpapers } from '../data/wallpapers';
import Link from 'next/link';

export default function Media() {
  const PageHandler = usePageHandler();
  const [currentSlider, setCurrentSlider] = useState(-1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const device = useDevice();
  const isMobile = device === 'mobile';
  const isTablet = device === 'tablet';

  const date = new Date(Date.now());
  const releaseDate = new Date('2023-11-17T18:15:00');

  useEffect(() => {
    PageHandler('media');
  });

  const openSlider = (index: any, slider: number) => {
    setCurrentImageIndex(index);
    setCurrentSlider(slider);
  };

  const closeSlider = () => {
    setCurrentSlider(-1);
  };

  const videoSourceMap = [
    {
      mobile: 'bixAnimationVertical',
      desktop: 'bixAnimation',
    },
    {
      mobile: 'droneAnimationVertical',
      desktop: 'droneAnimation',
    },
  ];

  return (
    <main className="bg-zinc-900 w-full flex flex-col gap-8 items-center justify-center">
      <h1 className="mt-8 mb-4 text-4xl text-white font-semibold">MEDIA</h1>
      <section className="flex w-full flex-col items-center justify-center text-white">
        <h2 className="text-3xl text-white font-semibold">IMAGES</h2>
        <div className="my-8 mx-8 flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-2 md:w-2/3 xl:grid-cols-3">
          {gameImages.map((image, index) => (
            <span key={image.url.split('.')[0]}>
              <div className="my-4">
                <Image
                  onClick={() => openSlider(index, 0)}
                  className="cursor-pointer select-none"
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
            sizes="h-[180px] w-[320px] sm:h-[270px] sm:w-[480px] md:h-[360px] md:w-[640px] lg:h-[540px] lg:w-[960px] xl:h-[720px] xl:w-[1280px]"
            images={gameImages}
            isSliderOpen={currentSlider === 0}
            closeSlider={closeSlider}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </div>
      </section>
      <section className="flex w-2/3 flex-col items-center justify-center gap-4">
        <h2 className="text-3xl text-white font-semibold">VIDEOS</h2>
        {date > releaseDate && (
          <iframe
            width={isMobile || isTablet ? 280 : 560}
            height={isMobile || isTablet ? 157 : 315}
            src={'https://www.youtube.com/embed/kg19eiAcFYg'}
            allowFullScreen
          />
        )}
        {/* <div className="flex flex-col gap-4 sm:flex-row">
          {videoSourceMap.map((video) => {
            return (
              <video controls key={video.mobile} className="sm:w-1/2">
                <source
                  src={`/animation/${
                    isMobile ? video.mobile : video.desktop
                  }.mp4`}
                  type="video/mp4"
                />
              </video>
            );
          })}
        </div> */}
      </section>
      <section className="flex w-full flex-col items-center justify-center text-white">
        <h2 className="text-3xl text-white font-semibold">WALLPAPERS</h2>
        <div className="my-8 mx-8 flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-2 md:w-2/3 xl:grid-cols-3">
          {wallpapers.map((image, index) => (
            <span key={image.url.split('.')[0]}>
              <div className="my-4">
                <Image
                  className="select-none"
                  src={`${image.url}Desktop.png`}
                  width={1920}
                  height={1080}
                  alt={image.description}
                />
              </div>
              <div className="flex flex-col items-center">
                <Link
                  href={`${image.url}Desktop.png`}
                  className="text-amber text-lg my-0.5 font-medium hover:text-white"
                  target="_blank"
                >
                  Desktop
                </Link>
                <Link
                  className="text-amber text-lg my-0.5 font-medium hover:text-white"
                  href={`${image.url}Tablet.png`}
                  target="_blank"
                >
                  Tablet
                </Link>
                <Link
                  className="text-amber text-lg my-0.5 font-medium hover:text-white"
                  href={`${image.url}Mobile.png`}
                  target="_blank"
                >
                  Mobile
                </Link>
              </div>
            </span>
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center text-white">
        <h2 className="text-3xl text-white font-semibold">CONCEPT ART</h2>
        <div className="my-8 mx-8 flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-2 md:w-2/3 xl:grid-cols-3">
          {conceptArt.map((image, index) => (
            <span key={image.url.split('.')[0]}>
              <div className="my-4">
                <Image
                  onClick={() => openSlider(index, 1)}
                  className="cursor-pointer select-none"
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
            sizes="h-[180px] w-[320px] sm:h-[270px] sm:w-[480px] md:h-[360px] md:w-[640px] lg:h-[540px] lg:w-[960px] xl:h-[720px] xl:w-[1280px]"
            images={conceptArt}
            isSliderOpen={currentSlider === 1}
            closeSlider={closeSlider}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </div>
      </section>
    </main>
  );
}
