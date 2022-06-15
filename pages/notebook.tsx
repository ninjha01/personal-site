import Head from "next/head";
import { CodeCell, ErrorCell, getCells, PlotCell } from "../components/Cell";
import { HistoryFeed } from "../components/HistoryFeed";
import { getKernelData, KernelCard } from "../components/KernalCard";
import { Sidebar } from "../components/Sidebar";

function Notebook() {
  const cells = getCells();

  return (
    <>
      <Head>
        <title>Code Notebook</title>
      </Head>

      <Sidebar>
        <div className="rounded-lg border-l-8 border-dashed border-blue-900 border-opacity-60 bg-slate-300 px-4 py-5 shadow-xl">
          <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
            <h3 className="flex flex-row gap-4 text-2xl font-medium text-blue-900 ">
              Code Notebook
              <span className="m-auto flex animate-pulse items-center justify-center rounded-full bg-yellow-300 px-2 py-2 text-center text-xs text-slate-900">
                Work in Progress
              </span>
            </h3>

            <div className="mt-0 ml-4">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Run All
              </button>
            </div>
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2 lg:col-start-1">
              {cells.map(cell => {
                switch (cell.type) {
                  case "Code":
                    return <CodeCell key={cell.id} item={cell} />;
                  case "Plot":
                    return <PlotCell key={cell.id} item={cell} />;
                  case "Error":
                    return <ErrorCell key={cell.id} item={cell} />;
                  default:
                    throw new Error(`Unknown cell type ${cell}`);
                }
              })}
            </div>
            <div className="order-first flex flex-col gap-6 lg:order-last">
              <KernelCard kernelData={getKernelData()} />
              <HistoryFeed />
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Notebook;
