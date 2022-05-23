import React from "react";

export const Projects = () => {
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
          <ul>$WRITING$</ul>
        </li>
        <li>
          <span className="opener">Projects</span>
          <ul>$PROJECTS$</ul>
        </li>
      </ul>
    </nav>
  );
};
