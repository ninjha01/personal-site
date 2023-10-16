import Head from "next/head";
import { Shell } from "../../components/Shell";

// @ts-ignore
import content from "../../content/squeeze.md";

import { classNames } from "../../utils";
import { Prose } from "../../components/Prose";

export const Essay = () => {
  return (
    <>
      <Head>
        <title>
          {"Software Ate the World, Now it's Your Turn | Nishant Jha"}
        </title>
        <link rel="canonical" href={"https://nishantjha.org/essay/squeeze"} />
      </Head>

      <Shell>
        <section className="mt-8 flex flex-col">
          <Prose
            className={classNames("h-full w-full lg:ml-8 lg:overflow-y-scroll")}
            content={content}
          />
        </section>
      </Shell>
    </>
  );
};
export default Essay;
