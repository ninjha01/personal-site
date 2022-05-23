import { importMDX } from "mdx.macro";
import React, { lazy, Suspense } from "react";

const Content = lazy(() => importMDX("../essays/control_problem.md"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  );
}

export default App;
