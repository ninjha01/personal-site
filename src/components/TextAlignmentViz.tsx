import { classNames } from "../utils";

export const TextAlignmentViz = (props: {
  query: string;
  midline: string;
  target: string;
}) => {
  const { query, midline, target } = props;

  if (!(query.length === midline.length && midline.length === target.length)) {
    throw new Error("query, midline, and target are not same length");
  }

  return (
    <div className="text-sm text-gray-700 font-mono tracking-widest leading-0 flex flex-wrap pt-4">
      {query.split("").map((queryChar, idx) => {
        const [midlineChar, targetChar] = [midline[idx], target[idx]];
        return (
          <div className="mb-8" key={idx}>
            <div
              className={classNames(
                queryChar === " " ? "whitespace-pre-wrap" : ""
              )}
            >
              {queryChar}
            </div>
            <div
              className={classNames(
                "text-gray-400",
                midlineChar === "X" ? "text-red-700" : ""
              )}
            >
              {midlineChar}
            </div>
            <div
              className={classNames(
                targetChar === " " ? "whitespace-pre-wrap" : ""
              )}
            >
              {targetChar}
            </div>
          </div>
        );
      })}
    </div>
  );
};
