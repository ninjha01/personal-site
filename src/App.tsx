import React, { Suspense } from "react";
import ReactGA from "react-ga4";
import { Home } from "./pages/Home";

function App() {
  const snap = navigator.userAgent !== "ReactSnap";
  const production = process.env.NODE_ENV === "production";
  if (production && snap) {
    ReactGA.initialize("G-EVE1M74Q2V");
  }
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
