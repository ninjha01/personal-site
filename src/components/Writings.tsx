import React from "react";
import { EssayType } from "../commonTypes";

export const WritingItem = (props: {
  title: string;
  filename: string;
  blurb: string;
}) => {
  return (
    <article>
      <span className="icon fa-pencil"></span>
      <div className="content">
        <h3>
          <a href={`${props.filename}.html`}>{props.title}</a>
        </h3>
        <p>{props.blurb}</p>
      </div>
    </article>
  );
};

export const Writings = (props: { essays: EssayType[] }) => {
  return (
    <>
      {props.essays.map((essay) => (
        <WritingItem
          title={essay.title}
          filename={essay.filename}
          blurb={essay.blurb}
        />
      ))}
    </>
  );
};
