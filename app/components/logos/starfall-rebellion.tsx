import Image from 'next/image';

type ImageProps = {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
};

export default function StarfallRebellion({ width, height }: ImageProps) {
  return (
    <Image
      src="/starfall-rebellion.png"
      alt="Starfall Rebellion logo"
      width={width}
      height={height}
      className="select-none"
      priority
    />
  );
}
