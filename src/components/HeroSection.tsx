import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { config } from "../config";

export const HeroSection = () => {
  return (
    <section id="top">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center">
          <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-emerald-900 opacity-70 mix-blend-multiply blur-xl filter "></div>
                <div className="absolute top-20 -right-4 h-72 w-72 rounded-full bg-rose-900 opacity-70 mix-blend-multiply blur-xl filter "></div>
                <div className="absolute -bottom-12 right-20 h-72 w-72 rounded-full bg-fuchsia-800 opacity-70 mix-blend-multiply blur-xl filter "></div>

                <div className="relative">
                  <img
                    className="mx-auto rounded-lg object-cover object-center shadow-2xl"
                    alt="hero"
                    src={require("../assets/images/profile.jpg")}
                  />
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
              <ReactMarkdown children={config.personal.bio} remarkPlugins={[remarkGfm]} />
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
      className="block   transform items-center rounded-xl border-2 border-white px-6 py-3.5 text-center text-base font-medium text-blue-900 shadow-md shadow-blue-900 transition duration-500 ease-in-out hover:no-underline hover:shadow-xl hover:shadow-blue-900 focus:outline-none"
    >
      <div className="flex items-center gap-2 ">{LinkedInIcon}LinkedIn</div>
    </a>
  </div>
);

/* const GithubIcon = (
 *   <svg
 *     xmlns="http://www.w3.org/2000/svg"
 *     className="h-6 w-6 mr-1 rounded-sm"
 *     viewBox="0 0 24 24"
 *     stroke="currentColor"
 *     strokeWidth={0.75}
 *     fill="currentColor"
 *   >
 *     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
 *   </svg>
 * );
 *
 * const GithubButton = (
 *   <div className="basis-0 mt-3 rounded-lg  content-center">
 *     <a
 *       href={config.personal.github}
 *       target="_blank"
 *       rel="noreferrer"
 *       className="items-center  hover:no-underline block px-6 py-3.5 text-base font-medium text-center text-blue-900 transition duration-500 ease-in-out transform border-2 border-white shadow-blue-900 shadow-md rounded-xl focus:outline-none hover:shadow-xl hover:shadow-blue-900"
 *     >
 *       <div className="flex gap-2 items-center ">{GithubIcon}Github</div>
 *     </a>
 *   </div>
 * ); */
