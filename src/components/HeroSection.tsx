import React from "react";
import { config } from "../config";

export const HeroSection = () => {
  return (
    <section>
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
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
              {config.personal.bio}
            </p>
            <div className="flex-1 min-w-0 revue-form-group">
              <label htmlFor="member_email" className="sr-only">
                Email address
              </label>
              <input
                id="cta-email"
                type="email"
                className="block w-full px-5 py-3 text-base text-blue-900 placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                placeholder="Enter your email  "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
