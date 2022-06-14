import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SeqViz = dynamic(() => import("../components/SeqViz"), { ssr: false });

import { Annotation } from "seqviz/dist/part";
import EmptySequence from "../components/EmptySequence";
import { Form } from "../components/SeqBuilderForm";
import SequenceStats from "../components/SequenceStats";
import { Sidebar } from "../components/Sidebar";
import SlideOver from "../components/SlideOver";
import { useLocalStorage } from "../hooks/useLocalStorage";

function SeqBuild() {
  console.log("rendered");
  useEffect(function setTitle() {
    document.title = "SeqBuild";
  }, []);

  const [annotations] = useLocalStorage<Annotation[]>({
    initialValue: [],
    key: "seqviz-annotations",
  });

  const [sequence, setSequence] = useLocalStorage<string | null>({ initialValue: null, key: "seqbuilder-sequence" });
  const [viewerMode] = useState<"linear" | "circular">("circular");

  return (
    /* Can't use strict mode due to seqviz's usage of findDOMNode */
    <Sidebar noStrict>
      <div className="flex h-screen flex-col">
        <SequenceStats className={"my-8 flex h-48"} />
        <div className="h-full flex-1 text-lg">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {sequence ? (
              <SeqViz
                seq={sequence}
                annotations={annotations}
                style={{ height: 512, width: "100%" }}
                translations={[]}
                rotateOnScroll={false}
                viewer={viewerMode}
                showAnnotations={true}
                showComplement={true}
                showIndex={true}
                zoom={{ linear: 0, circular: 0 }}
              />
            ) : (
              <EmptySequence />
            )}
            <Form sequence={sequence || ""} setSequence={setSequence} />
          </div>
        </div>
      </div>
      <SlideOver>
        <>Hello World</>
      </SlideOver>
    </Sidebar>
  );
}

export default SeqBuild;
