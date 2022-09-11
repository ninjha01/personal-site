import { classNames } from "../utils";

export const TextAlignmentViz = (props: {
  query: string;
  query_range: [number, number];
  midline: string;
  target: string;
  target_range: [number, number];
}) => {
  const { query, midline, target, query_range, target_range } = props;

  if (!(query.length === midline.length && midline.length === target.length)) {
    throw new Error("query, midline, and target are not same length");
  }

  /* spliting into allButLast, last so we can pair last indices with lastQuery and lastTarget chars */
  const allButLast = query.slice(0, -1).split("");
  const [queryLast, midlineLast, targetLast] = [query.at(-1), midline.at(-1), target.at(-1)];
  console.table({ queryLast, midlineLast, targetLast });

  return (
    <div className="leading-0 items-right mx-4 flex flex-wrap pt-4 text-center font-mono text-sm tracking-widest">
      <div className="flex flex-row flex-wrap">
        <div className={classNames("mr-2 text-right font-thin tracking-tighter")}>
          <div className={classNames("whitespace-pre-wrap text-blue-100")}>{query_range[0]}:</div>
          <div className="text-zinc-800/30">{"|"} </div> {/* Should be background color  */}
          <div className={classNames("whitespace-pre-wrap text-blue-300")}>{target_range[0]}:</div>
        </div>
        {allButLast.map((queryChar, idx) => {
          const [midlineChar, targetChar] = [midline[idx], target[idx]];
          return (
            <div className="mb-8 select-none" key={idx}>
              <div
                className={classNames("text-blue-100", queryChar === " " ? "whitespace-pre-wrap text-blue-100" : "")}
              >
                {queryChar}
              </div>
              <div className={classNames("text-gray-400", midlineChar === "X" ? "text-red-300" : "")}>
                {midlineChar}
              </div>
              <div className={classNames("text-blue-300", targetChar === " " ? "whitespace-pre-wrap" : "")}>
                {targetChar}
              </div>
            </div>
          );
        })}
        <div className="flex flex-row">
          <div className="select-none" key={"lastChars"}>
            <div className={classNames("text-blue-100", queryLast === " " ? "whitespace-pre-wrap" : "")}>
              {queryLast}
            </div>
            <div className={classNames("text-gray-400", midlineLast === "X" ? "text-red-300" : "")}>{midlineLast}</div>
            <div className={classNames("text-blue-300", targetLast === " " ? "whitespace-pre-wrap" : "")}>
              {targetLast}
            </div>
          </div>
          <div className={classNames("ml-2 text-left font-thin tracking-tighter")}>
            <div className={classNames("whitespace-pre-wrap text-blue-100")}>:{query_range[1]}</div>
            <div className="text-zinc-800/30">{"|"} </div> {/* Should be background color  */}
            <div className={classNames("whitespace-pre-wrap text-blue-300")}>:{target_range[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
