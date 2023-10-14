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
import content from "../../content/llms_will_eat_you.md";

import { classNames } from "../../utils";
import { Prose } from "../../components/Prose";

export const Abstracted = () => {
  return (
    <>
      <Head>
        <title>The Tower of Abstraction | Nishant Jha</title>
        <link rel="canonical" href={"https://nishantjha.org/blog/abstracted"} />
      </Head>

      <Shell>
        <section className="mt-8 flex flex-col">
          <Prose className={classNames("h-full w-full lg:ml-8 lg:overflow-y-scroll")} content={content} />
        </section>
      </Shell>
    </>
  );
};
export default Abstracted;
