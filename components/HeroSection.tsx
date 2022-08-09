import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { config } from "../config";
import LogoIcon from "./LogoIcon";
import { EmailSignUpForm } from "./EmailSignUpForm";

export const HeroSection = () => {
  return (
    <section id="top">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center">
          <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-10 h-80 w-80 rounded-full bg-blue-500 opacity-70 mix-blend-multiply blur-xl filter "></div>
                <div className="absolute top-24 right-3 h-32 w-32 rounded-full bg-blue-800 opacity-70 mix-blend-multiply blur-xl filter "></div>
                <div className="absolute -bottom-6 left-28 h-52 w-52 rounded-full bg-blue-900 opacity-70 mix-blend-multiply blur-xl filter "></div>
                <div className="absolute bottom-10  -right-8 h-64 w-64 rounded-full bg-blue-500 opacity-70 mix-blend-multiply blur-xl filter "></div>

                <div className="relative">
                  <LogoIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 mb-16 flex flex-col items-start text-left md:mb-0 lg:-mr-10 lg:w-1/2 lg:flex-grow lg:pl-6 xl:mt-0 xl:pl-24">
            <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
              {config.personal.firstname} {config.personal.lastname}
            </span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              {config.personal.headline}
            </h1>

            <div className="mb-8 mr-8 text-left text-base leading-relaxed text-gray-500">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{config.personal.bio}</ReactMarkdown>
            </div>
            <div className="flex w-full flex-col">
              <EmailSignUpForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
