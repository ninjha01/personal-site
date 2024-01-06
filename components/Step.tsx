import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

export interface StepType {
  name: string;
  href: string;
  id: number;
}
export const Steps = (props: { steps: StepType[]; stepID: number }) => {
  const { steps, stepID } = props;
  return (
    <nav aria-label="Progress">
      <ol className="divide-y divide-gray-300 rounded-md border border-zinc-500 md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            {step.id < stepID ? (
              <div className="group flex w-full items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 group-hover:bg-blue-600">
                    <CheckIcon
                      className="h-6 w-6 text-zinc-100"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="ml-4 text-sm font-medium text-blue-300">
                    {step.name}
                  </span>
                </span>
              </div>
            ) : step.id === stepID ? (
              <div
                className="flex items-center px-6 py-4 text-sm font-medium"
                aria-current="step"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-300">
                  <span className="text-blue-300">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-blue-300">
                  {step.name}
                </span>
              </div>
            ) : (
              <div className="group flex items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-300 group-hover:border-blue-400">
                    <span className="text-blue-300 group-hover:text-blue-400">
                      {step.id}
                    </span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-blue-300 group-hover:text-blue-400">
                    {step.name}
                  </span>
                </span>
              </div>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  className="absolute right-0 top-0 hidden h-full w-5 md:block"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full w-full text-zinc-500"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};
