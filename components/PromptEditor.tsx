import { classNames } from "../utils";

export function PromptEditor({
  textAreaRef,
  submitPromptOnClick,
  loading,
}: {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  submitPromptOnClick: () => Promise<void>;
  loading: boolean;
}) {
  return (
    <div className="md:rounded-xl md:bg-zinc-800 md:p-4">
      <div className="mt-1 md:h-96">
        <textarea
          id="daVinciPrompt"
          name="daVinciPrompt"
          key="daVinciPrompt"
          autoFocus
          className="mt-1 block h-full w-full rounded-md border-gray-300 bg-zinc-800 p-2 text-zinc-100 placeholder-zinc-400 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
          placeholder="Write a tagline for an ice cream shop"
          defaultValue={textAreaRef.current?.value || ""}
          ref={textAreaRef}
        />
      </div>
      <div className="flex items-center justify-end">
        <button
          onClick={submitPromptOnClick}
          className={classNames(
            "focus:border-zinc-600:ring-2 focus: mt-4 flex inline-flex flex-row items-center justify-center justify-center gap-2 rounded-md border border-transparent bg-zinc-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-zinc-700 focus:ring-blue-500",
            loading && "cursor-not-allowed opacity-50"
          )}
        >
          {loading && <Spinner />}
          Submit
        </button>
      </div>
    </div>
  );
}

const Spinner = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-5 w-5 animate-spin"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);
