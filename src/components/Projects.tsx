import React from "react";
import { ProjectType } from "../commonTypes";

const ProjectItem = (props: {
  icon: string;
  url: string;
  title: string;
  blurb: string;
}) => {
  const { icon, url, title, blurb } = props;
  return (
    <article>
      <span className={`icon ${icon}`}></span>
      <div className="content">
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p dangerouslySetInnerHTML={{ __html: blurb }}></p>
      </div>
    </article>
  );
};

export const Projects = (props: { projects: ProjectType[] }) => {
  const { projects } = props;
  return (
    <>
      {projects.map((proj) => (
        <ProjectItem
          icon={proj.icon}
          url={proj.url}
          title={proj.title}
          blurb={proj.blurb}
        />
      ))}
    </>
  );
};
