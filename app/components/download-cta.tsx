import Link from 'next/link';

export default function DownloadCTA() {
  return (
    <div className="flex items-center text-white border-2 border-white px-4 py-1 rounded-full">
      {/* TODO: Change href to Starfall Rebellion latest release url */}
      <Link href="https://github.com/Horizons-Games/Axolotl-Engine/releases">
        Download
      </Link>
    </div>
  );
}
