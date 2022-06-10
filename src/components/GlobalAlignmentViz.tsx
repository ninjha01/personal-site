import { BlastResponseDatum } from "../pages/Blast";
import { classNames } from "../utils";

interface AlignmentItem {
  id: string;
  start: number;
  end: number;
  title: string;
  anchor: string;
}

export const GlobalAlignmentViz = (props: {
  sequenceName: string;
  sequenceLength: number;
  results: BlastResponseDatum[];
}) => {
  const { results, sequenceName, sequenceLength } = props;

  const alignmentItems: AlignmentItem[] = results.map(res => ({
    id: res.id,
    start: res.query_range[0],
    end: res.query_range[1],
    title: res.title,
    anchor: `${res.id}`,
  }));

  const bookend = (
    <div className="text-align-center mx-auto my-2 w-full rounded-xl bg-blue-900 p-1 text-center text-xs text-white">
      {sequenceName}
    </div>
  );

  const middleAlignmentItem = (item: AlignmentItem, sequenceLength: number) => {
    const [marginLeft, marginRight] = [
      (item.start / sequenceLength) * 100,
      ((sequenceLength - item.end) / sequenceLength) * 100,
    ];

    return (
      <a href={`#card-${item.id}`}>
        <div
          key={item.title}
          className={classNames(
            "text-start text-align-start my-2 cursor-pointer truncate rounded-xl bg-blue-600 p-1 pl-4 text-xs text-white hover:bg-blue-700"
          )}
          style={{
            marginLeft: `${marginLeft}%`,
            marginRight: `${marginRight}%`,
          }}
        >
          {item.title}
        </div>
      </a>
    );
  };

  return (
    <section>
      <div className="mx-8 mt-16 overflow-hidden bg-white shadow-2xl sm:rounded-lg">
        <div className="border-b border-gray-200 bg-white px-4 py-4 sm:px-6">
          <h3 className="space-between flex flex-row text-lg font-medium leading-6 text-gray-900">
            <span className="flex-1">Alignment Viewer</span>
            <span className="flex-0 text-md inline-flex items-center self-end rounded-lg bg-gray-200 px-2.5 py-0.5 px-2 font-medium text-gray-400 opacity-90">
              Demo
            </span>
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{results.length} Alignments</p>
        </div>
        <div className="overflow-hidden px-4 py-5 sm:px-6">
          <>
            {bookend}
            {alignmentItems.map(m => middleAlignmentItem(m, sequenceLength))}
            {bookend}
          </>
        </div>
      </div>
    </section>
  );
};
