import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Image from "next/image";
import { classNames } from "../utils";
import Link from "next/link";

const dontRenderCodeBackticksClassName = "prose-code:before:content-none prose-code:after:content-none";

export const Prose = (props: { content: string; className: string }) => {
  const { content, className } = props;
  const aStyles =
    "prose-a:bg-gradient-to-r prose-a:from-indigo-400 prose-a:to-pink-400 prose-a:text-white prose-a:bg-clip-text hover:prose-a:text-transparent hover:prose-a:transition-colors duration-300 ease-in-out";
  const pStyles = "prose-p:text-white/80";
  const imgStyles = "prose-img:rounded-xl";
  const hStyles =
    "prose-headings:bg-gradient-to-r prose-headings:from-blue-400 text-lg prose-headings:to-violet-300 prose-headings:pb-4 prose-headings:text-transparent prose-headings:bg-clip-text";
  const strongStyles =
    "prose-strong:bg-gradient-to-r prose-strong:from-blue-400 prose-strong:to-blue-500  prose-strong:bg-clip-text prose-strong:text-transparent";
  return (
    <article
      className={classNames(
        "prose prose-slate prose-zinc h-full w-full dark:prose-invert md:prose-lg lg:prose-xl",
        dontRenderCodeBackticksClassName,
        aStyles,
        pStyles,
        imgStyles,
        hStyles,
        strongStyles,
        className
      )}
    >
      <ReactMarkdown
        components={{
          img: function ({ ...props }) {
            const alt = props.alt || "";
            const width = 600;
            const height = 400;
            if (!props.src) {
              throw new Error("Expected to have src");
            }
            return (
              <span className="flex w-full items-center justify-center">
                <Image src={props.src} alt={alt} width={width} height={height} />
              </span>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};
