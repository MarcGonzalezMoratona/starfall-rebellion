import Link from 'next/link';

type CTAProps = {
  href: string;
  label: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

export default function CTA({ href, label, className, size = 'md' }: CTAProps) {
  return (
    <div
      className={`items-center text-white border-2
      hover:shadow-[0_0_4px_1px_rgba(250,222,75,1)]
     border-amber hover:border-white transition-all duration-300 px-4 py-1 rounded-full ${className}
     ${size === 'sm' && 'text-sm'} ${size === 'md' && 'text-base'} ${
        size === 'lg' && 'text-lg'
      }`}
    >
      {/* TODO: Change href to Starfall Rebellion latest release url */}
      <Link href={href}>{label}</Link>
    </div>
  );
}
