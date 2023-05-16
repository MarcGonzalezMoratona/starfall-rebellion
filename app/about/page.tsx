import { HorizonsWhite } from '../components/logos/horizons-white';

export default function About() {
  return (
    <main className="bg-zinc-900 w-full h-screen flex flex-col gap-32 items-center justify-center">
      <section className="h-96 w-full sm:flex-row flex-col flex sm:gap-8 xl:gap-12 items-center justify-center font-ethnocentric">
        <HorizonsWhite height={280} width={280} />
        <h1 className="text-white text-3xl sm:text-5xl xl:text-7xl text-center">
          HORIZONS GAMES
        </h1>
      </section>
    </main>
  );
}
