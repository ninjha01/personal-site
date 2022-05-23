import React from "react";
import { EssayType, ProjectType } from "../commonTypes";

const WritingMenuItem = (props: { filename: string; title: string }) => {
  const { title, filename } = props;
  return (
    <li key={JSON.stringify(props)}>
      <a href={`${filename}.html`}>{title}</a>
    </li>
  );
};

const ProjectMenuItem = (props: { url: string; title: string }) => {
  const { title, url } = props;
  return (
    <li key={JSON.stringify(props)}>
      <a href={url}>{title}</a>
    </li>
  );
};

export const Menu = (props: {
  essays: EssayType[];
  projects: ProjectType[];
}) => {
  const { essays, projects } = props;
  return (
    <nav id="menu">
      <header className="major">
        <h2>Menu</h2>
      </header>
      <ul>
        <li>
          <a href="index.html">Homepage</a>
        </li>
        <li>
          <span className="opener">Writing</span>
          <ul>
            {essays.map((e) => (
              <WritingMenuItem filename={e.filename} title={e.title} />
            ))}
          </ul>
        </li>
        <li>
          <span className="opener">Projects</span>
          <ul>
            {projects.map((proj) => (
              <ProjectMenuItem url={proj.url} title={proj.title} />
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};