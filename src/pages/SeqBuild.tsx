import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import { SeqViz } from "seqviz";
import { Annotation } from "seqviz/dist/part";
import EmptySequence from "../components/EmptySequence";
import SequenceStats from "../components/SequenceStats";
import { Sidebar } from "../components/Sidebar";
import SlideOver from "../components/SlideOver";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useParentSize } from "../hooks/useParentSize";
import { classNames } from "../utils";
import { SequenceType, sequenceTypes, TopologyType, topologyTypes } from "./Blast";

function SeqBuild() {
  useEffect(function setTitle() {
    document.title = "SeqBuild";
  }, []);

  const [seqvizParentRef, { width, height }] = useParentSize();
  console.log({ height, width });
  const [annotations] = useLocalStorage<Annotation[]>({
    initialValue: [],
    key: "seqviz-annotations",
  });

  const [sequence, setSequence] = useState<string | null>(null);
  const [viewerMode] = useState<"linear" | "circular">("circular");

  return (
    <Sidebar>
      <div className="flex h-screen flex-col">
        <SequenceStats className={"my-8 flex h-48"} />
        <div ref={seqvizParentRef} className="h-full flex-1 text-lg">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {sequence ? (
              <SeqViz
                seq={sequence}
                annotations={annotations}
                style={{ height: height }}
                translations={[]}
                rotateOnScroll={false}
                viewer={viewerMode}
                showAnnotations={true}
                showComplement={true}
                showIndex={true}
                zoom={{ linear: 0, circular: 0 }}
              />
            ) : (
              <EmptySequence />
            )}
            <Form sequence={sequence || ""} setSequence={setSequence} />
          </div>
        </div>
      </div>
      <SlideOver>
        <>Hello World</>
      </SlideOver>
    </Sidebar>
  );
}

const Form = (props: { sequence: string; setSequence: any }) => {
  const { sequence, setSequence } = props;
  return (
    <form className="order-first md:order-last">
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <>
            <SequenceInput sequence={sequence} setSequence={setSequence} />
            <SequenceTypeSelector sequence={sequence} sequenceType={null} />
            <TopologyTypeSelector
              sequence={sequence}
              topology={null}
              setTopology={function (toptype: "Linear" | "Circular" | null): void {
                throw new Error("Function not implemented.");
              }}
            />
          </>
        </div>
        <div className={classNames("bg-gray-50 px-4 py-3 text-right sm:px-6")}>
          <button
            className={classNames(
              "inline-flex justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 disabled:opacity-50",
              true ? "animate-bounce" : ""
            )}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

const SequenceInput = (props: { sequence: string; setSequence: (seq: string) => void }) => {
  const { sequence, setSequence } = props;
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSequence(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sequence" className="block text-sm font-medium text-gray-800">
        Sequence
      </label>
      <div className="mt-1">
        <textarea
          id="sequence"
          name="sequence"
          rows={3}
          className={classNames(
            "mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm",
            !sequence ? "animate-pulse border-blue-900" : ""
          )}
          placeholder="Enter the sequence you wish to blast."
          value={sequence}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
const SequenceTypeSelector = (props: { sequence: string; sequenceType: string | null }) => {
  const { sequence, sequenceType } = props;
  const disabled = sequence.length === 0;

  const onChange = (e: SequenceType) => {};
  return (
    <div>
      <label htmlFor="sequence-type" className="block text-sm font-medium text-gray-800">
        Sequence Type
      </label>
      <p className="mt-2 text-sm text-gray-500">
        Are you searching with a DNA (nucleotide) or a Protein (amino acid) sequence?
      </p>

      <RadioGroup
        id="sequenceType"
        name="sequenceType"
        value={sequenceType}
        onChange={onChange}
        className="mt-2 disabled:opacity-50"
        disabled={disabled}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {sequenceTypes
            .filter(x => !!x)
            .map(option => (
              <RadioGroup.Option
                key={option}
                value={option}
                disabled={disabled}
                className={({ checked, disabled }) =>
                  classNames(
                    disabled ? "opacity-50" : "",

                    checked
                      ? "border-transparent bg-blue-900 text-white hover:bg-blue-800"
                      : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                    "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium sm:flex-1"
                  )
                }
              >
                <RadioGroup.Label as="span">{option}</RadioGroup.Label>
              </RadioGroup.Option>
            ))}
        </div>
      </RadioGroup>
    </div>
  );
};

const TopologyTypeSelector = (props: {
  topology: TopologyType;
  setTopology: (toptype: TopologyType) => void;
  sequence: string;
}) => {
  const { sequence, topology, setTopology } = props;
  const disabled = sequence.length === 0;

  const onChange = (e: TopologyType) => {
    setTopology(e);
  };
  return (
    <div>
      <label htmlFor="sequence-type" className="block text-sm font-medium text-gray-800">
        Topology Type
      </label>
      <p className="mt-2 text-sm text-gray-500">Do you want to search against circular dna (plasmids) or linear dna?</p>
      <RadioGroup
        id="topology"
        name="topology"
        value={topology}
        onChange={onChange}
        className="mt-2 disabled:opacity-50"
        disabled={disabled}
      >
        <RadioGroup.Label className="sr-only">Choose a sequence type</RadioGroup.Label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {topologyTypes
            .filter(x => !!x)
            .map(option => (
              <RadioGroup.Option
                key={option}
                value={option}
                disabled={disabled}
                className={({ checked, disabled }) =>
                  classNames(
                    disabled ? "opacity-50" : "",

                    checked
                      ? "border-transparent bg-blue-900 text-white hover:bg-blue-800"
                      : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                    "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium sm:flex-1"
                  )
                }
              >
                <RadioGroup.Label as="span">{option}</RadioGroup.Label>
              </RadioGroup.Option>
            ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default SeqBuild;
