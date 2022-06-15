import dynamic from "next/dynamic";
import { useState } from "react";
const SeqViz = dynamic(() => import("../components/SeqViz"), { ssr: false });

import { Annotation } from "seqviz/dist/part";
import { useLocalStorage } from "../hooks/useLocalStorage";
import EmptySequence from "./EmptySequence";
import { SeqBuilderForm } from "./SeqBuilderForm";

export const SeqBuildViz = () => {
  const [annotations] = useLocalStorage<Annotation[]>({
    initialValue: [],
    key: "seqviz-annotations",
  });

  const [sequence, setSequence] = useLocalStorage<string | null>({ initialValue: null, key: "seqbuilder-sequence" });
  const [viewerMode] = useState<"linear" | "circular">("circular");

  return (
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
      <SeqBuilderForm sequence={sequence || ""} setSequence={setSequence} />
    </div>
  );
};
