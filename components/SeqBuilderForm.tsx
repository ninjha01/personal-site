import { RefObject } from "react";
import { classNames } from "../utils";

export const SeqBuilderForm = (props: {
  sequence: string;
  setSequence: any;
  inputRef: RefObject<HTMLTextAreaElement>;
}) => {
  const { sequence, setSequence, inputRef } = props;
  return (
    <form className="order-first md:order-last">
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <div>
            <h3 className="text-lg font-medium leading-6 text-blue-900">Sequence Submission</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Upload or paste your sequence. </p>
          </div>
          <div className="flex flex-col gap-4">
            <FileUpload />
            <textarea
              ref={inputRef}
              id="sequence"
              key="sequence-input"
              name="sequence"
              rows={3}
              className={classNames(
                "mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm",
                !sequence ? "animate-pulse border-blue-900" : ""
              )}
              placeholder="Or enter a valid DNA sequence."
              value={sequence}
              onChange={e => setSequence(e.target.value)}
            />
          </div>
        </div>
        <div className={classNames("bg-gray-50 px-4 py-3 text-right sm:px-6")}>
          <button
            className={classNames(
              "inline-flex justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 disabled:opacity-50",
              false ? "animate-bounce" : ""
            )}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

const FileUpload = () => {
  return (
    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
      <div className="space-y-1 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex text-sm text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500"
          >
            <span>Upload a sequence</span>
            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">Only genbank, fasta, fastq supported</p>
      </div>
    </div>
  );
};
