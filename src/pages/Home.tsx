import React, { useState } from "react";
import { Menu } from "../components/Menu";
import { Projects } from "../components/Projects";
import { Writings } from "../components/Writings";
import { config } from "../config";

export const Home = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <header id="header">
            <a href="index.html" className="logo">
              <strong>
                {config.Personal.firstname} {config.Personal.lastname}{" "}
              </strong>
            </a>
          </header>

          <section id="banner">
            <div className="content">
              <header>
                <h1>Hi, I’m {config.Personal.firstname}!</h1>
                <p>$HEADLINE$</p>
              </header>
              <p>{config.Personal.bio}</p>
              <a href={`${config.Personal.linkedin}`}>
                <strong>My LinkedIn</strong>
              </a>
              <br />
              <a href="resume.pdf">
                <strong>My Resume</strong>
              </a>
            </div>
            <span className="image object">
              <img src="images/profile.jpg" alt="Profile" />
            </span>
          </section>

          <section>
            <header className="major">
              <h2>Projects</h2>
            </header>
            <div className="features">
              <Projects projects={config.Projects} />
            </div>
          </section>

          <section>
            <header className="major">
              <h2>Writing</h2>
            </header>
            <div className="features">
              <Writings essays={config.Essays} />
            </div>
          </section>
        </div>
      </div>
      <div id={"sidebar"} className={sidebarOpen ? "" : "inactive"}>
        <div className="inner">
          <Menu essays={config.Essays} projects={config.Projects} />
          <section>
            <header className="major">
              <h2>Get in touch</h2>
            </header>
            <p>
              Didn't find what you need? Have any questions? Feel free to reach
              out!
            </p>
            <ul className="contact">
              <li className="fa-envelope-o">
                <a href={`mailto:${config.Personal.email}`}>
                  {config.Personal.email}
                </a>
              </li>
            </ul>
          </section>
          <footer id="footer">
            <p className="copyright">
              &copy; 2022 {config.Personal.firstname} | All rights reserved.
            </p>
          </footer>
          <a
            href="#sidebar"
            aria-hidden="true"
            className={"toggle"}
            onClick={() => setSideBarOpen(!sidebarOpen)}
          >
            Toggle
          </a>
        </div>
      </div>
    </div>
  );
};
