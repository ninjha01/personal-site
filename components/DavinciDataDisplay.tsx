import { classNames } from "../utils";
import { DavinciResponse } from "../pages/api/davinci";

export const DataDisplay = ({
  data,
  acceptText,
  loading,
}: {
  data: DavinciResponse | null;
  acceptText: () => void;
  loading: boolean;
}) => {
  const containerClass = classNames(
    "lg:mx-auto rounded-xl border-4 border-zinc-600 bg-zinc-900 p-4 text-base ",
    loading ? "animate-pulse" : ""
  );
  if (!data) {
    const placeholderClass = "bg-zinc-700 border border-zinc-600 mb-4 rounded-xl opacity-50";
    return (
      <div className={classNames(containerClass, "border-dashed")}>
        <h1 className="flex-2 mb-2 text-3xl font-semibold text-zinc-600 opacity-50">Response: </h1>
        <h2 className={classNames("w-100 h-5 max-w-7xl lg:w-[420px]", placeholderClass)}></h2>
        <h3 className={classNames("h-5 w-80", placeholderClass)}></h3>
        <div className={classNames("flex w-full flex-col gap-2 space-y-1")}>
          <div className={classNames("flex flex w-full items-center")}>
            <div className={classNames("h-5 w-80", placeholderClass)}></div>
            <div className={classNames("ml-4  h-5 w-12", placeholderClass)}></div>
          </div>
          <div className={classNames("mb-2 h-5 w-36", placeholderClass)}></div>
          <div className={classNames("h-44 w-full", placeholderClass)}></div>
        </div>
      </div>
    );
  }

  const { text, cost, tokens } = data;
  return (
    <div className={classNames(containerClass, "max-w-prose")}>
      <h2 className="font-semibold leading-6 text-blue-300">Tokens: {tokens}</h2>
      <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-zinc-100 sm:text-4xl">
        Cost: ${(Math.round(cost * 100) / 100).toFixed(4)}
      </h3>
      <div className="mt-8 h-96 overflow-y-scroll ">
        <div className="rounded-xl py-2 pr-4 ">
          {text.split("\n").map((paragraph, i) => (
            <p key={`paragrah-${i}`} className="py-2 text-lg text-zinc-300 first:pt-0 last:pb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button
          onClick={acceptText}
          className={classNames(
            "focus:border-zinc-600:ring-2 focus: mt-4 mr-1 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-blue-500"
          )}
        >
          Accept Text
        </button>
      </div>
    </div>
  );
};
