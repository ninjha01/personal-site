import { useEffect, useState } from "react";
import { SeqViz } from "seqviz";
import { Annotation } from "seqviz/dist/part";
import { Sidebar } from "../components/Sidebar";
import { useLocalStorage } from "../hooks/useLocalStorage";

function SeqBuild() {
  useEffect(function setTitle() {
    document.title = "SeqBuild";
  }, []);
  const [annotations, setAnnotations] = useLocalStorage<Annotation[]>({
    initialValue: [],
    key: "seqviz-annotations",
  });

  const [sequence, setSequence] = useState("Hello");

  const defaultProps = {
    translations: [],
    rotateOnScroll: true,
    viewer: "linear" as const,
    annotations: [],
    showAnnotations: true,
    showComplement: true,
    showIndex: true,
    zoom: { linear: 100, circular: 0 },
    style: { height: 300 },
    seq: "hello",
  };

  return (
    <Sidebar>
      <SeqViz {...defaultProps} seq={sequence} annotations={annotations} />
      Sequence Builder
    </Sidebar>
  );
}

export default SeqBuild;
