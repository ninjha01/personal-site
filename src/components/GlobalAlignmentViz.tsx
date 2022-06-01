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
    start: res.range[0],
    end: res.range[1],
    title: res.title,
    anchor: `${res.id}`,
  }));

  const bookend = (
    <div className="w-full text-center text-align-center mx-auto text-xs text-white bg-blue-900 rounded-xl my-2 p-1">
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
            "text-start truncate text-align-start text-xs text-white bg-blue-600 hover:bg-blue-700 rounded-xl my-2 pl-4 p-1 cursor-pointer"
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
      <div className="bg-white shadow-2xl overflow-hidden sm:rounded-lg mt-16 mx-8">
        <div className="bg-white px-4 py-4 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex flex-row space-between">
            <span className="flex-1">Alignment Viewer</span>
            <span className="inline-flex flex-0 self-end items-center px-2.5 py-0.5 px-2 rounded-lg text-md font-medium bg-gray-200 opacity-90 text-gray-400">
              Demo
            </span>
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{results.length} Alignments</p>
        </div>
        <div className="px-4 py-5 sm:px-6 overflow-hidden">
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
