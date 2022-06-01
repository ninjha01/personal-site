import { Tab } from "@headlessui/react";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import React from "react";
import { classNames } from "../utils";

type CellType = "Plot" | "Code";

interface CodeCellDatum {
  id: number;
  type: "Code";
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

type CellDatum = CodeCellDatum | PlotCellDatum;

export const getCells = (): CellDatum[] => {
  return [
    {
      id: 1,
      type: "Code",
      codeText: "print(Hello)",
      errorMsg: null,
      successOuput: null,
    },
    {
      id: 2,
      type: "Code",
      codeText: "print(Hello)",
      errorMsg: null,
      successOuput: null,
    },
    {
      id: 3,
      type: "Code",
      codeText: "print(Hello)",
      errorMsg: null,
      successOuput: null,
    },
    {
      id: 4,
      type: "Plot",
      data: [1, 2, 3, 4, 5],
      errorMsg: null,
    },
    {
      id: 5,
      type: "Code",
      codeText: "print(Hello)",
      errorMsg: null,
      successOuput: null,
    },
  ];
};

export const CodeCell = (props: { item: CodeCellDatum }) => {
  const { item } = props;
  return (
    <form id={`cell-${item.id}`} className="mb-8 bg-white px-4 py-5 shadow-xl sm:rounded-lg sm:px-6 relative">
      <Tab.Group>
        {({ selectedIndex }) => (
          <>
            <Tab.List className="flex items-center">
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "text-gray-900 bg-gray-100 hover:bg-gray-200"
                      : "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100",
                    "px-3 py-1.5 border border-transparent text-sm font-medium rounded-md"
                  )
                }
              >
                Python
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "text-gray-900 bg-gray-100 hover:bg-gray-200"
                      : "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100",
                    "ml-2 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md"
                  )
                }
              >
                TypeScript
              </Tab>

              <div className="ml-auto flex items-center text-gray-500 text-sm bg-gray-100 hover:bg-gray-200 space-x-5 py-1 px-2 rounded-xl">
                Cell #{item.id}
              </div>
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                <label htmlFor="comment" className="sr-only">
                  Python Code
                </label>
                <div>
                  <textarea
                    rows={5}
                    name="comment"
                    id="comment"
                    className="font-mono shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder='print("Hello World")'
                    defaultValue={""}
                  />
                </div>
              </Tab.Panel>
              <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                <label htmlFor="comment" className="sr-only">
                  TypeScript Code
                </label>
                <div>
                  <textarea
                    rows={5}
                    name="comment"
                    id="comment"
                    className="font-mono shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder='console.log("Hello World")'
                    defaultValue={""}
                  />
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </>
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
    </form>
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
