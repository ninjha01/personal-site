import { useEffect, useState } from "react";
import { BlastResponseDatum, SequenceType, TopologyType } from "../pages/Blast";
import { classNames } from "../utils";
import { GlobalAlignmentViz } from "./GlobalAlignmentViz";
import { ResultCard } from "./ResultCard";
import { SequenceCard } from "./SequenceCard";

export const BlastResults = (props: {
  results: BlastResponseDatum[];
  sequenceName: string;
  sequenceType: SequenceType;
  sequence: string;
  topologyType: TopologyType;
  sequenceLength: number;
}) => {
  const { results, sequence, sequenceName, sequenceLength, sequenceType, topologyType } = props;
  const [loading, setLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(function stopLoading() {
    setTimeout(() => setLoading(false), 800);
  }, []);

  useEffect(function showBanner() {
    setTimeout(() => setShowBanner(true), 2000);
  }, []);

  return (
    <>
      <div
        className={classNames("transition-opacity duration-1000 ease-out", showBanner ? "opacity-100" : "opacity-0")}
      >
        <ContactMeBanner />
      </div>
      <div className={classNames("transition-opacity duration-1000 ease-out", loading ? "opacity-0" : "opacity-100")}>
        <div className="grid  grid-cols-1 lg:grid-cols-2">
          <div className="grow-1">
            <SequenceCard sequenceName={sequenceName} sequence={sequence} annotations={[]} />
          </div>

          <div className="grow-1">
            <GlobalAlignmentViz results={results} sequenceName={sequenceName} sequenceLength={sequenceLength} />
          </div>
        </div>
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
    </>
  );
};

const ContactMeBanner = () => {
  return (
    <div className="w-full text-yellow-600 border rounded-lg shadow-xl">
      <div className="flex items-center justify-between px-6 py-4 mx-auto">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4 icon icon-tabler icon-tabler-alert-triangle"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
            <polyline points="11 12 12 12 12 16 13 16"></polyline>
          </svg>
          <p className="text-sm font-semibold tracking-wide uppercase">
            <strong>Alert:</strong> Want to blast against your proprietary sequences?
          </p>
        </div>
        <a
          className="p-1 transition-colors duration-200 transform rounded-md text-yellow-600 focus:outline-none"
          href="mailto:contact@nishantjha.org"
        >
          Get in touch!
        </a>
      </div>
    </div>
  );
};
