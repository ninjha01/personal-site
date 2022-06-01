import { Tab } from "@headlessui/react";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import React from "react";

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
      codeText: "import pandas\n",
      errorMsg: null,
      successOuput: null,
    },
    {
      type: "Code" as const,
      language: "R" as const,
      codeText: "print(Hello)",
      errorMsg: null,
      successOuput: null,
    },
    {
      type: "Code" as const,
      language: "R" as const,
      codeText: "print(Hello)",
      errorMsg: null,
      successOuput: null,
    },
    /* {
  *   type: "Error" as const,
  *   errorMsg: "Ya done goofed",
  * },
  * {
  *   type: "Plot" as const,
  *   data: [1, 2, 3, 4, 5],
  *   errorMsg: null,
  * },
  
  * {
  *   type: "Plot" as const,
  *   data: [1, 2, 3, 4, 5],
  *   errorMsg: null,
  * }, */
    {
      type: "Code" as const,
      language: "Python" as const,
      codeText: "print(Hello)",
      errorMsg: null,
      successOuput: null,
    },
    {
      type: "Code" as const,
      language: "Python" as const,
      codeText: "print(Hello)",
      errorMsg: null,
      successOuput: null,
    },
  ].map((x, i) => ({ ...x, id: i + 1 }));
};

export const CodeCell = (props: { item: CodeCellDatum }) => {
  const { item } = props;
  return (
    <div id={`cell-${item.id}`} className="mb-8 bg-white px-4 py-5 shadow-xl sm:rounded-lg sm:px-6 relative">
      <Tab.Group>
        {({ selectedIndex }) => (
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
              <textarea
                rows={5}
                name="comment"
                id="comment"
                className="font-mono shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter text here."
                defaultValue={item.codeText}
              />
            </div>
          </div>
        )}
      </Tab.Group>
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <ChevronDoubleRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export const PlotCell = (props: { item: PlotCellDatum }) => {
  const { item } = props;
  return (
    <form id={`cell-${item.id}`} className="mb-8 bg-white px-4 py-5 shadow-xl sm:rounded-lg sm:px-6 relative">
      Plot
    </form>
  );
};

export const ErrorCell = (props: { item: ErrorCellDatum }) => {
  const { item } = props;
  return (
    <form id={`cell-${item.id}`} className="mb-8 bg-white px-4 py-5 shadow-xl sm:rounded-lg sm:px-6 relative">
      <div className="text-red-500">Error</div>
    </form>
  );
};
