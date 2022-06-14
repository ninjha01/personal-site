import React from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { FourOhFour } from "./pages/404";
import { Blast } from "./pages/Blast";
import Notebook from "./pages/Notebook";
import SeqBuild from "./pages/SeqBuild";
import { SiteArch } from "./pages/SiteArch";
import reportWebVitals from "./reportWebVitals";

const production = process.env.NODE_ENV === "production";
if (production) {
  ReactGA.initialize("G-EVE1M74Q2V");
}
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
    <Routes>
      <React.StrictMode>
        <Route path="/" element={<App />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/site_arch" element={<SiteArch />} />
      </React.StrictMode>

      {/* SeqViz uses deprecated findDOMNode and so we can't use strict mode on pages with it */}
      <Route path="/seqbuild" element={<SeqBuild />} />
      <Route path="/blast" element={<Blast />} />

      <React.StrictMode>
        <Route path="*" element={<FourOhFour />} />
      </React.StrictMode>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
