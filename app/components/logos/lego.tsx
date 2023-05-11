import Image from 'next/image';

type ImageProps = {
  className?: string;
  priority?: boolean;
};

export const LEGO = ({ className, priority }: ImageProps) => {
  return (
    <Image
      className={className}
      src="/lego.svg"
      alt="LEGO logo"
      height={48}
      width={48}
      sizes="(min-width: 320px) 320px"
      priority={priority}
    />
  );
};
