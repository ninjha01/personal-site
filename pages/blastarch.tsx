import Head from "next/head";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  DefaultEdgeOptions,
  Edge,
  MarkerType,
  Node,
  Position,
  useEdgesState,
  useNodesState,
} from "react-flow-renderer";
import { Sidebar } from "../components/Sidebar";
import { useWindowSize } from "../hooks/useWindowSize";

// @ts-ignore
import content from "../content/blastarch.md";

import { classNames } from "../utils";
import { Prose } from "../components/Prose";

export const SiteArch = () => {
  const size = useWindowSize();

  return (
    <>
      <Head>
        <title>Blast Arch</title>
        <link rel="canonical" href={"https://nishantjha.org/sitearch"} />
      </Head>

      <Sidebar>
        <h1 className="flex-2 text-3xl font-semibold text-gray-900">Blast Service</h1>
        <h2 className="flex-2 text-xl font-semibold text-gray-500">Architecture Diagram</h2>

        <section className="flex flex-col lg:flex-row">
          <div style={{ height: size.height }} className="h-[30rem] w-full lg:h-[45rem]">
            <OverviewFlow />
          </div>

          <Prose className={classNames("mt-8 h-full w-full lg:ml-8 lg:overflow-y-scroll")} content={content} />
        </section>
      </Sidebar>
    </>
  );
};

const onInit = (reactFlowInstance: any) => console.log("flow loaded:", reactFlowInstance);

const OverviewFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = (params: any) => setEdges(eds => addEdge(params, eds));

  const edgeOptions: DefaultEdgeOptions = {
    animated: true,
    style: {
      stroke: "#1e3a8a" /* blue-900 */,
    },
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed, color: "black" },
    labelStyle: { fontFamily: "monospace", fontSize: 16 },
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      defaultEdgeOptions={edgeOptions}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      nodesConnectable={false}
      attributionPosition="top-right"
      panOnScroll={false}
      zoomOnScroll={false}
      preventScrolling={false}
    >
      <Controls showZoom={false} showFitView={true} showInteractive={false} />
      <Background size={0.6} color="#1e3a8a" gap={16} />
    </ReactFlow>
  );
};

export const initialNodes: Node[] = [
  {
    id: "1",
    data: {
      label: "Google Compute Engine",
    },
    position: { x: 50, y: 120 },
    className: "h-72 w-64 bg-blue-200 -z-10",
  },
  {
    id: "1a",
    type: "input",
    data: {
      label: "Cloud VM",
    },
    parentNode: "1",
    extent: "parent",
    position: { x: 55, y: 30 },
    style: {
      zIndex: 10,
    },
  },
];

export const initialEdges: Edge[] = [];

export default SiteArch;
