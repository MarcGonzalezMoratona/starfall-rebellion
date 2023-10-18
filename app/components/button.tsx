type ButtonProps = {
  variant?: string;
  children?: string;
  className?: string;
  icon?: JSX.Element;
};

export default function Button({
  variant = 'primary',
  children,
  icon,
  className,
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center mx-2 my-4 rounded-md border-t-2 border-b-4 px-6 py-2 font-bold text-xl 
       tracking-wide text-zinc-900 sm:transition-transform sm:duration-300 sm:hover:translate-y-0.5 
       ${variant === 'primary' && 'border-y-amber bg-amber'} ${className}`}
    >
      {children}
      {icon}
    </button>
  );
}
