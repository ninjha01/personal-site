import { useState, useEffect } from "react";
import { BlastForm } from "../components/BlastForm";
import { BlastResults } from "../components/BlastResults";
import { Sidebar } from "../components/Sidebar";
import { Steps } from "../components/Step";
import { getRndInteger } from "../utils";

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

  const [sequenceType, setSequenceType] = useState<SequenceType>("Protein");
  const [topology, setTopology] = useState<TopologyType>("Linear");
  const [sequence, setSequence] = useState<string>(
    "QIKDLLVSSSTDLDTTLVLVNAIYFKGMWKTAFNAEDTREMPFHVTKQESKPVQMMCMNNSFNVATLPAEKMKILELPFASGDLSMLVLLPDEVSDLERIEKTINFEKLTEWTNPNTMEKRRVKVYLPQMKIEEK"
  );
  const [sequenceName, setSequenceName] = useState<string | null>("Example Sequence");

  const [blastResults, setBlastResult] = useState<BlastResponseDatum[] | null>(null);

  /* const [showBanner, setShowBanner] = useState(true);
  
  * useEffect(function showBanner() {
  *   setTimeout(() => setShowBanner(true), 2000);
   * }, []); */

  useEffect(function setTitle() {
    document.title = "Blast Service";
  }, []);

  const submitBlastReq = (data: BlastRequestData) => {
    setStepID(3);
    const results = generateResults(data);
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
                sequenceType={sequenceType}
                topologyType={topology}
                sequence={sequence}
              />
            )}
          </>
        );
    }
  };
  return (
    <>
      <Sidebar>
        <div className="pt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-row items-center">
            <h1 className="text-3xl flex-2 font-semibold text-gray-900">Blast Service</h1>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
            <Steps steps={stepOptions} stepID={stepID} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">{content()}</div>
        </div>
      </Sidebar>
    </>
  );
};

const generateResults = (args: { sequence: string }) => {
  const { sequence } = args;
  return [
    {
      title: "GRCh38.p14 Primary Assembly",
      subtitle: "Homo sapiens chromosome 18",
      sequence_id: "NC_000018.10",
    },
    {
      title: "Alternate Assembly T2T-CHM13v2.0",
      subtitle: "Homo sapiens isolate CHM13 chromosome 7",
      sequence_id: "NC_060931.1",
    },
    {
      title: "GRCm39 strain C57BL/6J",
      subtitle: "Mus musculus chromosome 13",
      sequence_id: "NC_000018.10",
    },
    {
      title: "Strain BN/NHsdMcwi, mRatBN7.2",
      subtitle: "Rattus norvegicus chromosome 17",
      sequence_id: "NC_051352.1",
    },
    {
      title: "Dictyoglomus turgidum DSM 6724",
      subtitle: "Complete Sequence",
      sequence_id: "NC_011661.1",
    },
  ]
    .map(genSingleResultFromMetadata())
    .sort((a, b) => (a.score > b.score ? -1 : 1));

  function genSingleResultFromMetadata(): (
    value: { title: string; subtitle: string; sequence_id: string },
    index: number,
    array: { title: string; subtitle: string; sequence_id: string }[]
  ) => {
    id: string;
    score: number;
    range: [number, number];
    identities: number;
    positives: number;
    gaps: number;
    frame: number;
    sequence_id: string;
    title: string;
    subtitle: string;
    query: string;
    midline: string;
    target: string;
  } {
    return (metadata, i) => {
      const { title, subtitle, sequence_id } = metadata;
      let start = getRndInteger(0, sequence.length);
      let end = getRndInteger(start, sequence.length);
      /* if our result is too small, we pin to 30% of sequence.length and gen a random end idx  */
      if (end - start <= 0.15 * sequence.length) {
        start = Math.round(0.15 * sequence.length);
        end = getRndInteger(start * 2, sequence.length);
      }

      const trimmedQuery = sequence.slice(start, end);

      const generateTargetString = (query: string) => {
        const errorRate = getRndInteger(1, 80) / 100;
        const newString = query.split("");
        return newString
          .map(x => {
            if (!!errorRate && Math.random() <= errorRate) {
              const randIdx = getRndInteger(0, query.length);
              return query[randIdx];
            } else {
              return x;
            }
          })
          .join("");
      };

      const target = generateTargetString(trimmedQuery);

      const generateMidline = (query: string, target: string) => {
        return query
          .split("")
          .map((queryChar: string, i: number) => {
            const targetChar = target[i];
            if (targetChar === queryChar) {
              return "|";
            } else {
              return "X";
            }
          })
          .join("");
      };
      const midline = generateMidline(trimmedQuery, target);

      const score = getRndInteger(0, 100);

      return {
        id: `${i}`,
        range: [start, end] as [number, number],
        identities: getRndInteger(0, 100),
        positives: getRndInteger(0, 100),
        gaps: getRndInteger(0, 100),
        frame: getRndInteger(-3, 3),
        query: trimmedQuery,
        score,
        sequence_id,
        title,
        subtitle,
        midline,
        target,
      };
    };
  }
};
