import Link from 'next/link';
import { team } from '../data/team';

export default function Press() {
  return (
    <main className="bg-zinc-900 w-full flex flex-col gap-4 items-center justify-center">
      <section className="w-full my-4 sm:w-2/3">
        <article className="text-white mx-auto w-11/12">
          <h1 className="font-extrabold text-3xl sm:text-5xl my-4">
            STARFALL REBELLION PRESSKIT
          </h1>
          <ul className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold sm:text-2xl">FACTSHEET:</h2>
            <li className="border-b border-white py-2">
              <p className="font-semibold">Developer:</p>
              <p>Horizons Games</p>
            </li>
            <li className="border-b border-white py-2">
              <p className="font-semibold">Location:</p>
              <p>Barcelona, Spain</p>
            </li>
            <li className="border-b border-white py-2">
              <p className="font-semibold">Website:</p>
              <Link
                href="https://horizons-games.vercel.app"
                className="underline text-amber font-semibold"
              >
                horizons-games.vercel.app
              </Link>
            </li>
            <li className="border-b border-white py-2">
              <p className="font-semibold">Regular price:</p>
              <p>Free</p>
            </li>
            <li className="border-b border-white py-2">
              <p className="font-semibold">Platforms:</p>
              <p>PC (Windows)</p>
            </li>
            <li className="border-b border-white py-2">
              <p className="font-semibold">Release date:</p>
              <p>November 10th, 2023</p>
            </li>
          </ul>
        </article>
      </section>
      <section className="w-full my-4 sm:w-2/3">
        <article className="text-white mx-auto w-11/12">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold sm:text-2xl">DESCRIPTION:</h2>
            <div className="flex flex-col gap-4">
              <p>
                Placeholder description with a lot of text and many paragraphs
              </p>
              <p>
                Placeholder description with a lot of text and many paragraphs
                Placeholder description with a lot of text and many paragraphs
                Placeholder description with a lot of text and many paragraphs
                Placeholder description with a lot of text and many paragraphs
                Placeholder description with a lot of text and many paragraphs
              </p>
              <p>
                Placeholder description with a lot of text and many paragraphs
                Placeholder description with a lot of text and many paragraphs
                Placeholder description with a lot of text and many paragraphs
                Placeholder description with a lot of text and many paragraphs
                Placeholder description with a lot of text and many paragraphs
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="w-full my-4 sm:w-2/3">
        <article className="text-white mx-auto w-11/12">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold sm:text-2xl">HISTORY:</h2>
          </div>
        </article>
      </section>
      <section className="w-full my-4 sm:w-2/3">
        <article className="text-white mx-auto w-11/12">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold sm:text-2xl">FEATURES:</h2>
          </div>
        </article>
      </section>
      <section className="w-full my-4 sm:w-2/3">
        <article className="text-white mx-auto w-11/12">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold sm:text-2xl">VIDEOS:</h2>
          </div>
        </article>
      </section>
      <section className="w-full my-4 sm:w-2/3">
        <article className="text-white mx-auto w-11/12">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold sm:text-2xl">IMAGES:</h2>
          </div>
        </article>
      </section>
      <section className="w-full my-4 sm:w-2/3">
        <article className="text-white mx-auto w-11/12">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold sm:text-2xl">
              LOGOS & ICONS:
            </h2>
          </div>
        </article>
      </section>
      <section className="w-full my-4 sm:w-2/3">
        <article className="text-white mx-auto w-11/12">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold sm:text-2xl">
              ABOUT HORIZONS GAMES:
            </h2>
          </div>
        </article>
      </section>
      <section className="w-full my-4 sm:w-2/3">
        <article className="text-white mx-auto w-11/12">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold sm:text-2xl">CREDITS:</h2>
            <ul className="flex flex-col sm:grid sm:grid-cols-3">
              {team.partners.map((partner, index) => {
                return (
                  <li className="my-2" key={index}>
                    <p className="font-semibold">{partner.name}</p>
                    <p>{partner.primaryRole}</p>
                    {partner.secondaryRole && <p>{partner.secondaryRole}</p>}
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      </section>
      <section className="w-full my-4 sm:w-2/3">
        <article className="text-white mx-auto w-11/12">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold sm:text-2xl">CONTACT:</h2>
            <ul className="flex flex-col gap-2">
              <li className="py-2">
                <p className="font-semibold">Enquiries</p>
                <Link
                  className="underline text-amber font-semibold"
                  href="mailto:horizongamesbarcelona@gmail.com"
                >
                  horizongamesbarcelona@gmail.com
                </Link>
              </li>
              <li className="py-2">
                <p className="font-semibold">Twitter</p>
                <Link
                  href="https://twitter.com/horizons_games"
                  className="underline text-amber font-semibold"
                >
                  twitter.com/horizons_games
                </Link>
              </li>
              <li className="py-2">
                <p className="font-semibold">Instagram</p>
                <Link
                  href="https://instagram.com/horizons.games"
                  className="underline text-amber font-semibold"
                >
                  instagram.com/horizons.games
                </Link>
              </li>
              {/* <li className="py-2">
                <p className="font-semibold">YouTube</p>
                <Link
                  href="https://youtube.com/@horizonsgames"
                  className="underline text-amber font-semibold"
                >
                  youtube.com/@horizonsgames
                </Link>
              </li> */}
              {/* <li className="py-2">
                <p className="font-semibold">Tik Tok</p>
                <Link
                  href="https://tiktok.com/@horizonsgames"
                  className="underline text-amber font-semibold"
                >
                  tiktok.com/@horizonsgames
                </Link>
              </li> */}
              <li className="py-2">
                <p className="font-semibold">Website</p>
                <Link
                  href="https://horizons-games.vercel.app"
                  className="underline text-amber font-semibold"
                >
                  horizons-games.vercel.app
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}
