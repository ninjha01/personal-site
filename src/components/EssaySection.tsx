import React from "react";
import { EssayType } from "../commonTypes";

export const EssaySection = (props: { essays: EssayType[] }) => {
  const { essays } = props;
  return (
    <section>
      <h1
        id="essays"
        className="mb-8 border-t pt-8 text-4xl text-2xl font-bold leading-none tracking-tighter text-neutral-600"
      >
        Essays
      </h1>
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-3">
          {essays.map(essay => (
            <EssayEntry essay={essay} />
          ))}
        </div>
      </div>
    </section>
  );
};
const EssayEntry = (props: { essay: EssayType }) => {
  const {
    essay: { title, id, description, img },
  } = props;
  return (
    <div className="mb-12 flex cursor-pointer flex-col overflow-hidden">
      <a href="#essays">
        <div className="flex-shrink-0">
          <img className="h-48 w-full rounded-lg object-cover" src={img} alt="" />
        </div>
      </a>
      <div className="flex flex-1 flex-col justify-between">
        <a href={`/${id}`}>
          <div className="flex-1">
            <a href="#essays" className="mt-2 block space-y-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">{title}</h3>
              <p className="text-lg font-normal text-gray-500">{description}</p>
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};
