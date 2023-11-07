import Link from 'next/link';

type CTAProps = {
  href: string;
  label: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export default function CTA({ href, label, className, size = 'lg' }: CTAProps) {
  return (
    <div
      className={`items-center text-white border-2
      hover:shadow-[0_0_4px_1px_rgba(250,222,75,1)] -skew-x-6
     border-amber hover:border-white transition-all duration-300 px-6 py-2 rounded-lg ${className}
     ${size === 'sm' && 'text-sm'} ${size === 'md' && 'text-base'} ${
        size === 'lg' && 'text-lg'
      } ${size === 'xl' && 'text-xl'}`}
    >
      <Link href={href} className="skew-x-6">
        {label}
      </Link>
    </div>
  );
}
