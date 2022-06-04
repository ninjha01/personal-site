import React from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { FourOhFour } from "./pages/404";
import { Blast } from "./pages/Blast";
import Notebook from "./pages/Notebook";
import { SiteArch } from "./pages/SiteArch";
import reportWebVitals from "./reportWebVitals";

const production = process.env.NODE_ENV === "production";
if (production) {
  ReactGA.initialize("G-EVE1M74Q2V");
}
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blast" element={<Blast />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/site_arch" element={<SiteArch />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
