import { RadioGroup } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import {
  BlastRequestData,
  SequenceType,
  sequenceTypes,
  TopologyType,
  topologyTypes,
} from "../pages/mockups/blast";
import { classNames } from "../utils";

export const BlastForm = (props: {
  stepID: number;
  setStepID: (id: number) => void;
  submitBlastReq: (data: BlastRequestData) => void;
}) => {
  const { setStepID, submitBlastReq } = props;

  const [validated, setValidated] = useState(false);
  const [sequenceType, setSequenceType] = useState<SequenceType>("Protein");
  const [topology, setTopology] = useState<TopologyType>("Linear");
  const [sequence, setSequence] = useState<string>(
    "QIKDLLVSSSTDLDTTLVLVNAIYFKGMWKTAFNAEDTREMPFHVTKQESKPVQMMCMNNSFNVATLPAEKMKILELPFASGDLSMLVLLPDEVSDLERIEKTINFEKLTEWTNPNTMEKRRVKVYLPQMKIEEK"
  );
  const [sequenceName, setSequenceName] = useState<string>("Example Sequence");

  useEffect(
    function validateFormAndManageStepId() {
      setValidated(sequence.length > 0 && !!sequenceType && !!topology);
      if (sequence.length === 0) {
        /* Beginning of form */
        setStepID(0);
      } else if (!sequenceType || !topology) {
        /* Not ready to blast yet */
        setStepID(1);
      } else {
        /* Ready to blast */
        setStepID(2);
        setValidated(true);
      }
    },
    [sequence, sequenceType, topology, setStepID]
  );

  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="sm:px-0 md:px-4">
            <h3 className="text-lg font-medium leading-6 text-blue-200">
              Basic Local Alignment Search Tool
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              BLAST finds regions of similarity between biological sequences.
              The program compares nucleotide or protein sequences to sequence
              databases and calculates the statistical significance.
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 py-5 md:bg-zinc-800 md:px-4">
                <>
                  <NameInput name={sequenceName} setName={setSequenceName} />

                  <SequenceInput
                    sequence={sequence}
                    setSequence={setSequence}
                  />
                  <SequenceTypeSelector
                    setSequenceType={setSequenceType}
                    sequence={sequence}
                    sequenceType={sequenceType}
                  />
                  <TopologyTypeSelector
                    topology={topology}
                    setTopology={setTopology}
                    sequence={sequence}
                  />
                </>
              </div>
              <div className={classNames("py-3 text-right sm:px-6 md:px-4")}>
                <button
                  className={classNames(
                    "inline-flex justify-center rounded-md border border-zinc-500 bg-blue-800 px-4 py-2 text-sm font-medium text-zinc-100 shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 disabled:opacity-50",
                    validated ? "animate-bounce" : ""
                  )}
                  disabled={!validated}
                  onClick={() => {
                    if (
                      (sequence.length > 0,
                      sequenceType !== null,
                      topology !== null)
                    ) {
                      submitBlastReq({
                        sequence,
                        sequenceType,
                        topology,
                        sequenceName,
                      });
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const NameInput = (props: {
  name: string | null;
  setName: (seq: string) => void;
}) => {
  const { name, setName } = props;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="name"
        className={classNames("block text-sm font-medium text-blue-200")}
      >
        Sequence Name
      </label>
      <div className="mt-1">
        <input
          id="name"
          key="name-input"
          name="name"
          className={classNames(
            "block w-full rounded-md border border-zinc-500 bg-zinc-700 p-3 text-zinc-100 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm",
            !name ? "animate-pulse border-blue-900" : ""
          )}
          placeholder="Enter a name for your search."
          value={name || ""}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const SequenceInput = (props: {
  sequence: string;
  setSequence: (seq: string) => void;
}) => {
  const { sequence, setSequence } = props;
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSequence(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="sequence"
        className="block text-sm font-medium text-blue-200"
      >
        Sequence
      </label>
      <div className="mt-1">
        <textarea
          id="sequence"
          key="sequence-input"
          name="sequence"
          rows={3}
          className={classNames(
            "mt-1 block w-full rounded-md border  border-zinc-500 bg-zinc-700 text-zinc-100 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm",
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
const SequenceTypeSelector = (props: {
  setSequenceType: (seqtype: SequenceType) => void;
  sequence: string;
  sequenceType: string | null;
}) => {
  const { sequence, sequenceType, setSequenceType } = props;
  const disabled = sequence.length === 0;

  const onChange = (e: SequenceType) => {
    setSequenceType(e);
  };
  return (
    <div>
      <label
        htmlFor="sequence-type"
        className="block text-sm font-medium text-blue-200"
      >
        Sequence Type
      </label>
      <p className="mt-2 text-sm text-zinc-400">
        Are you searching with a DNA (nucleotide) or a Protein (amino acid)
        sequence?
      </p>

      <RadioGroup
        id="sequenceType"
        key="sequenceType-input"
        name="sequenceType"
        value={sequenceType}
        onChange={onChange}
        className="mt-2 disabled:opacity-50"
        disabled={disabled}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {sequenceTypes
            .filter((x) => !!x)
            .map((option) => (
              <RadioGroup.Option
                key={option}
                value={option}
                disabled={disabled}
                className={({ checked, disabled }) =>
                  classNames(
                    disabled ? "opacity-50" : "",
                    checked
                      ? "border-transparent bg-blue-900 text-white hover:bg-blue-800"
                      : "border-zinc-500 bg-zinc-700 text-zinc-100 hover:bg-blue-300",
                    "flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium sm:flex-1"
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
      <label
        htmlFor="sequence-type"
        className="block text-sm font-medium text-blue-200"
      >
        Topology Type
      </label>
      <p className="mt-2 text-sm text-zinc-400">
        Do you want to search against circular dna (plasmids) or linear dna?
      </p>
      <RadioGroup
        id="topology"
        key="topology-input"
        name="topology"
        value={topology}
        onChange={onChange}
        className="mt-2 disabled:opacity-50"
        disabled={disabled}
      >
        <RadioGroup.Label className="sr-only">
          Choose a sequence type
        </RadioGroup.Label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {topologyTypes
            .filter((x) => !!x)
            .map((option) => (
              <RadioGroup.Option
                key={option}
                value={option}
                disabled={disabled}
                className={({ checked, disabled }) =>
                  classNames(
                    disabled ? "opacity-50" : "",

                    checked
                      ? "border-transparent bg-blue-900 text-white hover:bg-blue-800"
                      : "border-zinc-500 bg-zinc-700 text-zinc-100 hover:bg-blue-300",
                    "flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium sm:flex-1"
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
