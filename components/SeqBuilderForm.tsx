import { classNames } from "../utils";

export const SeqBuilderForm = (props: { sequence: string; setSequence: any }) => {
  const { sequence, setSequence } = props;
  return (
    <form className="order-first md:order-last">
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <label htmlFor="sequence" className="block text-sm font-medium text-gray-800">
            Sequence
          </label>
          <div className="mt-1">
            <textarea
              id="sequence"
              key="sequence-input"
              name="sequence"
              rows={3}
              className={classNames(
                "mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm",
                !sequence ? "animate-pulse border-blue-900" : ""
              )}
              placeholder="Enter the sequence you wish to blast."
              value={sequence}
              onChange={e => setSequence(e.target.value)}
            />
          </div>
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
