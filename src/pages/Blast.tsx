import { RadioGroup } from "@headlessui/react";
import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { classNames } from "../utils";
import { Steps } from "./Step";

const sequenceTypes = ["DNA", "Protein"] as const;
type SequenceType = typeof sequenceTypes[number];

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

  const [sequenceType, setSequenceType] = useState<SequenceType>(
    "DNA" as const
  );
  const [sequence, setSequence] = useState<string>("");

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
              setSequence={setSequence}
              setStepID={setStepID}
            />
          </div>
        </div>
      </Sidebar>
    </>
  );
};

const BlastForm = (props: {
  sequence: string;
  stepID: number;
  setSequence: (seq: string) => void;
  sequenceType: SequenceType;
  setSequenceType: (seqtype: SequenceType) => void;
  setStepID: (id: number) => void;
}) => {
  const {
    sequence,
    setSequence,
    setStepID,
    stepID,
    sequenceType,
    setSequenceType,
  } = props;

  const sequenceTypeSelector = (disabled: boolean) => {
    const onChange = (e: SequenceType) => {
      setSequenceType(e);
      if (sequence.length > 0) {
        setStepID(2);
      }
    };
    return (
      <div>
        <label
          htmlFor="sequence-type"
          className="block text-sm font-medium text-gray-800"
        >
          Sequence Type
        </label>
        <p className="mt-2 text-sm text-gray-900">
          Brief description for your profile. URLs are hyperlinked.
        </p>
        <RadioGroup
          value={sequenceType}
          onChange={onChange}
          className="mt-2 disabled:opacity-50"
          disabled={disabled}
        >
          <RadioGroup.Label className="sr-only">
            Choose a sequence type
          </RadioGroup.Label>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {sequenceTypes.map((option) => (
              <RadioGroup.Option
                key={option}
                value={option}
                disabled={disabled}
                className={({ checked, disabled }) =>
                  classNames(
                    disabled ? "opacity-50" : "",

                    checked
                      ? "bg-blue-900 border-transparent text-white hover:bg-blue-800"
                      : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                    "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
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

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Basic Local Alignment Search Tool
              </h3>
              <p className="mt-1 text-sm text-gray-900">
                BLAST finds regions of similarity between biological sequences.
                The program compares nucleotide or protein sequences to sequence
                databases and calculates the statistical significance.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <>
                    <SequenceInput
                      sequence={sequence}
                      stepID={stepID}
                      setStepID={setStepID}
                      setSequence={setSequence}
                    />
                    {sequenceTypeSelector(sequence.length === 0)}
                  </>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
};

const SequenceInput = (props: {
  sequence: string;
  setSequence: (seq: string) => void;
  stepID: number;
  setStepID: (id: number) => void;
}) => {
  const { sequence, setSequence, stepID, setStepID } = props;
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSequence(e.target.value);

    if (stepID && stepID > 1) {
    } else if (sequence.length === 0) {
      setStepID(0);
    } else {
      setStepID(1);
    }
  };

  return (
    <div>
      <label
        htmlFor="sequence"
        className="block text-sm font-medium text-gray-800"
      >
        Sequence
      </label>
      <div className="mt-1">
        <textarea
          id="about"
          name="about"
          rows={3}
          className="shadow-sm focus:ring-blue-900 focus:border-blue-900 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          placeholder="Enter the sequence you wish to blast."
          value={sequence}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
