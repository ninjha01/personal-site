import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { classNames } from "../utils";

const dontRenderCodeBackticksClassName = "prose-code:before:content-none prose-code:after:content-none";

export const Prose = (props: { content: string; className: string }) => {
  const { content, className } = props;
  return (
    <article
      className={classNames(
        "dark prose prose-slate h-full w-full dark:prose-invert lg:ml-8 lg:overflow-y-scroll",
        dontRenderCodeBackticksClassName,
        className
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
};
