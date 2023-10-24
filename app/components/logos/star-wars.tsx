import Image from 'next/image';
import { ImageProps } from './horizons-white';

export default function StarWars({ width, height }: ImageProps) {
  return (
    <Image
      src="/star-wars.png"
      alt="Star Wars logo."
      width={width}
      height={height}
      className="select-none"
    />
  );
}
