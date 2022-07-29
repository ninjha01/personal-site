import { CursorClickIcon, MailOpenIcon, UsersIcon } from "@heroicons/react/solid";
import Head from "next/head";
import { SeqBuildViz } from "../components/SeqBuildViz";
import SequenceStats, { ISequenceStat } from "../components/SequenceStats";
import { Sidebar } from "../components/Sidebar";
import SlideOver from "../components/SlideOver";

const stats: ISequenceStat[] = [
  {
    id: 1,
    name: "Seq Length",
    stat: "71,897",
    previousStat: "71,775",
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Efficacy",
    stat: "58.16%",
    previousStat: "52.76%",
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Defect rate",
    stat: "24.57%",
    previousStat: "21.37",
    change: "3.2%",
    changeType: "decrease",
  },
];

function SeqBuild() {
  return (
    /* Can't use strict mode due to seqviz's usage of findDOMNode */
    <>
      <Head>
        <title>SeqBuild</title>
      </Head>
      <Sidebar noStrict>
        <h1 className="flex-2 text-3xl font-semibold text-blue-900">SeqBuild</h1>
        <h2 className="flex-2 text-xl font-semibold text-gray-500">a sequence building and ordering platform</h2>

        <div className="flex h-full flex-col ">
          <div className="mt-8 flex-1 text-lg">
            <SeqBuildViz />
          </div>
          <SequenceStats className={"my-8"} stats={stats} />
        </div>
        <SlideOver>
          <>Hello World</>
        </SlideOver>
      </Sidebar>
    </>
  );
}

export default SeqBuild;
