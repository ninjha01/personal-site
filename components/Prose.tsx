import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { classNames } from "../utils";

const dontRenderCodeBackticksClassName = "prose-code:before:content-none prose-code:after:content-none";

export const Prose = (props: { content: string; className: string }) => {
  const { content, className } = props;
  return (
    <article className={classNames("prose prose-slate", dontRenderCodeBackticksClassName, className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
};
