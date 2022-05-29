import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { repeatArray } from "../utils";
import { BlastForm } from "./BlastForm";
import { BlastResults } from "./BlastResults";
import { Steps } from "./Step";

export const sequenceTypes = ["DNA", "Protein", null] as const;
export type SequenceType = typeof sequenceTypes[number];

export const topologyTypes = ["Linear", "Circular", null] as const;
export type TopologyType = typeof topologyTypes[number];

export interface BlastRequestData {
  sequence: string;
  topology: TopologyType;
  sequenceType: SequenceType;
}

export interface BlastResponseDatum {
  id: string;
  range: [number, number];
  score: number;
  identities: number;
  positives: number;
  gaps: number;
  frame: number;
  sequence_id: string;
  title: string;
  subtitle: string;
  target: string;
  query: string;
  midline: string;
}

export const Blast = () => {
  const stepOptions = [
    {
      name: "Enter Sequence",

      href: "#",
      id: 1,
    },
    { name: "Blast!", href: "#", id: 2 },
    { name: "Analyze", href: "#", id: 3 },
  ];
  const [stepID, setStepID] = useState<number>(0);

  const [sequenceType, setSequenceType] = useState<SequenceType>(null);
  const [topology, setTopology] = useState<TopologyType>(null);
  const [sequence, setSequence] = useState<string>("");

  const results: BlastResponseDatum[] = repeatArray(
    [
      {
        id: "01",
        range: [63934835, 63935239] as [number, number],
        score: 29,
        identities: 75,
        positives: 11,
        gaps: 34,
        frame: 2,
        sequence_id: "NC_000018.10",
        title: "GRCh38.p14 Primary Assembly",
        subtitle: "Homo sapiens chromosome 18",
        target:
          "QLEKAITYEKLNEWTSADMMELYEVQLHLPKFKLEDSYDLKSTLSSMGMSDAFSQSKADFSGMSSARNLFLSNVFHKAFVEINEQGTEAAAGSGSEIDIRIRVPSIEFNANHPFLFFIRHNKTNTILFYGRLCSP",
        query:
          "QIKDLLVSSSTDLDTTLVLVNAIYFKGMWKTAFNAEDTREMPFHVTKQESKPVQMMCMNNSFNVATLPAEKMKILELPFASGDLSMLVLLPDEVSDLERIEKTINFEKLTEWTNPNTMEKRRVKVYLPQMKIEEK",
        midline:
          "++EK I +EKL EWT+ + ME   V+++LP+ K+E+ Y+L S L ++GM+D F  S A+ +G+SSA +L +S   H AF+E++E G E A  +G   DI+    S +F A+HPFLF I+HN TNTI+++GR  SP".replace(
            /\s/g,
            "|"
          ),
      },
    ],
    5
  ).map((x, i) => ({
    ...x,
    id: `${i}`,
  }));

  const [blastResults, setBlastResult] = useState<BlastResponseDatum[] | null>(
    results
  );

  const submitBlastReq = (data: BlastRequestData) => {
    setStepID(3);
    setBlastResult(results);
  };

  const divider = (
    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5 mt-8">
        <div className="border-t border-gray-200" />
      </div>
    </div>
  );
  return (
    <>
      <Sidebar>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl font-semibold text-gray-900">
              Blast Service
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
            <Steps steps={stepOptions} stepID={stepID} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
            <BlastForm
              stepID={stepID}
              sequenceType={sequenceType}
              setSequenceType={setSequenceType}
              sequence={sequence}
              topology={topology}
              setTopology={setTopology}
              setSequence={setSequence}
              setStepID={setStepID}
              submitBlastReq={submitBlastReq}
            />
          </div>
          {divider}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
            {blastResults && <BlastResults results={blastResults} />}
          </div>
          {divider}
        </div>
      </Sidebar>
    </>
  );
};
