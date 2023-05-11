import Image from 'next/image';

type ImageProps = {
  className?: string;
  priority?: boolean;
};

export const PEGI7 = ({ className, priority }: ImageProps) => {
  return (
    <Image
      className={className}
      src="/pegi7.png"
      alt="PEGI7 logo"
      height={58}
      width={48}
      sizes="(min-width: 320px) 320px"
      priority={priority}
    />
  );
};
