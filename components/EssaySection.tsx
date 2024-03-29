import Link from "next/link";
import { EssayType } from "../commonTypes";
import { ImageBackground } from "./ImageBackground";

export const EssaySection = (props: { essays: EssayType[] }) => {
  const { essays } = props;
  return (
    <section className="">
      <h1 className="mb-6 text-2xl text-4xl font-bold leading-none tracking-tighter text-blue-100">
        Writing
      </h1>
      <div className="relative mx-auto max-w-7xl px-2">
        <div className="mt-8 flex flex-col gap-8 ">
          {essays.map((essay: EssayType) => (
            <EssayEntry key={essay.url} essay={essay} />
          ))}
        </div>
      </div>
    </section>
  );
};
const EssayEntry = (props: { essay: EssayType }) => {
  const {
    essay: { title, url, description, img },
  } = props;
  return (
    <article className="group group relative flex flex-col items-start">
      <Link href={url} className="mt-2 block">
        <h2 className="relative z-10  text-base font-semibold text-zinc-200 group-hover:text-zinc-100">
          {title}
        </h2>
        <div className="absolute -bottom-6 -left-2 -top-4 right-4 z-0  bg-zinc-800/50 opacity-0 transition  group-hover:opacity-80 sm:rounded-2xl">
          <ImageBackground
            className={"-z-10 rounded-2xl bg-slate-800 opacity-80"}
            img={img}
          />
        </div>
        <p className="relative z-10 mt-2 text-sm text-zinc-400 group-hover:text-zinc-200">
          {description}
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-300"
        >
          Read
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="ml-1 h-4 w-4 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </Link>
    </article>
  );
};
