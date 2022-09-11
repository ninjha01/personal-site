import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Shell } from "../../components/Shell";
import { config } from "../../config";

export const Architectures = () => {
  return (
    <>
      <Head>
        <title>Architectures | Nishant Jha</title>
        <link rel="canonical" href={"https://nishantjha.org/architectures"} />
      </Head>
      <Shell>
        <ArchitectureContent />
      </Shell>
    </>
  );
};

const ArchitectureContent = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">Architectures</h1>
        <div className="mt-6 text-base text-zinc-400">{"Architecture diagrams for various applications."}</div>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-blue-300 md:pl-6">
          <div className="flex flex-col gap-16">
            {config.architectures.map(architecture => (
              <UIMockupCard
                key={architecture.title}
                title={architecture.title}
                description={architecture.description}
                href={architecture.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const UIMockupCard = (props: { title: string; description: string; href: string }) => {
  const { title, description, href } = props;
  return (
    <article className="flex flex-row md:items-baseline md:gap-8">
      <div className="max-w-xl" />
      <a href={href} className="mt-2 ">
        <div className="group relative flex flex-col items-start md:col-span-3">
          <h2 className="text-base font-semibold tracking-tight text-zinc-100">
            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{title}</span>
          </h2>
          <div className="relative z-10 mt-2 text-sm text-zinc-400 ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
          </div>
          <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-300">
            Check it out
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
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

export default Architectures;
