import { RadioGroup } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { classNames } from "../utils";
import {
	BlastRequestData,
	SequenceType,
	sequenceTypes,
	TopologyType,
	topologyTypes
} from "./Blast";

export const BlastForm = (props: {
  sequence: string;
  stepID: number;
  setSequence: (seq: string) => void;
  sequenceType: SequenceType;
  topology: TopologyType;
  setTopology: (toptype: TopologyType) => void;
  setSequenceType: (seqtype: SequenceType) => void;
  setStepID: (id: number) => void;
  submitBlastReq: (data: BlastRequestData) => void;
}) => {
  const {
    sequence,
    setSequence,
    setStepID,
    sequenceType,
    topology,
    setTopology,
    setSequenceType,
    submitBlastReq,
  } = props;

  const [validated, setValidated] = useState(false);

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
          <form>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <>
                  <h3 className="text-lg leading-6 font-medium text-gray-400">
                    Example Sequence
                  </h3>

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
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 disabled:opacity-50"
                  disabled={!validated}
                  onClick={() => {
                    if (
                      (sequence.length > 0,
                      sequenceType !== null,
                      topology !== null)
                    ) {
                      submitBlastReq({ sequence, sequenceType, topology });
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
        className="block text-sm font-medium text-gray-800"
      >
        Sequence
      </label>
      <div className="mt-1">
        <textarea
          id="sequence"
          name="sequence"
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
        className="block text-sm font-medium text-gray-800"
      >
        Sequence Type
      </label>
      <p className="mt-2 text-sm text-gray-900">
        Brief description for your profile. URLs are hyperlinked.
      </p>
      <RadioGroup
        id="sequenceType"
        name="sequenceType"
        value={sequenceType}
        onChange={onChange}
        className="mt-2 disabled:opacity-50"
        disabled={disabled}
      >
        <RadioGroup.Label className="sr-only">
          Choose a sequence type
        </RadioGroup.Label>
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
                      ? "bg-blue-900 border-transparent text-white hover:bg-blue-800"
                      : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                    "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1"
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
        className="block text-sm font-medium text-gray-800"
      >
        Topology Type
      </label>
      <p className="mt-2 text-sm text-gray-900">
        Brief description for your profile. URLs are hyperlinked.
      </p>
      <RadioGroup
        id="topology"
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
                      ? "bg-blue-900 border-transparent text-white hover:bg-blue-800"
                      : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                    "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1"
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
