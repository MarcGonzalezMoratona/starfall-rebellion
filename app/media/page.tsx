'use client';
import { useEffect, useState } from 'react';
import { usePageHandler } from '../hooks/usePage';
import { useDevice } from '../hooks/useDevice';
import FullScreenSlider from '../components/fullscreen-slider';
import Image from 'next/image';
import { conceptArt } from '../data/concept-art';

export default function Media() {
  const PageHandler = usePageHandler();
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const device = useDevice();
  const isMobile = device === 'mobile';

  useEffect(() => {
    PageHandler('media');
  });

  const openSlider = (index: any) => {
    setCurrentImageIndex(index);
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
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
      <section className="flex w-2/3 flex-col items-center justify-center gap-4">
        <h2 className="text-3xl text-white font-semibold">VIDEOS</h2>
        <div className="flex flex-col gap-4 sm:flex-row">
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
        </div>
      </section>
      <section>
        <h2 className="text-3xl text-white font-semibold">WALLPAPERS</h2>
      </section>
      <section className="flex w-full flex-col items-center justify-center text-white">
        <h2 className="text-3xl text-white font-semibold">CONCEPT ART</h2>
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
      </section>
    </main>
  );
}
