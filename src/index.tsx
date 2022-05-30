import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { FourOhFour } from "./pages/404";
import { Blast } from "./pages/Blast";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blast" element={<Blast />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}
