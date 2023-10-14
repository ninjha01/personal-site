import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Image from "next/image";
import { classNames } from "../utils";

const dontRenderCodeBackticksClassName = "prose-code:before:content-none prose-code:after:content-none";

export const Prose = (props: { content: string; className: string }) => {
  const { content, className } = props;
  const aStyles =
    "prose-a:bg-gradient-to-r prose-a:from-sky-400 prose-a:to-cyan-300 hover:prose-a:text-white prose-a:bg-clip-text prose-a:text-transparent prose-a:transition-colors duration-300 ease-in-out";
  const pStyles = "prose-p:text-white prose-p:font-light";
  const imgStyles = "prose-img:rounded-xl";
  const h1Styles =
    "prose-h1:tracking-wider prose-h1:bg-gradient-to-r prose-h1:from-emerald-400 prose-h1:to-sky-400 prose-h1:text-transparent prose-h1:bg-clip-text";
  const h2Styles = "prose-h2:tracking-wider prose-h2:text-white";
  const strongStyles = "";
  return (
    <article
      className={classNames(
        "prose prose-slate prose-zinc h-full w-full dark:prose-invert md:prose-lg lg:prose-xl",
        dontRenderCodeBackticksClassName,
        aStyles,
        pStyles,
        imgStyles,
        h1Styles,
        h2Styles,
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
