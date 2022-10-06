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
import { Prose } from "../../components/Prose";
import { Shell } from "../../components/Shell";

// @ts-ignore
import content from "../../content/sitearch.md";
import { useWindowSize } from "../../hooks/useWindowSize";
import { classNames } from "../../utils";

export const SiteArch = () => {
  const size = useWindowSize();

  return (
    <>
      <Head>
        <title>Site Arch</title>
        <link rel="canonical" href={"https://nishantjha.org/sitearch"} />
      </Head>

      <Shell>
        <h1 className="flex-2 text-3xl font-semibold text-blue-100">Personal Site</h1>
        <h2 className="flex-2 text-xl font-semibold text-zinc-400">Architecture Diagram</h2>

        <section className="flex flex-col">
          <div className="mt-8 mb-8 gap-8 bg-zinc-700 md:rounded-xl md:p-8 lg:-mx-24">
            <div
              style={{ height: size.height }}
              className="-mx-3 h-[30rem] bg-white md:col-span-2 md:mx-auto md:w-full md:rounded-xl lg:h-[45rem]"
            >
              <OverviewFlow />
            </div>
          </div>
          <Prose className={classNames("h-full w-full lg:ml-8 lg:overflow-y-scroll")} content={content} />
        </section>
      </Shell>
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

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: {
      label: (
        <a href="https://github.com/ninjha01/personal-site" className="underline" target="_blank" rel="noreferrer">
          <code>ninjha01/personal-site</code>
        </a>
      ),
    },

    position: { x: 250, y: 10 },
  },
  {
    id: "2",

    data: {
      label: "Github Actions",
    },
    position: { x: 50, y: 120 },
    className: "h-72 w-64 bg-blue-200 -z-10",
  },
  {
    id: "2a",
    type: "input",
    data: {
      label: "Linting",
    },
    parentNode: "2",
    extent: "parent",
    position: { x: 55, y: 30 },
    style: {
      zIndex: 10,
    },
  },
  {
    id: "2b",
    parentNode: "2",
    extent: "parent",
    position: { x: 55, y: 80 },
    data: {
      label: "Unit Tests",
    },
  },
  {
    id: "2c",
    parentNode: "2",
    extent: "parent",
    position: { x: 55, y: 130 },
    data: {
      label: "Deploy to Staging",
    },
    sourcePosition: Position.Right,
  },
  {
    id: "2d",
    parentNode: "2",
    extent: "parent",
    position: { x: 55, y: 180 },
    data: {
      label: "End to End Tests",
    },
    targetPosition: Position.Right,
  },
  {
    id: "2e",
    parentNode: "2",
    extent: "parent",
    position: { x: 55, y: 230 },
    data: {
      label: "Deploy to Prod",
    },
  },
  {
    id: "3",
    data: {
      label: (
        <>
          Staging Env
          <br />
          <a href="https://staging.nishantjha.org" className="underline" target="_blank" rel="noreferrer">
            staging.nishantjha.org
          </a>
        </>
      ),
    },
    position: { x: 550, y: 130 },
    style: {
      zIndex: -10,
      height: 80,
      width: 180,
    },
    className: "bg-green-200 -z-10",
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom,
  },
  {
    id: "4",
    data: {
      label: (
        <>
          Production Env
          <br />
          <a href="https://www.nishantjha.org" className="underline" target="_blank" rel="noreferrer">
            nishantjha.org
          </a>
        </>
      ),
    },
    position: { x: 400, y: 450 },
    style: {
      zIndex: -10,
      height: 30 * 7,
      width: 120 + 30,
    },
    className: "h-72 w-64 bg-green-200 -z-10",
    targetPosition: Position.Left,
  },
  {
    id: "4a",
    type: "input",
    data: {
      label: "React Frontend",
    },
    parentNode: "4",
    extent: "parent",
    position: { x: 55, y: 65 },
    style: {
      zIndex: 10,
    },
  },
  {
    id: "4b",
    parentNode: "4",
    extent: "parent",
    position: { x: 55, y: 125 },
    data: {
      label: "Flask Backend",
    },
  },
  {
    id: "4c",
    parentNode: "4",
    extent: "parent",
    position: { x: 55, y: 185 },
    data: {
      label: "Cloud Storage",
    },
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "commit",
  },
  {
    id: "e2c-3",
    source: "2c",
    target: "3",
    label: "gcloud deploy",
  },
  {
    id: "e3-2d",
    source: "3",
    target: "2d",
    label: "cypress",
  },
  { id: "e2e-4", source: "2", target: "4", label: "gcloud deploy" },
];

export default SiteArch;