import Image from 'next/image';

type ImageProps = {
  width: number;
  height: number;
};

export default function StarfallRebellion({ width, height }: ImageProps) {
  return (
    <Image
      src="/starfall-rebellion-logo.png"
      alt="Starfall Rebellion logo"
      width={width}
      height={height}
    />
  );
}
