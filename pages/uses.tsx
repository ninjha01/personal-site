import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { UsesItem } from "../commonTypes";
import { Shell } from "../components/Shell";
import { config } from "../config";

export const Uses = () => {
  return (
    <>
      <Head>
        <title>Uses | Nishant Jha</title>
        <link rel="canonical" href={"https://nishantjha.org/uses"} />
      </Head>
      <Shell>
        <MockupContent />
      </Shell>
    </>
  );
};

const MockupContent = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          My tools of the trade.
        </h1>
        <div className="mt-6 text-base text-zinc-400">
          {"A big list of the stuff that I love to use."}
        </div>
      </header>

      <section className="mt-16 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Development
          </h2>
          <div className="md:col-span-3">
            <ul role="list" className="space-y-16">
              {config.uses.development.map((item: UsesItem) => (
                <UIMockupCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.url}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Workstation
          </h2>
          <div className="md:col-span-3">
            <ul role="list" className="space-y-16">
              {config.uses.workstation.map((item: UsesItem) => (
                <UIMockupCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.url}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Productivity
          </h2>
          <div className="md:col-span-3">
            <ul role="list" className="space-y-16">
              {config.uses.productivity.map((item: UsesItem) => (
                <UIMockupCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.url}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* <section className="mt-16 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Design</h2>
          <div className="md:col-span-3">
            <ul role="list" className="space-y-16">
              {config.uses.design.map((item: UsesItem) => (
                <UIMockupCard key={item.title} title={item.title} description={item.description} href={item.url} />
              ))}
            </ul>
          </div>
        </div>
      </section> */}
    </div>
  );
};

const UIMockupCard = (props: {
  title: string;
  description: string;
  href: string;
}) => {
  const { title, description, href } = props;
  return (
    <article className="flex flex-row md:items-baseline md:gap-8">
      <div className="max-w-xl" />
      <a href={href} className="mt-2 ">
        <div className="group relative flex flex-col items-start md:col-span-3">
          <h2 className="text-base font-semibold tracking-tight text-zinc-100">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{title}</span>
          </h2>
          <div className="relative z-10 mt-2 text-sm text-zinc-400 ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {description}
            </ReactMarkdown>
          </div>

          <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-300"
          >
            Check it out
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
        </div>
      </a>
    </article>
  );
};

export default Uses;
