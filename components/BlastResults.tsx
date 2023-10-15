import { useEffect, useState } from "react";
import { BlastRequestData, BlastResponseDatum } from "../pages/mockups/blast";
import { classNames } from "../utils";
import { GlobalAlignmentViz } from "./GlobalAlignmentViz";
import { ResultCard } from "./ResultCard";
import { SequenceCard } from "./SequenceCard";

export const BlastResults = (props: {
  results: BlastResponseDatum[];
  request: BlastRequestData;
}) => {
  const { results, request } = props;
  const { sequence, sequenceName, sequenceType, topology } = request;
  const [loading, setLoading] = useState(true);

  useEffect(function stopLoading() {
    setTimeout(() => setLoading(false), 800);
  }, []);

  return (
    <>
      <div
        className={classNames(
          "transition-opacity duration-1000 ease-out",
          loading ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="grid grid-cols-1 lg:mt-6 lg:grid-cols-2">
          <div className="grow-1">
            <SequenceCard
              sequenceName={request.sequenceName}
              sequence={sequence}
              annotations={[]}
            />
          </div>

          <div className="grow-1">
            <GlobalAlignmentViz
              results={results}
              sequenceName={sequenceName}
              sequenceLength={request.sequence.length}
            />
          </div>
        </div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="my-8 py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2 ">
          {results.map((result) => (
            <ResultCard
              key={result.id}
              result={result}
              sequenceType={sequenceType}
              topologyType={topology}
            />
          ))}
        </div>
      </div>
    </>
  );
};
