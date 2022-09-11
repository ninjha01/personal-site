import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { config } from "../config";
import LogoIcon from "./LogoIcon";
import { EmailSignUpForm } from "./EmailSignUpForm";

export const HeroSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-12">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <section className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-blue-400 dark:text-zinc-100 sm:text-5xl">
              {config.personal.headline}
            </h1>
            <div className="my-8 mr-8 text-left text-base leading-relaxed text-blue-300 ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{config.personal.bio}</ReactMarkdown>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
