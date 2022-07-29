import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { config } from "../config";
import LogoIcon from "./LogoIcon";

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
          <div className="mt-12 mb-16 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow lg:pl-6 xl:mt-0 xl:pl-24">
            <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
              {config.personal.firstname} {config.personal.lastname}
            </span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              {config.personal.headline}
            </h1>

            <div className="mb-8 mr-8 text-left text-base leading-relaxed text-gray-500">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{config.personal.bio}</ReactMarkdown>
            </div>
            <div className="mr-8 flex w-full flex-col gap-4 sm:flex-row">
              {GetInTouchButton}
              {LinkedInButton}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EmailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const GetInTouchButton = (
  <div className="relative mt-3 flex basis-0 rounded-lg">
    <a
      href="mailto:contact@nishantjha.org"
      target="_blank"
      rel="noreferrer"
      className="block transform items-center rounded-xl bg-blue-900 px-6 py-4 text-base font-medium text-white shadow-md shadow-blue-900 transition duration-500 ease-in-out hover:no-underline hover:shadow-xl hover:shadow-blue-900 focus:outline focus:outline-blue-900 focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 lg:w-full"
    >
      <div className="flex gap-2">
        {EmailIcon}
        Contact
      </div>
    </a>
    <span className="relative top-0 right-3 -mt-1 -mr-1 flex h-4 w-4">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-700 opacity-75"></span>
      <span className="relative inline-flex h-4 w-4 rounded-full border border-2 border-white bg-blue-800"></span>
    </span>
  </div>
);

const LinkedInIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 rounded-sm"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={0.75}
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const LinkedInButton = (
  <div className="mt-3 flex basis-0 content-center rounded-lg">
    <a
      href={config.personal.linkedin}
      target="_blank"
      rel="noreferrer"
      className="block transform items-center rounded-xl border-2 border-white px-6 py-3.5 text-center text-base font-medium text-blue-900 shadow-md shadow-blue-900 transition duration-500 ease-in-out hover:no-underline hover:shadow-xl hover:shadow-blue-900 focus:outline-none"
    >
      <div className="flex items-center gap-2 ">{LinkedInIcon}LinkedIn</div>
    </a>
  </div>
);
