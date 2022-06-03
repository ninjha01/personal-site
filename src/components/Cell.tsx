import { ArrowUpIcon } from "@heroicons/react/outline";
import { ArrowDownIcon, ChevronDoubleRightIcon, PlusIcon } from "@heroicons/react/solid";
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
    <div className="ml-2 mr-auto flex gap-4 items-center space-x-5" id={props.id}>
      <div className="flex items-center">
        <button
          type="button"
          className="-m-2.5 w-10 h-6 py-1 sm:h-8 rounded-full inline-flex items-center justify-center text-gray-400 hover:bg-blue-900 hover:bg-opacity-70 hover:text-gray-50 bg-gray-200 rounded-xl"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="-m-2.5 w-10 h-6 py-1 sm:h-8 rounded-full inline-flex items-center justify-center text-gray-400 hover:bg-blue-900 hover:bg-opacity-70 hover:text-gray-50 bg-gray-200 rounded-xl"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="-m-2.5 w-10 h-6 py-1 sm:h-8 rounded-full inline-flex items-center justify-center text-gray-400 hover:bg-blue-900 hover:bg-opacity-70 hover:text-gray-50 bg-gray-200 rounded-xl"
        >
          <ArrowDownIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white px-4 py-5 shadow-sm rounded-lg sm:px-6 relative hover:shadow-xl hover:shadow-blue-900 transition ease-in-out duration-300">
      {props.children}
      <div className="mt-2 flex flex-row gap-2 items-between justify-between">
        {!props.hideShellBar && ShellBar}
        {props.runnable && (
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
        <div className="flex flex-row mb-4 -mt-2">
          <div className="text-gray-500 p-1 hover:text-gray-900 bg-white hover:bg-gray-100 border border-transparent text-sm font-medium rounded-md">
            {item.language}
          </div>
          <span className="inline-flex flex-0 mr-0 -mt-1 self-end items-center px-2.5 py-1 px-2 mx-auto rounded-full text-xs font-medium bg-gray-200 text-gray-600">
            Cell #{item.id}
          </span>
        </div>

        <div>
          {/* Using editable div to get vertial autosizing, textarea doesn't support this */}
          <div
            id={`cell-${item.id}-codeText`}
            className="resize-y font-mono shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md border border-gray-300 p-2 whitespace-pre-line"
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
        <img
          className="object-cover object-center mx-auto rounded-lg shadow-xl-4"
          alt="hero"
          src={require("../assets/images/plot.png")}
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
        <ReactMarkdown children={item.errorMsg} remarkPlugins={[remarkGfm]} />
      </div>
    </CellShell>
  );
};
