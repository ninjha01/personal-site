import Head from "next/head";
import { Shell } from "../../components/Shell";

// @ts-ignore
import content from "../../content/tower.md";

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
export default Abstracted;
