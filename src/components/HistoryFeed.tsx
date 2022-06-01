import { ChartPieIcon, CheckIcon, CodeIcon, PencilAltIcon, XIcon } from "@heroicons/react/solid";
import { classNames } from "../utils";

export const HistoryFeed = () => {
  const eventTypes = {
    edited: { icon: PencilAltIcon, bgColorClass: "bg-gray-400" },
    error: { icon: XIcon, bgColorClass: "bg-red-500" },
    success: { icon: CheckIcon, bgColorClass: "bg-green-500" },
    plot: { icon: ChartPieIcon, bgColorClass: "bg-purple-500" },
    execute: { icon: CodeIcon, bgColorClass: "bg-blue-500" },
  };

  const timeline = [
    {
      id: 0,
      type: eventTypes.edited,
      content: "Edited",
      target: "Cell #1",
      cell_id: 1,
      date: "Jun 1",
      datetime: "2022-06-01",
    },
    {
      id: 1,
      type: eventTypes.execute,
      content: "Ran",
      target: "Cell #1",
      cell_id: 1,
      date: "Oct 4",
      datetime: "2022-06-01",
    },
    {
      id: 2,
      type: eventTypes.success,
      content: "Successfully ran",
      target: "Cell #1",
      cell_id: 1,
      date: "Oct 4",
      datetime: "2022-06-01",
    },
    {
      id: 3,
      type: eventTypes.execute,
      content: "Ran",
      target: "Cell #4",
      cell_id: 4,
      date: "Jun 1",
      datetime: "2022-06-01",
    },
    {
      id: 4,
      type: eventTypes.plot,
      content: "Plot generated by",
      target: "Cell #4",
      cell_id: 4,
      date: "Jun 1",
      datetime: "2022-06-01",
    },
    {
      id: 5,
      type: eventTypes.execute,
      content: "Ran",
      target: "Cell #5",
      cell_id: 5,
      date: "Jun 1",
      datetime: "2022-06-01",
    },
    {
      id: 6,
      type: eventTypes.success,
      content: "Successfully ran",
      target: "Cell #5",
      cell_id: 5,
      date: "Jun 1",
      datetime: "2022-06-01",
    },
    {
      id: 7,
      type: eventTypes.execute,
      content: "Ran",
      target: "Cell #3",
      cell_id: 3,
      date: "Jun 1",
      datetime: "2022-06-01",
    },
    {
      id: 8,
      type: eventTypes.error,
      content: "Error thrown by",
      target: "Cell #3",
      cell_id: 3,
      date: "Jun 1",
      datetime: "2022-06-01",
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
                          {item.content}{" "}
                          <a className="text-sm text-gray-500" href={`#cell-${item.cell_id}`}>
                            {item.target}
                          </a>
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
            Clear Timeline and Run All
          </button>
        </div>
      </div>
    </section>
  );
};
