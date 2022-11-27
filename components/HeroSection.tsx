import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { config } from "../config";
import LogoIcon from "./LogoIcon";
import { EmailSignUpForm } from "./EmailSignUpForm";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-12">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <section className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-blue-400 dark:text-zinc-100 sm:text-5xl">
              {config.personal.headline}
            </h1>
            <div className="my-8 mr-8 text-left text-base leading-relaxed flex flex-col gap-4">
              <p className="text-white/80">
                <span className="font-semibold text-xl text-blue-300">
                  I know what it’s like to wake up at 4am to dose mice
                </span>{" "}
                and how frustrating it can be when you don’t have the right tools on hand.
              </p>
              <p className="text-white/80">
                {`I'm a software designer based in Pasadena, CA. My work serves research scientists at the bench and the
                keyboard.`}
              </p>
              <Link className="group" href="https://nitro.bio">
                <p className="text-white/80">
                  I run a{" "}
                  <span className="font-semibold text-lg text-blue-50">
                    biotech software consultancy called{" "}
                    <span className="group-hover:underline bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent transition-all duration-100 ease-in-out group-hover:border-b">
                      Nitro Bio
                    </span>
                    .{" "}
                  </span>
                </p>
              </Link>
              <p className="text-white/80">
                <Link className="text-white hover:underline" href="https://www.kalzumeus.com/standing-invitation/">
                  Like others,
                </Link>{" "}
                I have a standing offer - If you want to talk software,{" "}
                <Link href="mailto:standingoffer@nishantjha.org" className="hover:underline text-white">
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
