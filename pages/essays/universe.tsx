import Head from "next/head";
import { Shell } from "../../components/Shell";

// @ts-ignore
import content from "../../content/universe.md";

import { classNames } from "../../utils";
import { Prose } from "../../components/Prose";
import { NewsletterSignup } from "../../components/NewsletterSignup";

export const Essay = () => {
  return (
    <>
      <Head>
        <title>{"Github drops git | Nishant Jha"}</title>
        <link rel="canonical" href={"https://nishantjha.org/essays/universe"} />
      </Head>

      <Shell>
        <section className="mt-8 flex flex-col">
          <Prose
            className={classNames("h-full w-full lg:ml-8 lg:overflow-y-scroll")}
            content={content}
          />
        </section>
        <NewsletterSignup pageName={"universe"} className="mt-8" />
      </Shell>
    </>
  );
};
export default Essay;
