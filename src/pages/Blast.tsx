import React, { useState } from "react";
import { BlastForm } from "../components/BlastForm";
import { BlastResults } from "../components/BlastResults";
import { Sidebar } from "../components/Sidebar";
import { Steps } from "../components/Step";
import { getRndInteger, repeatArray } from "../utils";

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
  const [sequence, setSequence] = useState<string>(
    "QIKDLLVSSSTDLDTTLVLVNAIYFKGMWKTAFNAEDTREM"
  );
  const [sequenceName, setSequenceName] = useState<string | null>(null);

  const results: BlastResponseDatum[] = repeatArray(
    [
      {
        id: "01",
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
  ).map((x, i) => {
    let start = getRndInteger(0, sequence.length);
    let end = getRndInteger(start, sequence.length);
    /* if our result is too small, we pin to 30% of sequence.length and gen a random end idx  */
    if (end - start <= 0.15 * sequence.length) {
      start = 0.15 * sequence.length;
      end = getRndInteger(start * 2, sequence.length);
    }
    return {
      ...x,
      range: [start, end],
      id: `${i}`,
    };
  });

  const [blastResults, setBlastResult] = useState<BlastResponseDatum[] | null>(
    results
  );

  const submitBlastReq = (_: BlastRequestData) => {
    setStepID(3);
    setBlastResult(results);
  };

  const content = () => {
    switch (stepID) {
      case 0:
      case 1:
      case 2:
        return (
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
            sequenceName={sequenceName}
            setSequenceName={setSequenceName}
          />
        );
      case 3:
        return (
          <>
            {blastResults && (
              <BlastResults
                results={blastResults}
                sequenceName={sequenceName || "Unknown Sequence"}
                sequenceLength={sequence.length}
              />
            )}
          </>
        );
    }
  };
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
            {content()}
          </div>
        </div>
      </Sidebar>
    </>
  );
};
