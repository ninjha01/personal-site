import { useEffect } from "react";

import { SeqBuildViz } from "../components/SeqBuildViz";
import SequenceStats from "../components/SequenceStats";
import { Sidebar } from "../components/Sidebar";
import SlideOver from "../components/SlideOver";

function SeqBuild() {
  console.log("rendered");
  useEffect(function setTitle() {
    document.title = "SeqBuild";
  }, []);

  return (
    /* Can't use strict mode due to seqviz's usage of findDOMNode */
    <Sidebar noStrict>
      <div className="flex h-screen flex-col">
        <SequenceStats className={"my-8 flex h-48"} />
        <div className="h-full flex-1 text-lg">
          <SeqBuildViz />
        </div>
      </div>
      <SlideOver>
        <>Hello World</>
      </SlideOver>
    </Sidebar>
  );
}

export default SeqBuild;
