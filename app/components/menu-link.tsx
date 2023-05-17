import Link from 'next/link';

type MenuLinkProps = {
  url: string;
  label: string;
  onClick?: () => void;
  selected?: boolean;
};

export default function MenuLink({
  url,
  label,
  onClick,
  selected,
}: MenuLinkProps) {
  return (
    <Link href={url}>
      <li
        className={`hover:text-amber hover:decoration-amber text-lg font-semibold 
       sm:hover:underline sm:decoration-white sm:underline-offset-8 ${
         selected ? 'text-amber' : 'text-white'
       }`}
        onClick={onClick}
      >
        {label}
      </li>
    </Link>
  );
}
