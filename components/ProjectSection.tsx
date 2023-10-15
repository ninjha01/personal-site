import { MailIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "../commonTypes";
import { Button } from "./Button";
import { ImageBackground } from "./ImageBackground";

export const ProjectSection = (props: { projects: ProjectType[] }) => {
  const { projects } = props;
  return (
    <section>
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div className="lg:ml-10">
          <Newsletter />
        </div>
        <div className="flex flex-col gap-16 lg:order-first">
          <h2 className="-mb-6 border-t border-blue-100 pt-8 text-2xl text-4xl font-bold leading-none tracking-tighter text-blue-100">
            Code
          </h2>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
const ProjectCard = (props: { project: ProjectType }) => {
  const {
    project: { title, url, description, img },
  } = props;
  return (
    <article className="group group relative flex flex-col items-start">
      <a href={url} className="mt-2 block">
        <h2 className="relative z-10  text-base font-semibold text-zinc-200 group-hover:text-zinc-100">
          {title}
        </h2>
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-80 sm:-inset-x-6 sm:rounded-2xl">
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
      </a>
    </article>
  );
};
import { useAnalyticsEvent } from "../hooks/useAnalytics";
const Newsletter = () => {
  const { trackCustomEvent } = useAnalyticsEvent();
  const logEmailClicked = () => {
    trackCustomEvent({
      eventName: "clicked_email_button",
      eventTitle: "email_button",
    });
  };

  const onSubmit = () => {
    logEmailClicked();
    window.open(
      "https://tinyletter.com/nishantjha",
      "popupwindow",
      "scrollbars=yes,width=800,height=600"
    );
    return true;
  };

  return (
    <section className="rounded-2xl border border-zinc-700/40 p-6">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>

      <form
        className="mt-6 flex"
        onSubmit={onSubmit}
        action="https://tinyletter.com/nishantjha"
        method="post"
        target="popupwindow"
      >
        <input type="hidden" value="1" name="embed" />
        <input
          id="tlemail"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-500 bg-zinc-900 px-3 py-[calc(theme(spacing.2)-1px)]  text-zinc-200 shadow-md shadow-zinc-800/5 placeholder:text-zinc-500 focus:border-teal-500  focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
        />
        <Button
          type="submit"
          variant="primary"
          className="ml-4 flex-none text-blue-100 "
        >
          Join
        </Button>
      </form>
    </section>
  );
};
