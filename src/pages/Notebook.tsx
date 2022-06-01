import { Tab } from "@headlessui/react";
import {
  AtSymbolIcon,
  ChartPieIcon,
  CheckIcon,
  CodeIcon,
  LinkIcon,
  PencilAltIcon,
  ThumbUpIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Sidebar } from "../components/Sidebar";
import { classNames } from "../utils";

function Notebook() {
  return (
    <Sidebar>
      <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between mb-16">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Lab Notebook</h3>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Run!
          </button>
        </div>
      </div>
      <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
        <div className="space-y-6 lg:col-start-1 lg:col-span-2">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Cell key={i} item={{ idx: i }} />
          ))}
        </div>
        <div>
          <HistoryFeed />
        </div>
      </div>
    </Sidebar>
  );
}

const HistoryFeed = () => {
  const eventTypes = {
    edited: { icon: PencilAltIcon, bgColorClass: "bg-gray-400" },
    error: { icon: ThumbUpIcon, bgColorClass: "bg-red-500" },
    success: { icon: CheckIcon, bgColorClass: "bg-green-500" },
    plot: { icon: ChartPieIcon, bgColorClass: "bg-blue-500" },
  };
  const timeline = [
    {
      id: 1,
      type: eventTypes.edited,
      content: "Applied to",
      target: "Front End Developer",
      date: "Sep 20",
      datetime: "2020-09-20",
    },
    {
      id: 2,
      type: eventTypes.error,
      content: "Advanced to phone screening by",
      target: "Bethany Blake",
      date: "Sep 22",
      datetime: "2020-09-22",
    },
    {
      id: 3,
      type: eventTypes.success,
      content: "Completed phone screening with",
      target: "Martha Gardner",
      date: "Sep 28",
      datetime: "2020-09-28",
    },
    {
      id: 4,
      type: eventTypes.plot,
      content: "Advanced to interview by",
      target: "Bethany Blake",
      date: "Sep 30",
      datetime: "2020-09-30",
    },
    {
      id: 5,
      type: eventTypes.success,
      content: "Completed interview with",
      target: "Katherine Snyder",
      date: "Oct 4",
      datetime: "2020-10-04",
    },
  ];
  return (
    <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
      <div className="bg-white px-4 py-5 shadow-xl sm:rounded-lg sm:px-6">
        <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
          Timeline
        </h2>

        {/* Activity Feed */}
        <div className="mt-6 flow-root">
          <ul className="-mb-8">
            {timeline.map((item, itemIdx) => (
              <li key={item.id}>
                <div className="relative pb-8">
                  {itemIdx !== timeline.length - 1 ? (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={classNames(
                          item.type.bgColorClass,
                          "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                        )}
                      >
                        <item.type.icon className="w-5 h-5 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          {item.content} {item.target}
                        </p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time dateTime={item.datetime}>{item.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-col justify-stretch">
          <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Advance to offer
          </button>
        </div>
      </div>
    </section>
  );
};

const Cell = (props: { item: { idx: number } }) => {
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
                Write
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
                  <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
                    Preview content will render here.
                  </div>
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
          Post
        </button>
      </div>
    </form>
  );
};

export default Notebook;
