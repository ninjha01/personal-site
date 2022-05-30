import { Menu } from "@headlessui/react";
import { DotsVerticalIcon, StarIcon } from "@heroicons/react/solid";
import { BlastResponseDatum } from "../pages/Blast";
import { GlobalAlignmentViz } from "./GlobalAlignmentViz";

export const BlastResults = (props: {
  results: BlastResponseDatum[];
  sequenceName: string;
  sequenceLength: number;
}) => {
  const { results, sequenceName, sequenceLength } = props;
  return (
    <>
      <GlobalAlignmentViz
        results={results}
        sequenceName={sequenceName}
        sequenceLength={sequenceLength}
      />
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5 my-8">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="my-4 grid grid-cols-2 gap-4">
        {results.map((result) => (
          <div
            key={result.id}
            className="bg-white px-4 py-6 shadow-md sm:p-6 sm:rounded-lg"
          >
            <ResultCard result={result} />
          </div>
        ))}
      </div>
    </>
  );
};

const TextAlignmentViz = (props: {
  query: string;
  midline: string;
  target: string;
}) => {
  const { query, midline, target } = props;

  if (!(query.length === midline.length && midline.length === target.length)) {
    throw new Error("query, midline, and target are not same length");
  }

  return (
    <div className="text-base text-gray-700 font-mono tracking-widest leading-0 flex flex-wrap pt-4">
      {query.split("").map((queryChar, idx) => {
        return (
          <div className="mb-8" key={idx}>
            <div>{queryChar}</div>
            <div>{midline[idx]}</div>
            <div>{target[idx]}</div>
          </div>
        );
      })}
    </div>
  );
};

function ResultCard(props: { result: BlastResponseDatum }) {
  const {
    result: {
      title,
      subtitle,
      range,
      gaps,
      frame,
      id,
      query,
      midline,
      target,
      score,
    },
  } = props;
  return (
    <article aria-labelledby={"result-title-" + id}>
      <div>
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium text-gray-900">
              <p className="hover:underline">{subtitle}</p>
            </div>
            <p className="text-sm text-gray-500">
              From {range[0]} to {range[1]}
            </p>
          </div>
          <div className="flex-shrink-0 self-center flex">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                  <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
            </Menu>
          </div>
        </div>
        <h2
          id={"result-title-" + id}
          className="mt-4 text-base font-medium text-gray-900"
        >
          {title}
        </h2>
      </div>
      <div className="mt-2">
        <TextAlignmentViz query={query} midline={midline} target={target} />
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div>
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <IconBar score={score} gaps={gaps} frame={frame} />
    </article>
  );
}

function IconBar(props: { score: number; gaps: number; frame: number }) {
  const { score, gaps, frame } = props;
  return (
    <div className="mt-6 flex justify-between space-x-8">
      <div className="flex space-x-6">
        <span className="inline-flex items-center text-sm">
          <button
            type="button"
            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
          >
            <StarIcon className="h-5 w-5" aria-hidden="true" />
            <span className="font-medium text-gray-900">Score: {score}</span>
          </button>
        </span>
        <span className="inline-flex items-center text-sm">
          <button
            type="button"
            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>

            <span className="font-medium text-gray-900">{gaps} gaps</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              transform="scale(-1, 1)"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
        <span className="inline-flex items-center text-sm">
          <button
            type="button"
            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              strokeWidth={2}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z" />
            </svg>
            <span className="font-medium text-gray-900">Frame: {frame}</span>
          </button>
        </span>
      </div>
    </div>
  );
}
