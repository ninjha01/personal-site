import React from "react";
import "../assets/css/main.css";
import { config } from "../config";

export const Home = () => {
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
              <p>$BIO$</p>
              <a href="$LINKEDIN$">
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
            <div className="features">$PROJECTS$</div>
          </section>

          <section>
            <header className="major">
              <h2>Writing</h2>
            </header>
            <div className="features">$WRITINGS$</div>
          </section>
        </div>
      </div>
      <div id="sidebar">
        <div className="inner">
          $MENU$
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
                <a href="mailto:$EMAIL$">$EMAIL$</a>
              </li>
            </ul>
          </section>
          <footer id="footer">
            <p className="copyright">
              &copy; 2021 {config.Personal.firstname} | All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};
