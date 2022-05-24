import React from "react";
import { EssayType } from "../commonTypes";

export const EssaySection = (props: { essays: EssayType[] }) => {
  const { essays } = props;
  return (
    <section>
      <h1
        id="essays_section"
        className="mb-8 pt-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 text-2xl border-t"
      >
        Essays
      </h1>
      <div className="relative mx-auto max-w-7xl">
        <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {essays.map((essay) => (
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
    <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
      <a href="https://wickedblocks.dev/blog-post">
        <div className="flex-shrink-0">
          <img
            className="object-cover w-full h-48 rounded-lg"
            src={img}
            alt=""
          />
        </div>
      </a>
      <div className="flex flex-col justify-between flex-1">
        <a href={`/${id}`} />
        <div className="flex-1">
          <a href="cards.html#" className="block mt-2 space-y-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
              {title}
            </h3>
            <p className="text-lg font-normal text-gray-500">{description}</p>
          </a>
        </div>
      </div>
    </div>
  );
};
