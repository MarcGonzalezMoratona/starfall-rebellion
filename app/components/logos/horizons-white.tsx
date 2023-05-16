import Image from 'next/image';

export type ImageProps = {
  className?: string;
  priority?: boolean;
  height?: number;
  width?: number;
  fill?: boolean;
};

export const HorizonsWhite = ({
  className,
  priority,
  height,
  width,
  fill = false,
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
      fill={fill}
    />
  );
};
