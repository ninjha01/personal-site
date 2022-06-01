import React from "react";
import { EssayType } from "../commonTypes";

export const WritingItem = (props: { title: string; id: string; description: string }) => {
  return (
    <article key={JSON.stringify(props)}>
      <span className="icon fa-pencil"></span>
      <div className="content">
        <h3>
          <a href={`${props.id}.html`}>{props.title}</a>
        </h3>
        <p>{props.description}</p>
      </div>
    </article>
  );
};

export const Writings = (props: { essays: EssayType[] }) => {
  return (
    <>
      {props.essays.map(essay => (
        <WritingItem
          key={`Essay: ${JSON.stringify(essay)}`}
          title={essay.title}
          id={essay.id}
          description={essay.description}
        />
      ))}
    </>
  );
};
