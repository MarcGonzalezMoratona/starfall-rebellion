import Link from 'next/link';

export default function DownloadCTA() {
  return (
    <div
      className="hidden text-sm md:flex items-center text-white border-2
      hover:shadow-[0_0_4px_1px_rgba(250,222,75,1)]
     border-amber hover:border-white transition-all duration-300 px-4 py-1 rounded-full"
    >
      {/* TODO: Change href to Starfall Rebellion latest release url */}
      <Link href="https://github.com/Horizons-Games/Axolotl-Engine/releases">
        DOWNLOAD
      </Link>
    </div>
  );
}
