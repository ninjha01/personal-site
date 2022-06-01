import { useEffect, useState } from "react";
import { BlastResponseDatum, SequenceType, TopologyType } from "../pages/Blast";
import { classNames } from "../utils";
import { GlobalAlignmentViz } from "./GlobalAlignmentViz";
import { ResultCard } from "./ResultCard";

export const BlastResults = (props: {
  results: BlastResponseDatum[];
  sequenceName: string;
  sequenceType: SequenceType;
  topologyType: TopologyType;
  sequenceLength: number;
}) => {
  const { results, sequenceName, sequenceLength, sequenceType, topologyType } = props;
  const [loading, setLoading] = useState(true);

  useEffect(function stopLoading() {
    setTimeout(() => setLoading(false), 800);
  }, []);
  return (
    <div className={classNames("transition-opacity duration-1000 ease-out", loading ? "opacity-0" : "opacity-100")}>
      <GlobalAlignmentViz results={results} sequenceName={sequenceName} sequenceLength={sequenceLength} />
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5 my-8">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {results.map(result => (
          <ResultCard key={result.id} result={result} sequenceType={sequenceType} topologyType={topologyType} />
        ))}
      </div>
    </div>
  );
};
