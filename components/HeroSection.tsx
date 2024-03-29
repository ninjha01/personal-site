import Link from "next/link";
import { config } from "../config";

export const HeroSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-12">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <section className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-blue-400 dark:text-zinc-100 sm:text-5xl">
              {config.personal.headline}
            </h1>
            <div className="my-8 mr-8 flex flex-col gap-4 text-left text-base leading-relaxed">
              <p className="text-white/80">
                <span className="text-xl font-semibold text-blue-300">
                  I know what it s like to wake up at 4am to dose mice
                </span>{" "}
                and how frustrating it can be when you don t have the right
                tools on hand.
              </p>
              <p className="text-white/80">
                {`I'm a software designer based in Pasadena, CA. My work serves research scientists at the bench and the
                keyboard.`}
              </p>
              <Link className="group" href="https://nitro.bio">
                <p className="text-white/80 ">
                  I run{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-lg font-semibold text-transparent transition-all duration-100 ease-in-out group-hover:border-b group-hover:underline">
                    Nitro Bio
                  </span>
                  <span className="text-lg font-semibold text-blue-50">
                    , a biotech software consultancy.
                  </span>
                </p>
              </Link>
              <p className="text-white/80">
                <Link
                  className="text-white hover:underline"
                  href="https://www.kalzumeus.com/standing-invitation/"
                >
                  Like others,
                </Link>{" "}
                I have a standing offer - If you want to talk software,{" "}
                <Link
                  href="mailto:standingoffer@nishantjha.org"
                  className="text-white hover:underline"
                >
                  I want to talk to you.
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
