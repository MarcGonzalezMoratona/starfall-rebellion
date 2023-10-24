import Image from 'next/image';

type ImageProps = {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  loading?: 'eager' | 'lazy' | undefined;
};

export default function StarfallRebellion({
  width,
  height,
  loading,
}: ImageProps) {
  return (
    <Image
      src="/starfall-rebellion.png"
      alt="Starfall Rebellion logo"
      width={width}
      height={height}
      className="select-none"
      loading={loading}
    />
  );
}
