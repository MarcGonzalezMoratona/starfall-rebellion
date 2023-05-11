import Image from 'next/image';

type ImageProps = {
  className?: string;
  priority?: boolean;
};

export const HorizonsWhite = ({ className, priority }: ImageProps) => {
  return (
    <Image
      className={className}
      src="/horizons-white.svg"
      alt="horizons games logo"
      height={48}
      width={48}
      sizes="(min-width: 320px) 320px"
      priority={priority}
    />
  );
};
