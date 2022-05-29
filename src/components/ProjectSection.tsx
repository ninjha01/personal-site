import React from "react";
import { ProjectType } from "../commonTypes";

export const ProjectSection = (props: { projects: ProjectType[] }) => {
  const { projects } = props;
  return (
    <section>
      <h1
        id="projects"
        className="mb-8 pt-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 text-2xl border-t"
      >
        Projects
      </h1>

      <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
            {projects.map((project) => (
              <ProjectCard project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const ProjectCard = (props: { project: ProjectType }) => {
  const {
    project: { title, url, description, img },
  } = props;
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="h-60">
        <img
          className="object-cover object-center w-full rounded-t-xl p-8"
          src={img}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <a href={url} className="block mt-2">
            <p className="text-xl font-semibold text-neutral-600">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </a>
        </div>
      </div>
    </div>
  );
};