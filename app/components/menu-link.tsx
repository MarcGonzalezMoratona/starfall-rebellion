import Link from 'next/link';

type MenuLinkProps = {
  url: string;
  label: string;
};

export default function MenuLink({ url, label }: MenuLinkProps) {
  return (
    <Link href={url}>
      <li className="text-white text-xl font-semibold sm:hover:underline sm:decoration-white sm:underline-offset-8">
        {label}
      </li>
    </Link>
  );
}
