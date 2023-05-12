import Image from 'next/image';

export type ImageProps = {
  className?: string;
  priority?: boolean;
  height?: number;
  width?: number;
};

export const HorizonsWhite = ({
  className,
  priority,
  height,
  width,
}: ImageProps) => {
  return (
    <Image
      className={className}
      src="/horizons-white.svg"
      alt="horizons games logo"
      height={height}
      width={width}
      sizes="(min-width: 320px) 320px"
      priority={priority}
    />
  );
};
