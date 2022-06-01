import { Tab } from "@headlessui/react";
import { AtSymbolIcon, CodeIcon, LinkIcon } from "@heroicons/react/solid";
import React from "react";
import { classNames } from "../utils";

export const Cell = (props: { item: { idx: number } }) => {
  return (
    <form action="#" className="mb-8 bg-white px-4 py-5 shadow-xl sm:rounded-lg sm:px-6 relative z-10">
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
                Edit
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
                Preview
              </Tab>

              {/* These buttons are here simply as examples and don't actually do anything. */}
              {selectedIndex === 0 ? (
                <div className="ml-auto flex items-center space-x-5">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Insert link</span>
                      <LinkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Insert code</span>
                      <CodeIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Mention someone</span>
                      <AtSymbolIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ) : null}
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                <label htmlFor="comment" className="sr-only">
                  Comment
                </label>
                <div>
                  <textarea
                    rows={5}
                    name="comment"
                    id="comment"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Add your comment..."
                    defaultValue={""}
                  />
                </div>
              </Tab.Panel>
              <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                <div className="border-b">
                  <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">Code Output</div>
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
          Run Cell
        </button>
      </div>
    </form>
  );
};
