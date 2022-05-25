import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { config } from "../config";

export const HeroSection = () => {
  return (
    <section id="top_of_page">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img
                    className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                    alt="hero"
                    src={require("../assets/images/profile.jpg")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
              {config.personal.firstname} {config.personal.lastname}
            </span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              {config.personal.headline}
            </h1>

            <p className="mb-8 text-base leading-relaxed mr-8 text-left text-gray-500">
              <ReactMarkdown
                children={config.personal.bio}
                remarkPlugins={[remarkGfm]}
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full mr-8">
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
  <div className="mt-3 rounded-lg ">
    <a
      href="mailto:contact@nishantjha.org"
      target="_blank"
      rel="noreferrer"
      className="items-center  hover:no-underline block px-6 py-4 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-900 rounded-xl shadow-md shadow-blue-900 hover:shadow-xl hover:shadow-blue-900 focus:outline focus:outline-blue-900  focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
    >
      <div className="flex gap-2">
        {EmailIcon}
        Contact
      </div>
    </a>
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
  <div className="basis-0 mt-3 rounded-lg content-center">
    <a
      href={config.personal.linkedin}
      target="_blank"
      rel="noreferrer"
      className="items-center   hover:no-underline block px-6 py-3.5 text-base font-medium text-center text-blue-900 transition duration-500 ease-in-out transform border-2 border-white shadow-blue-900 shadow-md rounded-xl focus:outline-none hover:shadow-xl hover:shadow-blue-900"
    >
      <div className="flex gap-2 items-center ">{LinkedInIcon}LinkedIn</div>
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
