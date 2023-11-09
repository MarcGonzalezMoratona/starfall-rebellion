import Image from 'next/image';

type SongProps = {
  title: string;
  filename: string;
};

export default function Song({ title, filename }: SongProps) {
  return (
    <div
      className="relative h-72 w-72 flex flex-col gap-4 rounded-2xl items-center justify-between border-2 border-zinc-700
    hover:border-amber transition-all duration-300"
    >
      <Image
        className="absolute rounded-2xl"
        src="/starfallRebellionOST.png"
        fill
        alt="Starfall Rebellion OST cover art"
      />
      <h2 className="absolute text-center text-white text-2xl w-5/6 font-bold my-6">
        {title}
      </h2>
      <audio className="absolute bottom-0 my-4 w-5/6" controls>
        <source src={`/songs/${filename}`} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
