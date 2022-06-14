import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "../commonTypes";

export const ProjectSection = (props: { projects: ProjectType[] }) => {
  const { projects } = props;
  return (
    <section>
      <h1
        id="projects"
        className="border-t pt-8 text-4xl text-2xl font-bold leading-none tracking-tighter text-neutral-600"
      >
        Projects
      </h1>

      <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {projects.map(project => (
              <ProjectCard key={project.title} project={project} />
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
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md duration-200 ease-in-out hover:shadow-xl hover:shadow-blue-900 lg:-mt-8">
      <div className="h-60">
        <Link href={url}>
          <div className="relative h-32 w-5/6 mx-auto mt-8">
            <a>
              <Image src={img} alt="" objectFit="contain" layout="fill" className="" />
            </a>
          </div>
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <a href={url} className="mt-2 block">
            <p className="text-xl font-semibold text-neutral-600">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </a>
        </div>
      </div>
    </div>
  );
};
