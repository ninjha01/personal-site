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
} from "reactflow";
import { Shell } from "../../components/Shell";
import { useWindowSize } from "../../hooks/useWindowSize";

// @ts-ignore
import content from "../../content/blastarch.md";

import { classNames } from "../../utils";
import { Prose } from "../../components/Prose";

export const SiteArch = () => {
  const size = useWindowSize();

  return (
    <>
      <Head>
        <title>Blast Arch | Nishant Jha</title>
        <link rel="canonical" href={"https://nishantjha.org/blastarch"} />
      </Head>

      <Shell>
        <h1 className="flex-2 text-3xl font-semibold text-blue-100">
          Blast Service
        </h1>
        <h2 className="flex-2 text-xl font-semibold text-zinc-400">
          Architecture Diagram
        </h2>

        <section className="flex flex-col">
          <div className="mb-8 mt-8 gap-8 bg-zinc-700 md:rounded-xl md:p-8 lg:-mx-24">
            <div
              style={{ height: size.height }}
              className="-mx-3 h-[30rem] bg-white md:col-span-2 md:mx-auto md:w-full md:rounded-xl lg:h-[45rem]"
            >
              <OverviewFlow />
            </div>
          </div>

          <Prose
            className={classNames("h-full w-full lg:ml-8 lg:overflow-y-scroll")}
            content={content}
          />
        </section>
      </Shell>
    </>
  );
};

const onInit = (reactFlowInstance: any) =>
  console.log("flow loaded:", reactFlowInstance);

const OverviewFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = (params: any) => setEdges((eds) => addEdge(params, eds));

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
      attributionPosition="bottom-right"
      panOnScroll={false}
      zoomOnScroll={false}
      preventScrolling={false}
    >
      <Controls showZoom={false} showFitView={true} showInteractive={false} />
      <Background size={0.6} color="#1e3a8a" gap={16} />
    </ReactFlow>
  );
};

const dbGenerationYOffset = 0;

const dbGenerationNodes: Node[] = [
  {
    id: "db0",
    type: "input",
    data: {
      label: "DB Generation Architecture",
    },
    position: { x: -20, y: dbGenerationYOffset - 150 },
    style: { height: 300, width: 1000 },
    className: "-z-20",
  },
  {
    id: "db1",
    type: "input",
    data: {
      label: "client / cron",
    },
    position: { x: 0, y: dbGenerationYOffset + 45 },
    sourcePosition: Position.Right,
  },
  {
    id: "db2",

    data: {
      label: "Cloud Run",
    },
    position: { x: 300, y: dbGenerationYOffset + 0 },
    className: "h-28 w-64 bg-blue-200 -z-10",
    targetPosition: Position.Top,
    sourcePosition: Position.Top,
  },
  {
    id: "db2a",
    parentNode: "db2",
    extent: "parent",
    position: { x: 55, y: dbGenerationYOffset + 45 },
    data: {
      label: "[ncbi/blast] container",
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "db3",
    data: {
      label: "Cloud Storage",
    },
    position: { x: 800, y: dbGenerationYOffset + -100 },
    style: {
      zIndex: -10,
    },
    className: "bg-green-200 -z-10",
    targetPosition: Position.Bottom,
    sourcePosition: Position.Left,
  },
];

const dbGenerationEdges: Edge[] = [
  {
    id: "e1-2",
    source: "db1",
    target: "db2a",
    label: "request",
  },
  {
    id: "e2c-3",
    source: "db3",
    target: "db2",
    label: "pull client fasta files",
  },
  {
    id: "e3-2d",
    source: "db2a",
    target: "db3",
    label: "push blast.db",
  },
  { id: "e2e-4", source: "db2", target: "db4", label: "gcloud deploy" },
];

const blastQueryYOffset = 250;

const blastQueryNodes: Node[] = [
  {
    id: "blast0",
    type: "input",
    data: {
      label: "Query Architecture",
    },
    position: { x: -20, y: blastQueryYOffset - 50 },
    style: { height: 400, width: 1000 },
    className: "-z-20",
  },
  {
    id: "blast1",
    type: "input",
    data: {
      label: "CDN",
    },
    position: { x: 0, y: blastQueryYOffset + 100 },
    className: "h-28 w-60 bg-cyan-200 -z-10",
  },
  {
    id: "blast1a",
    parentNode: "blast1",
    extent: "parent",
    data: {
      label: "Frontend",
    },
    position: { x: 50, y: 40 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "blast2",
    data: {
      label: "Load Balancer",
    },
    position: { x: 300, y: blastQueryYOffset },
    className: "h-80 w-20 bg-orange-200 -z-10",
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "blast3",
    data: {
      label: "Client-specific Container",
    },
    position: { x: 450, y: blastQueryYOffset },
    className: "h-10 w-80 bg-blue-200",
    targetPosition: Position.Left,
    sourcePosition: Position.Left,
  },
  {
    id: "blast4",
    data: {
      label: "",
    },
    position: { x: 450, y: blastQueryYOffset + 52 },
    className: "h-[215px] w-80 bg-blue-200 -z-10",
    targetPosition: Position.Left,
    sourcePosition: Position.Left,
  },
  {
    id: "blast4a",
    data: {
      label: "Backend",
    },
    position: { x: 35, y: 15 },
    className: "w-64",
    parentNode: "blast4",
    extent: "parent",
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom,
  },
  {
    id: "blast4b",
    data: {
      label: "NCBI Binaries",
    },
    position: { x: 35, y: 88 },
    className: "w-64",
    parentNode: "blast4",
    extent: "parent",
  },
  {
    id: "blast4c",
    data: {
      label: "Blast DB",
    },
    position: { x: 35, y: 160 },
    className: "w-64",
    parentNode: "blast4",
    extent: "parent",
    targetPosition: Position.Top,
    sourcePosition: Position.Right,
  },
  {
    id: "blast5",
    data: {
      label: "Client-specific Container",
    },
    position: { x: 450, y: blastQueryYOffset + 280 },
    className: "h-10 w-80 bg-blue-200",
    targetPosition: Position.Left,
    sourcePosition: Position.Left,
  },
  {
    id: "blast6",
    data: {
      label: "Cloud Storage",
    },
    position: { x: 800, y: blastQueryYOffset },
    style: {
      zIndex: -10,
    },
    className: "bg-green-200 -z-10",
    targetPosition: Position.Bottom,
    sourcePosition: Position.Bottom,
  },
];

const blastQueryEdges: Edge[] = [
  {
    id: "eBlast1a-Blast2",
    source: "blast1a",
    target: "blast2",
  },
  {
    id: "eBlast2-Blast3",
    source: "blast2",
    target: "blast3",
  },
  {
    id: "eBlast2-Blast4",
    source: "blast2",
    target: "blast4",
  },
  {
    id: "eBlast4-Blast4a",
    source: "blast4",
    target: "blast4a",
  },
  {
    id: "eBlast2-Blast5",
    source: "blast2",
    target: "blast5",
  },
  {
    id: "eBlast4a-Blast4b",
    source: "blast4a",
    target: "blast4b",
  },
  {
    id: "eBlast4b-Blast4c",
    source: "blast4b",
    target: "blast4c",
  },
  {
    id: "eBlast4c-Blast6",
    source: "blast4c",
    target: "blast6",
    label: "periodic pull",
  },
];

const initialNodes: Node[] = [...dbGenerationNodes, ...blastQueryNodes];
const initialEdges: Edge[] = [...dbGenerationEdges, ...blastQueryEdges];
export default SiteArch;
