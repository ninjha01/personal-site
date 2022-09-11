import { ArrowUpIcon } from "@heroicons/react/outline";
import { ArrowDownIcon, ChevronDoubleRightIcon, PlusIcon } from "@heroicons/react/solid";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type CellType = "Plot" | "Code" | "Error";
export type LanguageType = "Python" | "R";

interface CodeCellDatum {
  id: number;
  type: "Code";
  language: LanguageType;
  codeText: string;
  errorMsg: string | null;
  successOuput: string | null;
}

interface PlotCellDatum {
  id: number;
  type: "Plot";
  data: any[];
  errorMsg: string | null;
}
interface ErrorCellDatum {
  id: number;
  type: "Error";
  errorMsg: string;
}

type CellDatum = CodeCellDatum | PlotCellDatum | ErrorCellDatum;

export const getCells = (): CellDatum[] => {
  return [
    {
      type: "Code" as const,
      language: "Python" as const,
      codeText: `import pandas as pd
import numpy as np
import matplotlib as plt`,
      errorMsg: null,
      successOuput: null,
    },
    {
      type: "Code" as const,
      language: "Python" as const,
      codeText: `ys = 200 + np.random.randn(100)`,
      errorMsg: null,
      successOuput: null,
    },
    {
      type: "Code" as const,
      language: "Python" as const,
      codeText: `x = [x for x in range(len(ys))]`,
      errorMsg: null,
      successOuput: null,
    },
    {
      type: "Code" as const,
      language: "Python" as const,
      codeText: `plt.plot(x, ys, '-')
plt.fill_between(x, ys, 195, where=(ys > 195), facecolor='g', alpha=0.6)
plt.title("Sample Visualization")
plt.show()`,
      errorMsg: null,
      successOuput: null,
    },
    {
      type: "Plot" as const,
      data: [1, 2, 3, 4, 5],
      errorMsg: null,
    },
    {
      type: "Code" as const,
      language: "Python" as const,
      codeText: `print(Hello World)`,
      errorMsg: null,
      successOuput: null,
    },
    {
      type: "Error" as const,
      errorMsg: `\`print(Hello World)\`


                    ^


\`SyntaxError: invalid syntax\``,
    },
  ].map((x, i) => ({ ...x, id: i + 1 }));
};

const CellShell = (props: { children: any; id: string; runnable: boolean; hideShellBar?: boolean }) => {
  const ShellBar = (
    <div className="ml-2 mr-auto flex items-center gap-4 space-x-5" id={props.id}>
      <div className="flex items-center">
        <button
          type="button"
          className="-m-2.5 inline-flex h-6 w-10 items-center justify-center rounded-full rounded-xl bg-zinc-600 py-1 text-gray-400 hover:bg-blue-900 hover:bg-opacity-70 hover:text-gray-50 sm:h-8"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="-m-2.5 inline-flex h-6 w-10 items-center justify-center rounded-full rounded-xl bg-zinc-600 py-1 text-gray-400 hover:bg-blue-900 hover:bg-opacity-70 hover:text-gray-50 sm:h-8"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="-m-2.5 inline-flex h-6 w-10 items-center justify-center rounded-full rounded-xl bg-zinc-600 py-1 text-gray-400 hover:bg-blue-900 hover:bg-opacity-70 hover:text-gray-50 sm:h-8"
        >
          <ArrowDownIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative rounded-lg bg-zinc-700 px-4 py-5 shadow-sm transition duration-300 ease-in-out hover:shadow-xl hover:shadow-blue-900 sm:px-6">
      {props.children}
      <div className="items-between mt-2 flex flex-row justify-between gap-2">
        {!props.hideShellBar && ShellBar}
        {props.runnable && (
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <ChevronDoubleRightIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export const CodeCell = (props: { item: CodeCellDatum }) => {
  const { item } = props;
  return (
    <CellShell id={`cell-${item.id}`} runnable>
      <div className="">
        <div className="mb-4 -mt-2 flex flex-row">
          <div className="rounded-md border border-transparent bg-zinc-700 p-1 text-sm font-medium text-zinc-400 hover:bg-gray-100 hover:text-gray-900">
            {item.language}
          </div>
          <span className="flex-0 mx-auto mr-0 -mt-1 inline-flex items-center self-end rounded-full bg-zinc-600 px-2.5 py-1 px-2 text-xs font-medium text-zinc-400">
            Cell #{item.id}
          </span>
        </div>

        <div>
          {/* Using editable div to get vertial autosizing, textarea doesn't support this */}
          <div
            id={`cell-${item.id}-codeText`}
            className="block w-full resize-y whitespace-pre-line rounded-md border border-gray-300 border-gray-300 p-2 font-mono text-zinc-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter text here."
            contentEditable
            suppressContentEditableWarning={
              true
            } /* Supresses warning because we don't care about updates to item.codeText in the demo */
          >
            {item.codeText}
          </div>
        </div>
      </div>
    </CellShell>
  );
};

export const PlotCell = (props: { item: PlotCellDatum }) => {
  const { item } = props;
  return (
    <CellShell id={`cell-${item.id}`} runnable={false} hideShellBar={true}>
      <div className="my-2">
        <Image
          className="shadow-xl-4 mx-auto rounded-lg object-cover object-center"
          alt="hero"
          src={require("../public/assets/images/plot.png")}
        />
      </div>
    </CellShell>
  );
};

export const ErrorCell = (props: { item: ErrorCellDatum }) => {
  const { item } = props;
  return (
    <CellShell id={`cell-${item.id}`} runnable={false} hideShellBar>
      <div className="text-red-500">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.errorMsg}</ReactMarkdown>
      </div>
    </CellShell>
  );
};
