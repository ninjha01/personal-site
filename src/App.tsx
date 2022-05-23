import { importMDX } from "mdx.macro";
import React, { lazy, Suspense } from "react";
import "./assets/css/main.css";
import { Home } from "./pages/Home";

const Content = lazy(() => importMDX("../essays/control_problem.md"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
