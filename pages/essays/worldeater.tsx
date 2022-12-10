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
import { Shell } from "../../components/Shell";

// @ts-ignore
import content from "../../content/abstracted.md";

import { classNames } from "../../utils";
import { Prose } from "../../components/Prose";

export const Abstracted = () => {
  return (
    <>
      <Head>
        <title>The World Eater | Nishant Jha</title>
        <link rel="canonical" href={"https://nishantjha.org/blog/abstracted"} />
      </Head>

      <Shell>
        <h1 className="flex-2 text-3xl font-semibold text-blue-100 flex items-center gap-4">
          The World Eater
          <span className="px-2 py-1 text-xs text-zinc-800 rounded-full bg-amber-300 animate-pulse text-center">
            Work in Progress
          </span>
        </h1>
        <section className="mt-8 flex flex-col">
          <Prose className={classNames("h-full w-full lg:ml-8 lg:overflow-y-scroll")} content={content} />
        </section>
      </Shell>
    </>
  );
};
export default Abstracted;
