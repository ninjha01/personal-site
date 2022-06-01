import React from "react";
import { CodeCell, ErrorCell, getCells, PlotCell } from "../components/Cell";
import { HistoryFeed } from "../components/HistoryFeed";
import { getKernelData, KernelCard } from "../components/KernalCard";
import { Sidebar } from "../components/Sidebar";

function Notebook() {
  const cells = getCells();
  return (
    <Sidebar>
      <div className="bg-slate-300 px-4 py-5 shadow-xl rounded-lg border-l-8 border-blue-900 border-opacity-60 border-dashed">
        <div className="border-b border-gray-200 flex items-center justify-between mb-8 pb-4">
          <h3 className="text-2xl font-medium text-blue-900 flex flex-row gap-4 ">
            Code Notebook
            <span className="px-2 py-2 items-center justify-center rounded-full text-xs font-medium bg-yellow-300 text-slate-900 animate-pulse">
              Work in Progress
            </span>
          </h3>

          <div className="mt-0 ml-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Run All
            </button>
          </div>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-start-1 lg:col-span-2">
            {cells.map((cell, i) => {
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
          <div className="flex flex-col gap-6">
            <KernelCard kernelData={getKernelData()} />
            <HistoryFeed />
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default Notebook;
